// Inline the site CSS into every exported HTML page, after `next build`.
//
// Why: the stylesheet request blocked the first paint on phones (PageSpeed:
// ~540 ms). Next's own `experimental.inlineCss` fixes that but also copies the
// whole CSS (~100 KB) into the page's RSC payload, which the browser then parses
// again during hydration: ~300-500 ms more main-thread work (Total Blocking Time)
// in a throttled phone test. Doing it here keeps only the file names in the payload.
//
// How: each run of `<link rel="stylesheet" href="/_next/static/css/…" data-precedence="next"/>`
// tags gets a `<style data-precedence="next" data-href="href1 href2">…</style>` with the CSS,
// and the links themselves stay but with `disabled`. React 19 looks for an existing
// `link[rel="stylesheet"][href]` during hydration: without the links it re-inserts them
// and downloads the CSS again (tested). A disabled link is found, so React leaves it,
// and the browser does not fetch a disabled stylesheet (tested in Chromium: no request,
// hydration completes, client-side navigation keeps its styles). Page-specific CSS that
// only a later page needs is still loaded by React as a normal link.
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repoRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = path.join(repoRoot, "out");

if (!existsSync(outDir)) {
    console.error("inline-css: out/ not found — run the build first");
    process.exit(1);
}

const LINK_RUN = /(?:<link rel="stylesheet" href="\/_next\/static\/css\/[^"]+\.css" data-precedence="next"\/>)+/g;
const LINK_HREF = /href="(\/_next\/static\/css\/[^"]+\.css)"/g;
const cssCache = new Map();

function readCss(href) {
    if (!cssCache.has(href)) {
        const css = readFileSync(path.join(outDir, href), "utf8");
        // A literal "</style" would end the tag early; CSS never needs it unescaped.
        cssCache.set(href, css.replace(/<\/style/gi, "<\\/style"));
    }
    return cssCache.get(href);
}

function walk(dir, files = []) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            if (entry.name !== "_next" && entry.name !== "images") walk(full, files);
        } else if (entry.name.endsWith(".html")) {
            files.push(full);
        }
    }
    return files;
}

let pages = 0;
for (const file of walk(outDir)) {
    const html = readFileSync(file, "utf8");
    let changed = false;
    const next = html.replace(LINK_RUN, (run) => {
        const hrefs = [...run.matchAll(LINK_HREF)].map((m) => m[1]);
        changed = true;
        const style = `<style data-precedence="next" data-href="${hrefs.join(" ")}">${hrefs.map(readCss).join("\n")}</style>`;
        const disabledLinks = hrefs
            .map((href) => `<link rel="stylesheet" href="${href}" data-precedence="next" disabled=""/>`)
            .join("");
        return style + disabledLinks;
    });
    if (changed) {
        writeFileSync(file, next);
        pages++;
    }
}

console.log(`inline-css: inlined the stylesheets in ${pages} page(s)`);
