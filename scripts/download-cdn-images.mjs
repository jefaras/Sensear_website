/**
 * download-cdn-images.mjs
 * Downloads all remaining Supabase CDN images referenced in en.json/el.json,
 * saves them with SEO-friendly names under public/images/, and
 * prints a replacement map for updating the dictionaries.
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public', 'images');

// ── MAPPING: CDN URL → { localPath, dest } ─────────────────────────────────
// localPath = path under public/images (used in JSON)
// dest      = absolute destination path on disk
const CDN_BASE = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/';

const IMAGE_MAP = [
    // ── Contact / About pages (same image reused) ──
    {
        cdn: '178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg',
        local: 'backgrounds/warm-silver-foil-texture.jpg',
    },
    // ── Contact hero ──
    {
        cdn: 'f3cada14a_gemini-image-2_photography_of_a_scene_captured_in_a_candid_style_with_high-quality_details_show-0--.jpg',
        local: 'contact/contact-hero-venue-consultation.jpg',
    },
    // ── About page journey section ──
    {
        cdn: '92f0d2705_16685b806_pexels-monstera-1408089.jpg',
        local: 'about/about-journey-team-collaboration.jpg',
    },
    // ── About team members ──
    {
        cdn: '9e1d5056f_398e0cca3_84887785_172252324195148_2160204890159185920_n1.jpg',
        local: 'about/team-george-fameliaris.jpg',
    },
    {
        cdn: '98a0a7252_b24ebd26f_JEF_square_bw.png',
        local: 'about/team-john-farazoumis.png',
    },
    {
        cdn: 'a4ebc438b_73ba1e2e2_86455570_172252364195144_3083930653335486464_n1.jpg',
        local: 'about/team-katerina-karali.jpg',
    },
    // ── Blog articles ──
    {
        cdn: '5c8fc795c_hotel-1-1.jpg',
        local: 'blog/blog-designing-sound-hospitality.jpg',
    },
    {
        cdn: '2d2243a41_seedream-40_Upscale_this_image_keeping_all_natural_contexts_and_add_two_small_and_discreet_s-0.jpg',
        local: 'blog/blog-why-luxury-hotels-need-music.jpg',
    },
    {
        cdn: 'f0b3de4b5_gemini-25-flash-image_professional_photo_of_Upscale_this_image_carefully_keeping_the_natural_photo_sty-0.jpg',
        local: 'blog/blog-music-converts-browsers-buyers.jpg',
    },
    {
        cdn: 'c4ed33ff8_gemini-25-flash-image_professional_photo_of_Upscale_this_image_carefully_keeping_the_natural_photo_sty-01.jpg',
        local: 'blog/blog-what-does-music-curator-do.jpg',
    },
    {
        cdn: 'a730d7c9f_gemini-25-flash-image_professional_photo_of_Upscale_this_image_carefully_keeping_the_natural_photo_sty-02.jpg',
        local: 'blog/blog-master-music-curation-cycle.jpg',
    },
    {
        cdn: '3a329efef_gemini-25-flash-image_professional_photo_of_Upscale_this_image_carefully_keeping_the_natural_photo_sty-03.jpg',
        local: 'blog/blog-building-brand-people-can-hear.jpg',
    },
    {
        cdn: '6d2ec8236_g-cb-1-1.jpg',
        local: 'blog/blog-music-shapes-buyer-behavior.jpg',
    },
    {
        cdn: 'ba5124b88_gemini-25-flash-image_professional_photo_of_1-1.jpg',
        local: 'blog/blog-spaces-shape-perceived-wait-time.jpg',
    },
    // ── Hotels & Resorts industry page ──
    {
        cdn: '7aec5d264_seedream-40_professional_photo_of_upscale_the_image_but_make_sure_it_still_looks_realistic_p-1.jpg',
        local: 'industries/hotels-resorts-curated-music-ambiance.jpg',
    },
    {
        cdn: '4bc198c23_BHA1.png',
        local: 'industries/hotels-resorts-boutique-hotel-music.png',
    },
    {
        cdn: 'b32503d17_wi-cltcw-westin-charlotte-dogwood-13256_Classic-Hor1.jpg',
        local: 'industries/hotels-resorts-luxury-hotel-lobby.jpg',
    },
    {
        cdn: '7ba13d3db_95c488ed9_silver-ear-ear-ring.jpg',
        local: 'industries/hotels-resorts-sonic-identity-detail.jpg',
    },
    // ── Restaurants & Bars industry page ──
    {
        cdn: 'e18536343_seedream-40_professional_photo_of_upscale_the_image_but_make_sure_it_still_looks_realistic_1-1.jpg',
        local: 'industries/restaurants-bars-curated-music-atmosphere.jpg',
    },
    {
        cdn: '45c5bf8ee_0518d03f51766be5a36a8fa5df900697.jpg',
        local: 'industries/restaurants-bars-dining-music-experience.jpg',
    },
    {
        cdn: '74f06e87c_dbf1c8542_c383f86fd572aa6ee623a8fd6ab443df.jpg',
        local: 'industries/restaurants-bars-cocktail-bar-atmosphere.jpg',
    },
    {
        cdn: 'bf81c0608_f73e72546f5644a803c4dd204f0d7de1.jpg',
        local: 'industries/restaurants-bars-restaurant-dining-room.jpg',
    },
    // ── Retail Stores industry page ──
    {
        cdn: 'aa39fb29d_ignan-travel-thesquare-5-2048x1328-1-1.jpg',
        local: 'industries/retail-stores-curated-music-shopping.jpg',
    },
    {
        cdn: '989688cc0_fea79f153_e416ab4395ea12d490e85d406ce8fcc3.jpg',
        local: 'industries/retail-stores-music-strategy-browsing.jpg',
    },
    {
        cdn: '1eae8a545_9ce5db84dcf12ffe5ccf1513e7eabca6.jpg',
        local: 'industries/retail-stores-boutique-music-atmosphere.jpg',
    },
    {
        cdn: 'fb3de1cb6_bacc2ba6c_photo-1529480993802-d8e747bb1ecb.jpg',
        local: 'industries/retail-stores-customer-journey-sound.jpg',
    },
    // ── Wellness & Gyms industry page ──
    {
        cdn: '1328f3e9a_80sspa-1-1.jpg',
        local: 'industries/wellness-gyms-luxury-spa-ambient-music.jpg',
    },
    {
        cdn: 'f7415e860_MaxFine-Walk-On-Snow-collection-by-FMG-Fabbrica-Marmi-e-Graniti-4-4c.jpg',
        local: 'industries/wellness-gyms-spa-treatment-music.jpg',
    },
    {
        cdn: '1918a9569_73e713e59820cc7915a71ef35c9d5835.jpg',
        local: 'industries/wellness-gyms-fitness-music-curation.jpg',
    },
    {
        cdn: '677b8f7ca_d3ccc7081_24ff3eb97d703e018840f54d6030eb58.jpg',
        local: 'industries/wellness-gyms-yoga-studio-soundscape.jpg',
    },
    // ── Events & Experiences industry page ──
    {
        cdn: 'aa36ad57a_gemini-25-flash-image_fix_the_woman_s_uppoer_lip_s_right_side_as_it_appears_like_she_was_stung_by_a_be-0.jpg',
        local: 'industries/events-experiences-music-curation-event.jpg',
    },
    {
        cdn: '9c0a5ab31_f202eaf0e_410494315_375848528274698_8398961206007741661_ncropped.jpg',
        local: 'industries/events-experiences-branded-event-music.jpg',
    },
    {
        cdn: '857dd2f02_604e3a452_2eb02f6aa00cbdc92f835b115166f9fb.jpg',
        local: 'industries/events-experiences-event-music-planning.jpg',
    },
    {
        cdn: 'b7d509322_princepartyup4-5.jpg',
        local: 'industries/events-experiences-private-event-soundscape.jpg',
    },
    // ── Art, Museums & Fashion industry page ──
    {
        cdn: '49f04cdfd_seedream-40_professional_photo_of_Upscale_this_image_keeping_all_natural_contexts_and_detail-0.jpg',
        local: 'industries/art-museums-fashion-gallery-curation.jpg',
    },
    {
        cdn: '7952e2759_seedream-40_professional_photo_of_Upscale_this_image_keeping_physical_all_natural_contexts_a-1.jpg',
        local: 'industries/art-museums-fashion-cultural-space-music.jpg',
    },
    {
        cdn: 'a98f357a2_a_gem_of_a_museum_allows_us_to_enjoy_the_biggest_names_in_contemporary_art-cropped.jpg',
        local: 'industries/art-museums-fashion-museum-soundscape.jpg',
    },
    {
        cdn: '0460123b3_652b0f6467d21dea21815655a47b712d.jpg',
        local: 'industries/art-museums-fashion-exhibition-ambient-music.jpg',
    },
    // ── Carousel ── (already in public/images/carousel via previous work, skip if exists)
    {
        cdn: '2d2243a41_seedream-40_Upscale_this_image_keeping_all_natural_contexts_and_add_two_small_and_discreet_s-0.jpg',
        local: 'blog/blog-why-luxury-hotels-need-music.jpg',
        skip: true, // duplicate of above entry
    },
];

// Deduplicate by cdn key
const seen = new Set();
const UNIQUE_MAP = IMAGE_MAP.filter(({ cdn, skip }) => {
    if (skip || seen.has(cdn)) return false;
    seen.add(cdn);
    return true;
});

function download(url, destPath) {
    return new Promise((resolve, reject) => {
        const dir = path.dirname(destPath);
        fs.mkdirSync(dir, { recursive: true });

        if (fs.existsSync(destPath)) {
            console.log(`  [SKIP] Already exists: ${path.relative(PUBLIC_DIR, destPath)}`);
            return resolve('skip');
        }

        const proto = url.startsWith('https') ? https : http;
        const file = fs.createWriteStream(destPath);

        proto.get(url, (res) => {
            if (res.statusCode === 301 || res.statusCode === 302) {
                file.close();
                fs.unlinkSync(destPath);
                return download(res.headers.location, destPath).then(resolve).catch(reject);
            }
            if (res.statusCode !== 200) {
                file.close();
                fs.unlinkSync(destPath);
                return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
            }
            res.pipe(file);
            file.on('finish', () => { file.close(); resolve('ok'); });
        }).on('error', (err) => {
            file.close();
            if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
            reject(err);
        });
    });
}

async function main() {
    console.log(`\nDownloading ${UNIQUE_MAP.length} images...\n`);

    const results = [];

    for (const { cdn, local } of UNIQUE_MAP) {
        const cdnUrl = CDN_BASE + cdn;
        const destPath = path.join(PUBLIC_DIR, local.replace(/\//g, path.sep));
        const localUrl = '/' + local.replace(/\\/g, '/');

        process.stdout.write(`  → ${local} ... `);
        try {
            const status = await download(cdnUrl, destPath);
            console.log(status === 'skip' ? '' : 'OK');
            results.push({ cdnUrl, localUrl, ok: true });
        } catch (err) {
            console.log(`FAILED: ${err.message}`);
            results.push({ cdnUrl, localUrl, ok: false, error: err.message });
        }
    }

    const failed = results.filter(r => !r.ok);
    console.log(`\n✅ Done. ${results.length - failed.length}/${results.length} downloaded.`);
    if (failed.length) {
        console.log('\n❌ Failed:');
        failed.forEach(r => console.log(`  ${r.cdnUrl}\n    ${r.error}`));
    }

    // Print the replacement map as JSON for reference
    const replacementMap = {};
    for (const { cdnUrl, localUrl } of results) {
        replacementMap[cdnUrl] = localUrl;
    }
    console.log('\n--- REPLACEMENT MAP (cdn → local) ---');
    console.log(JSON.stringify(replacementMap, null, 2));
}

main();
