#!/usr/bin/env node
/**
 * fluid-verify.mjs - render handoff prototypes and verify fluid sizing.
 * Usage: node handoff/tools/fluid-verify.mjs "SensEar FAQ.dc.html" [...more basenames]
 * Serves ./handoff over http, opens each page at 1760/1280/900 widths:
 *  - horizontal overflow check (scrollWidth <= clientWidth + 1)
 *  - fixed nav single-line check + pill clipping check
 *  - screenshots -> handoff/screenshots/fluid/<name>-<width>.png
 */
import { createServer } from "node:http";
import { readFileSync, existsSync, mkdirSync } from "node:fs";
import { join, extname } from "node:path";
import { chromium } from "playwright";

const ROOT = join(process.cwd(), "handoff");
const OUT = join(ROOT, "screenshots", "fluid");
mkdirSync(OUT, { recursive: true });

const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".svg": "image/svg+xml", ".gif": "image/gif", ".ico": "image/x-icon",
  ".woff": "font/woff", ".woff2": "font/woff2",
};

const server = createServer((req, res) => {
  try {
    const url = decodeURIComponent(req.url.split("?")[0]);
    let p = join(ROOT, url.replace(/^\/+/, ""));
    if (!p.startsWith(ROOT)) { res.writeHead(403); res.end(); return; }
    if (!existsSync(p)) { res.writeHead(404); res.end("not found: " + url); return; }
    res.writeHead(200, { "content-type": MIME[extname(p).toLowerCase()] || "application/octet-stream" });
    res.end(readFileSync(p));
  } catch (e) { res.writeHead(500); res.end(String(e)); }
});

const WIDTHS = [1760, 1280, 900];
const files = process.argv.slice(2);
if (files.length === 0) { console.error("usage: node fluid-verify.mjs <basename.html>..."); process.exit(2); }

await new Promise((r) => server.listen(0, "127.0.0.1", r));
const port = server.address().port;
const browser = await chromium.launch();
let failures = 0;

for (const f of files) {
  for (const w of WIDTHS) {
    const page = await browser.newPage({ viewport: { width: w, height: 1000 } });
    await page.goto("http://127.0.0.1:" + port + "/" + encodeURIComponent(f), { waitUntil: "load", timeout: 30000 });
    await page.waitForTimeout(1200); // allow support.js reveals/animations
    const checks = await page.evaluate(() => {
      const doc = document.documentElement;
      const overflow = doc.scrollWidth - doc.clientWidth;
      const nav = document.getElementById("se-nav");
      let navOneLine = null, pillClipped = null;
      if (nav) {
        const links = [...nav.querySelectorAll("a")];
        const centers = links.map((a) => { const r = a.getBoundingClientRect(); return Math.round(r.top + r.height / 2); });
        navOneLine = new Set(centers).size <= 1;
        const rightmost = Math.max(...links.map((a) => a.getBoundingClientRect().right));
        pillClipped = rightmost > doc.clientWidth + 1;
      }
      return { overflow, navFound: !!nav, navOneLine, pillClipped };
    });
    const shot = join(OUT, f.replace(/\.dc\.html$/i, "").replace(/[^\w& -]/g, "") + "-" + w + ".png");
    await page.screenshot({ path: shot, fullPage: true });
    const probs = [];
    if (checks.overflow > 1) probs.push("H-OVERFLOW +" + checks.overflow + "px");
    if (checks.navFound && checks.navOneLine === false) probs.push("NAV WRAPPED");
    if (checks.navFound && checks.pillClipped) probs.push("PILL CLIPPED");
    if (!checks.navFound) probs.push("NAV NOT FOUND");
    if (probs.length) failures++;
    console.log((probs.length ? "FAIL " : "ok   ") + w + "px  " + f + (probs.length ? "  [" + probs.join(", ") + "]" : ""));
    await page.close();
  }
}
await browser.close();
server.close();
console.log(failures ? "FAILURES: " + failures : "all checks passed");
process.exit(failures ? 1 : 0);