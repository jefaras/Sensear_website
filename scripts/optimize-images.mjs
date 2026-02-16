#!/usr/bin/env node
/**
 * Image Optimization Script
 * Converts large PNG images to WebP format and optimizes JPEG images
 * Run with: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public', 'images');

// Images to optimize (relative to public/images)
const imagesToOptimize = [
    // Homepage images
    { path: 'homepage/blog-music-branding-tips.png', quality: 85 },
    { path: 'homepage/sensear-branded-vehicle.png', quality: 85 },
    { path: 'homepage/vinyl-records-music-curation.jpg', quality: 80 },
    
    // Case studies images
    { path: 'case-studies/case-study-beach-house.png', quality: 85 },
    { path: 'case-studies/case-study-levantis.png', quality: 85 },
    { path: 'case-studies/case-study-pelicanos.png', quality: 85 },
    { path: 'case-studies/case-studies-hero.jpg', quality: 80 },
];

async function optimizeImage(imagePath, quality) {
    const fullPath = join(publicDir, imagePath);
    const ext = extname(imagePath);
    const baseName = basename(imagePath, ext);
    const dir = dirname(fullPath);
    
    try {
        const fileStat = await stat(fullPath);
        const originalSize = fileStat.size;
        
        console.log(`\nProcessing: ${imagePath}`);
        console.log(`  Original size: ${(originalSize / 1024).toFixed(1)} KB`);
        
        if (ext.toLowerCase() === '.png') {
            // Convert PNG to WebP
            const webpPath = join(dir, `${baseName}.webp`);
            await sharp(fullPath)
                .webp({ quality, effort: 6 })
                .toFile(webpPath);
            
            const webpStat = await stat(webpPath);
            const webpSize = webpStat.size;
            const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);
            
            console.log(`  WebP size: ${(webpSize / 1024).toFixed(1)} KB (${savings}% smaller)`);
            
            // Also create optimized PNG as fallback
            const optimizedPngPath = join(dir, `${baseName}-optimized.png`);
            await sharp(fullPath)
                .png({ compressionLevel: 9, effort: 10 })
                .toFile(optimizedPngPath);
            
            const pngStat = await stat(optimizedPngPath);
            const pngSize = pngStat.size;
            const pngSavings = ((1 - pngSize / originalSize) * 100).toFixed(1);
            
            console.log(`  Optimized PNG: ${(pngSize / 1024).toFixed(1)} KB (${pngSavings}% smaller)`);
            
            return { originalSize, webpSize, pngSize };
        } else if (ext.toLowerCase() === '.jpg' || ext.toLowerCase() === '.jpeg') {
            // Optimize JPEG
            const optimizedPath = join(dir, `${baseName}-optimized.jpg`);
            await sharp(fullPath)
                .jpeg({ quality, mozjpeg: true, chromaSubsampling: '4:2:0' })
                .toFile(optimizedPath);
            
            const optimizedStat = await stat(optimizedPath);
            const optimizedSize = optimizedStat.size;
            const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
            
            console.log(`  Optimized size: ${(optimizedSize / 1024).toFixed(1)} KB (${savings}% smaller)`);
            
            return { originalSize, optimizedSize };
        }
    } catch (error) {
        console.error(`  Error processing ${imagePath}:`, error.message);
        return null;
    }
}

async function main() {
    console.log('='.repeat(60));
    console.log('Image Optimization Script');
    console.log('='.repeat(60));
    
    let totalOriginal = 0;
    let totalOptimized = 0;
    
    for (const image of imagesToOptimize) {
        const result = await optimizeImage(image.path, image.quality);
        if (result) {
            totalOriginal += result.originalSize;
            totalOptimized += result.webpSize || result.optimizedSize || 0;
        }
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('Summary');
    console.log('='.repeat(60));
    console.log(`Total original size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Total optimized size: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Total savings: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
    console.log('\nNote: Optimized files are saved with "-optimized" suffix.');
    console.log('You should manually verify quality before replacing originals.');
}

main().catch(console.error);
