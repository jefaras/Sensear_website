// Fix Next.js 16 static-export segment prefetch 404s (vercel/next.js#85374,
// still open as of 16.1.6). When `next build` runs on Windows, the exporter
// builds segment paths with backslashes but only converts forward slashes to
// dots, so per-segment RSC payloads land in nested directories:
//
//   out/contact/__next.contact/__PAGE__.txt   <- what Windows builds write
//   out/contact/__next.contact.__PAGE__.txt   <- what the client requests
//
// Every page then logs ~24-40 prefetch 404s and the Segment Cache silently
// falls back to full navigations. This walks out/, re-emits each file found
// under a mis-nested `__next.*` directory as the flat dot-joined filename the
// client router requests, and removes the nested directory. Linux/macOS
// builds already emit flat names, so there it finds nothing and is a no-op.
// Remove once the upstream fix ships and Next is upgraded past it.
import { copyFileSync, existsSync, readdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repoRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = path.join(repoRoot, "out");

if (!existsSync(outDir)) {
    console.error("flatten-segment-payloads: out/ not found — run the build first");
    process.exit(1);
}

let flattened = 0;

// Re-emit every file under a mis-nested segment dir (dirName, relative to the
// route dir baseDir) as a flat dotted filename built up in prefix.
function flattenSegmentDir(baseDir, dirName, prefix) {
    const dirFull = path.join(baseDir, dirName);
    for (const entry of readdirSync(dirFull, { withFileTypes: true })) {
        if (entry.isDirectory()) {
            // Deeper nesting, e.g. __next.blog/$d$slug/__PAGE__.txt
            flattenSegmentDir(baseDir, path.join(dirName, entry.name), `${prefix}.${entry.name}`);
        } else {
            copyFileSync(path.join(dirFull, entry.name), path.join(baseDir, `${prefix}.${entry.name}`));
            flattened++;
        }
    }
}

function walk(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
        if (!entry.isDirectory()) continue;
        if (entry.name.startsWith("__next.")) {
            flattenSegmentDir(dir, entry.name, entry.name);
            rmSync(path.join(dir, entry.name), { recursive: true });
        } else {
            walk(path.join(dir, entry.name));
        }
    }
}

walk(outDir);
console.log(`flatten-segment-payloads: flattened ${flattened} segment payload file(s)`);
if (flattened === 0 && process.platform === "win32") {
    // Expected only after upgrading past the upstream fix — then delete this script.
    console.warn(
        "flatten-segment-payloads: nothing to flatten on a Windows build — Next may have fixed vercel/next.js#85374; consider removing this postbuild step"
    );
}
