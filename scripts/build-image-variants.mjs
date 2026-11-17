// Writes WebP variants of every raster image under public/images to public/images/_opt,
// one per width in lib/image-widths.mjs, for the custom next/image loader
// (lib/image-loader.ts). The static export cannot resize images at request time, so this
// runs before `dev` and `build`. A variant is rewritten only when its source is newer.
// Never upscales: widths above the original are written at the original size.
import { readdir, stat, mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { ALL_WIDTHS } from '../lib/image-widths.mjs';

const ROOT = path.join(process.cwd(), 'public', 'images');
const OUT = path.join(ROOT, '_opt');
const RASTER = /\.(jpe?g|png|webp)$/i;
const QUALITY = 75;
const CONCURRENCY = 4;

async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            if (full !== OUT) files.push(...(await walk(full)));
        } else if (RASTER.test(entry.name)) {
            files.push(full);
        }
    }
    return files;
}

async function isFresh(target, sourceMtime) {
    try {
        return (await stat(target)).mtimeMs >= sourceMtime;
    } catch {
        return false;
    }
}

const jobs = [];
for (const source of await walk(ROOT)) {
    const rel = path.relative(ROOT, source);
    const { mtimeMs } = await stat(source);
    for (const width of ALL_WIDTHS) {
        jobs.push({ source, target: path.join(OUT, `${rel}-${width}.webp`), width, mtimeMs });
    }
}

let written = 0;
let index = 0;
async function worker() {
    while (index < jobs.length) {
        const job = jobs[index++];
        if (await isFresh(job.target, job.mtimeMs)) continue;
        await mkdir(path.dirname(job.target), { recursive: true });
        await sharp(job.source)
            .rotate()
            .resize({ width: job.width, withoutEnlargement: true })
            .webp({ quality: QUALITY })
            .toFile(job.target);
        written++;
    }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));
console.log(`build-image-variants: ${written} variant(s) written, ${jobs.length - written} up to date`);
