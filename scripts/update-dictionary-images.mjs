/**
 * update-dictionary-images.mjs
 * Replaces all Supabase CDN image URLs in en.json and el.json
 * with their local /images/... equivalents.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DICT_DIR = path.join(__dirname, '..', 'dictionaries');

const CDN_BASE = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/';

// Map of CDN filename → local path
const REPLACEMENTS = {
    '178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg': '/images/backgrounds/warm-silver-foil-texture.jpg',
    'f3cada14a_gemini-image-2_photography_of_a_scene_captured_in_a_candid_style_with_high-quality_details_show-0--.jpg': '/images/contact/contact-hero-venue-consultation.jpg',
    '92f0d2705_16685b806_pexels-monstera-1408089.jpg': '/images/about/about-journey-team-collaboration.jpg',
    '9e1d5056f_398e0cca3_84887785_172252324195148_2160204890159185920_n1.jpg': '/images/about/team-george-fameliaris.jpg',
    '98a0a7252_b24ebd26f_JEF_square_bw.png': '/images/about/team-john-farazoumis.png',
    'a4ebc438b_73ba1e2e2_86455570_172252364195144_3083930653335486464_n1.jpg': '/images/about/team-katerina-karali.jpg',
    '5c8fc795c_hotel-1-1.jpg': '/images/blog/blog-designing-sound-hospitality.jpg',
    '2d2243a41_seedream-40_Upscale_this_image_keeping_all_natural_contexts_and_add_two_small_and_discreet_s-0.jpg': '/images/blog/blog-why-luxury-hotels-need-music.jpg',
    'f0b3de4b5_gemini-25-flash-image_professional_photo_of_Upscale_this_image_carefully_keeping_the_natural_photo_sty-0.jpg': '/images/blog/blog-music-converts-browsers-buyers.jpg',
    'c4ed33ff8_gemini-25-flash-image_professional_photo_of_Upscale_this_image_carefully_keeping_the_natural_photo_sty-01.jpg': '/images/blog/blog-what-does-music-curator-do.jpg',
    'a730d7c9f_gemini-25-flash-image_professional_photo_of_Upscale_this_image_carefully_keeping_the_natural_photo_sty-02.jpg': '/images/blog/blog-master-music-curation-cycle.jpg',
    '3a329efef_gemini-25-flash-image_professional_photo_of_Upscale_this_image_carefully_keeping_the_natural_photo_sty-03.jpg': '/images/blog/blog-building-brand-people-can-hear.jpg',
    '6d2ec8236_g-cb-1-1.jpg': '/images/blog/blog-music-shapes-buyer-behavior.jpg',
    'ba5124b88_gemini-25-flash-image_professional_photo_of_1-1.jpg': '/images/blog/blog-spaces-shape-perceived-wait-time.jpg',
    '7aec5d264_seedream-40_professional_photo_of_upscale_the_image_but_make_sure_it_still_looks_realistic_p-1.jpg': '/images/industries/hotels-resorts-curated-music-ambiance.jpg',
    '4bc198c23_BHA1.png': '/images/industries/hotels-resorts-boutique-hotel-music.png',
    'b32503d17_wi-cltcw-westin-charlotte-dogwood-13256_Classic-Hor1.jpg': '/images/industries/hotels-resorts-luxury-hotel-lobby.jpg',
    '7ba13d3db_95c488ed9_silver-ear-ear-ring.jpg': '/images/industries/hotels-resorts-sonic-identity-detail.jpg',
    'e18536343_seedream-40_professional_photo_of_upscale_the_image_but_make_sure_it_still_looks_realistic_1-1.jpg': '/images/industries/restaurants-bars-curated-music-atmosphere.jpg',
    '45c5bf8ee_0518d03f51766be5a36a8fa5df900697.jpg': '/images/industries/restaurants-bars-dining-music-experience.jpg',
    '74f06e87c_dbf1c8542_c383f86fd572aa6ee623a8fd6ab443df.jpg': '/images/industries/restaurants-bars-cocktail-bar-atmosphere.jpg',
    'bf81c0608_f73e72546f5644a803c4dd204f0d7de1.jpg': '/images/industries/restaurants-bars-restaurant-dining-room.jpg',
    'aa39fb29d_ignan-travel-thesquare-5-2048x1328-1-1.jpg': '/images/industries/retail-stores-curated-music-shopping.jpg',
    '989688cc0_fea79f153_e416ab4395ea12d490e85d406ce8fcc3.jpg': '/images/industries/retail-stores-music-strategy-browsing.jpg',
    '1eae8a545_9ce5db84dcf12ffe5ccf1513e7eabca6.jpg': '/images/industries/retail-stores-boutique-music-atmosphere.jpg',
    'fb3de1cb6_bacc2ba6c_photo-1529480993802-d8e747bb1ecb.jpg': '/images/industries/retail-stores-customer-journey-sound.jpg',
    '1328f3e9a_80sspa-1-1.jpg': '/images/industries/wellness-gyms-luxury-spa-ambient-music.jpg',
    'f7415e860_MaxFine-Walk-On-Snow-collection-by-FMG-Fabbrica-Marmi-e-Graniti-4-4c.jpg': '/images/industries/wellness-gyms-spa-treatment-music.jpg',
    '1918a9569_73e713e59820cc7915a71ef35c9d5835.jpg': '/images/industries/wellness-gyms-fitness-music-curation.jpg',
    '677b8f7ca_d3ccc7081_24ff3eb97d703e018840f54d6030eb58.jpg': '/images/industries/wellness-gyms-yoga-studio-soundscape.jpg',
    'aa36ad57a_gemini-25-flash-image_fix_the_woman_s_uppoer_lip_s_right_side_as_it_appears_like_she_was_stung_by_a_be-0.jpg': '/images/industries/events-experiences-music-curation-event.jpg',
    '9c0a5ab31_f202eaf0e_410494315_375848528274698_8398961206007741661_ncropped.jpg': '/images/industries/events-experiences-branded-event-music.jpg',
    '857dd2f02_604e3a452_2eb02f6aa00cbdc92f835b115166f9fb.jpg': '/images/industries/events-experiences-event-music-planning.jpg',
    'b7d509322_princepartyup4-5.jpg': '/images/industries/events-experiences-private-event-soundscape.jpg',
    '49f04cdfd_seedream-40_professional_photo_of_Upscale_this_image_keeping_all_natural_contexts_and_detail-0.jpg': '/images/industries/art-museums-fashion-gallery-curation.jpg',
    '7952e2759_seedream-40_professional_photo_of_Upscale_this_image_keeping_physical_all_natural_contexts_a-1.jpg': '/images/industries/art-museums-fashion-cultural-space-music.jpg',
    'a98f357a2_a_gem_of_a_museum_allows_us_to_enjoy_the_biggest_names_in_contemporary_art-cropped.jpg': '/images/industries/art-museums-fashion-museum-soundscape.jpg',
    '0460123b3_652b0f6467d21dea21815655a47b712d.jpg': '/images/industries/art-museums-fashion-exhibition-ambient-music.jpg',
};

function updateDict(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let count = 0;

    for (const [cdnFile, localPath] of Object.entries(REPLACEMENTS)) {
        const cdnUrl = CDN_BASE + cdnFile;
        // Use a simple global string replace (JSON strings don't have regex special chars that matter here)
        while (content.includes(cdnUrl)) {
            content = content.replace(cdnUrl, localPath);
            count++;
        }
    }

    fs.writeFileSync(filePath, content, 'utf8');
    return count;
}

const files = ['en.json', 'el.json'];
for (const file of files) {
    const filePath = path.join(DICT_DIR, file);
    const count = updateDict(filePath);
    console.log(`✅ ${file}: replaced ${count} CDN URL(s)`);
}

// Verify no CDN references remain
let remainingCDN = 0;
for (const file of files) {
    const content = fs.readFileSync(path.join(DICT_DIR, file), 'utf8');
    const matches = (content.match(/qtrypzzcjebvfcihiynt\.supabase\.co/g) || []).length;
    if (matches > 0) {
        console.warn(`⚠️  ${file}: ${matches} CDN reference(s) still remain!`);
        remainingCDN += matches;
    } else {
        console.log(`✅ ${file}: No CDN references remain.`);
    }
}

if (remainingCDN === 0) {
    console.log('\n🎉 All CDN references have been replaced with local paths!');
} else {
    console.log(`\n⚠️  ${remainingCDN} CDN reference(s) still remain. Check the script.`);
}
