// The root layout renders <html lang="en"> for every route because the Greek
// tree lives below it under app/[lang] and a static export has no per-request
// way to switch the attribute. Rewrite the exported Greek pages instead.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repoRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const elDir = path.join(repoRoot, "out", "el");

function htmlFiles(dir) {
    return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) return htmlFiles(full);
        return entry.name.endsWith(".html") ? [full] : [];
    });
}

let changed = 0;
for (const file of htmlFiles(elDir)) {
    const html = readFileSync(file, "utf8");
    const updated = html.replace('<html lang="en"', '<html lang="el"');
    if (updated !== html) {
        writeFileSync(file, updated);
        changed++;
    }
}

console.log(`set-el-lang: updated lang attribute in ${changed} Greek page(s)`);
if (changed === 0) {
    console.warn("set-el-lang: no files changed — check that out/el exists and the build ran");
    process.exitCode = 1;
}
