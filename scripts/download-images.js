/**
 * Image Download Script
 * Downloads all images from Supabase CDN and renames them with SEO-friendly names
 * Run with: node scripts/download-images.js
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Image mapping: CDN URL -> Local path with SEO-friendly name
const imageMappings = [
  // Brand Assets
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e5fb8532d_sensear-logo-avatar-color1.png',
    dest: 'public/images/brand/sensear-logo-color.png'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/a42606150_sensear-logo-avatar-color1.png',
    dest: 'public/images/brand/sensear-logo-color.png' // Same image, will only download once
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7a2f42e1a_sensear-logo-avatar-white-transparent1.png',
    dest: 'public/images/brand/sensear-logo-white.png'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bdbf0fb5d_sensear-logo-avatar-white-transparent1.png',
    dest: 'public/images/brand/sensear-logo-white.png' // Same image
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/21a008aa5_picturetopeopleorg-3dd2d76b45071cf3a83492fa044da51b0fe8ba66777df92c31.png',
    dest: 'public/images/brand/contact-email.png'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6cd5af555_picturetopeopleorg-af1f54707bfc9381612737a8cbdc641c34f5f390c625633f3b.png',
    dest: 'public/images/brand/contact-phone.png'
  },
  
  // Backgrounds
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ae546991c_Untitleddesign.png',
    dest: 'public/images/backgrounds/footer-background-pattern.png'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg',
    dest: 'public/images/backgrounds/background-texture-warm-silver.jpg'
  },
  
  // Homepage
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ee4f6e2db_SIGNATUREcropped.jpg',
    dest: 'public/images/homepage/sensear-signature-playlist-service.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5a170449c_lwnxeqhxcfez5hw0yraf-OK.jpg',
    dest: 'public/images/homepage/vinyl-records-music-curation.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6e62c430c_03aebeb4e_car-1OK.png',
    dest: 'public/images/homepage/sensear-branded-vehicle.png'
  },
  
  // Client Logos
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b8c4f5bc6_Klouvi-Bar_final.jpg',
    dest: 'public/images/homepage/clients/client-klouvi-bar-athens.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/17f736607_Blue-Bamboo_final.jpg',
    dest: 'public/images/homepage/clients/client-blue-bamboo-athens-serifos.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/730cfd91d_Beach-House_final.jpg',
    dest: 'public/images/homepage/clients/client-beach-house-antiparos.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fc48e3d65_Pelicanos_final.jpg',
    dest: 'public/images/homepage/clients/client-pelicanos-sifnos.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/65422bc1d_fav.png',
    dest: 'public/images/homepage/clients/client-yam-antiparos.png'
  },
  
  // Blog Preview Images
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9619c7d50_e56c8a322bf8043723ba7e215cf5e636.jpg',
    dest: 'public/images/homepage/blog-music-hospitality-brand.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg',
    dest: 'public/images/homepage/blog-music-curation-venues.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png',
    dest: 'public/images/homepage/blog-music-branding-tips.png'
  },
  
  // Carousel Images
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e517a47e3_universal_upscale_0_4f88a784-7ce2-4381-8059-39738ad141ea_0.jpg',
    dest: 'public/images/carousel/carousel-venue-atmosphere-1.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6fa9ec2a4_ace50e7b5_E_HryzeWYAUw8vR-2CROPPED1-1.jpg',
    dest: 'public/images/carousel/carousel-venue-atmosphere-2.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/52886774b_OneOnly_Aesthesis_P4_Neo_Boutique_Exterior_0033_MASTER_1-1.png',
    dest: 'public/images/carousel/carousel-oneonly-aesthesis-hotel.png'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6fcaa40a3_e56a199c4_ac423ae7b75beed60a76ecc7a719d544croppedUPSCALEDcropped.jpg',
    dest: 'public/images/carousel/carousel-event-venue.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b042a0fd5_d879cafadbbf888b32b8923798fcbcf3-cropped.jpg',
    dest: 'public/images/carousel/carousel-hospitality-space.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fa74dc9ac_skycropped1-1.png',
    dest: 'public/images/carousel/carousel-sky-venue.png'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/65063f93c_home-1-scaled-1-1.jpg',
    dest: 'public/images/carousel/carousel-home-interior.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f18df65bd_GR2C1917-1-1455x970_1-1.jpg',
    dest: 'public/images/carousel/carousel-lifestyle-event.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/cd9cf79ec_The-Venice-Glass-Week-2023-01_1-1.jpg',
    dest: 'public/images/carousel/carousel-venice-glass-week.jpg'
  },
  
  // Services Main
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/25d5bd632_gemini-25-flash-image_Upscale_this_image_carefully_adding_some_1980s_accessories_to_the_woman_s_hand_o-0.jpg',
    dest: 'public/images/services/services-hero-strategic-music.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ad6308d11_402461766_1151218075859356_9152177816492568307_n.jpg',
    dest: 'public/images/services/service-signature-playlists.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/587b0ab41_IMG_20250801_204842.jpg',
    dest: 'public/images/services/service-event-soundtracks.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f787993a3_gemini-25-flash-image_Upscale_this_image_and_fix_anything_that_looks_distorted_or_blurred-0.jpg',
    dest: 'public/images/services/service-sonic-strategy.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/793e3d2c0_gemini-25-flash-image_Upscale_this_image_and_fix_any_face_details_look_distorted_take_care_in_the_eyes-1.jpg',
    dest: 'public/images/services/service-audio-upgrades.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/706733b3c_f9c386a1d5dba0530f1176b031bff1a4-UPSC.jpg',
    dest: 'public/images/services/services-delivery-process.jpg'
  },
  
  // Signature Playlists
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/cb5c9be16_fe959a9eda0e3059a0b19f803958ba85-cropped.jpg',
    dest: 'public/images/services/signature-playlists/signature-playlists-hero.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da61f346a_afb08a148_fe959a9eda0e3059a0b19f803958ba8511.jpg',
    dest: 'public/images/services/signature-playlists/signature-playlists-curation.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/87dbd6b8d_ngirwbclf1ak7t0bbzyv.jpg',
    dest: 'public/images/services/signature-playlists/signature-playlists-hotel-room.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16c07c365_cc313a1e26a1dd887202657b5dabf32c.jpg',
    dest: 'public/images/services/signature-playlists/signature-playlists-vinyl-collection.jpg'
  },
  
  // Event Soundtracks
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f5124bf21_pxbee_2025-11-20_15-29-00-cropped1-1.jpg',
    dest: 'public/images/services/event-soundtracks/event-soundtracks-hero.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e56a199c4_ac423ae7b75beed60a76ecc7a719d544croppedUPSCALED.jpg',
    dest: 'public/images/services/event-soundtracks/event-soundtracks-planning.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9f56a9904_2f602f264fc83649ea78ee45caeec916upscaled.jpg',
    dest: 'public/images/services/event-soundtracks/event-soundtracks-venue.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f5882e104_IMG_20250917_225633.jpg',
    dest: 'public/images/services/event-soundtracks/event-soundtracks-process.jpg'
  },
  
  // Sonic Identity
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9e78deacd_gemini-25-flash-image_Upscale_this_image_and_fix_anything_that_looks_distorted_or_blurred-0.jpg',
    dest: 'public/images/services/sonic-identity/sonic-identity-hero.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/deb3db30e_image00006b-CROPPED1.jpg',
    dest: 'public/images/services/sonic-identity/sonic-identity-workshop.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/2f1aa2923_00a27c3bd633abfcfe751c91ef9d3f08sonic.jpg',
    dest: 'public/images/services/sonic-identity/sonic-identity-development.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7c6f67623_d6be48cfcce95f702a6c4b34c0e7cc47CROPPED-pxbee-minitools-enhance-2025112017940.jpg',
    dest: 'public/images/services/sonic-identity/sonic-identity-implementation.jpg'
  },
  
  // Audio Upgrades
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/22a32a26f_seedream-40_professional_photo_of_a_sleek_speaker_in_a_modern_setting_with_a_collection_of_r-1crop1-1.jpg',
    dest: 'public/images/services/audio-upgrades/audio-upgrades-hero.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/8aea621ce_e65177c598c0c9820abde209555dc0d0cropped2-pxbee-minitools-enhance-20251120175811.jpg',
    dest: 'public/images/services/audio-upgrades/audio-upgrades-assessment.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fb6a2cfcc_0acfe1722c9ef9946388029ddb720290CROPPED.jpg',
    dest: 'public/images/services/audio-upgrades/audio-upgrades-venue.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b00d7c94c_aiease_1763654314701.jpg',
    dest: 'public/images/services/audio-upgrades/audio-upgrades-clarity.jpg'
  },
  
  // Industries
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/652c5c5b3_a10ba3fc4_-cropped.jpg',
    dest: 'public/images/industries/industries-hero.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b8b8c94c7_e0dd5f695_13e97d3def8d47a1efe25c37e0f29eb211.jpg',
    dest: 'public/images/industries/industry-hotels-resorts.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/361d4fa4c_Marmelo-by-Mitchell-Eades-Issue-18-Feature-The-Local-Project-Image-2-cropped-.jpg',
    dest: 'public/images/industries/industry-restaurants-bars.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e61f3b993_efeae9e53_56bb71da7fa44cbf6f001204format-webpwidth-1440_wWzsf3qJ3dJMkxWN-11.jpg',
    dest: 'public/images/industries/industry-retail-stores.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/edb073e85_upscalemedia-transformed.jpg',
    dest: 'public/images/industries/industry-wellness-gyms.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ace50e7b5_E_HryzeWYAUw8vR-2CROPPED.jpg',
    dest: 'public/images/industries/industry-events-experiences.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e8678d8d0_ec55631fd_204f0aeb3f27e1d66d7e764876f0fa4a11.jpg',
    dest: 'public/images/industries/industry-art-museums-fashion.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/c66f2842d_a6bc0a060_car-21.png',
    dest: 'public/images/industries/industries-connected-worlds.png'
  },
  
  // About
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/738905847_gemini-image-2_Photography_of_a_candid_scene_with_a_blue_background_featuring_a_woman_s_figure_-0.jpg',
    dest: 'public/images/about/about-hero.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9e1d5056f_398e0cca3_84887785_172252324195148_2160204890159185920_n1.jpg',
    dest: 'public/images/about/team-george-fameliaris.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/98a0a7252_b24ebd26f_JEF_square_bw.png',
    dest: 'public/images/about/team-john-farazoumis.png'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/a4ebc438b_73ba1e2e2_86455570_172252364195144_3083930653335486464_n1.jpg',
    dest: 'public/images/about/team-katerina-karali.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/df442a3bc_f12d13b47_IMG_20250722_165530.jpg',
    dest: 'public/images/about/about-unique-approach.jpg'
  },
  
  // Case Studies
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d7a77faed_flux-pro-20_photography_of_Upscale_this_image_candid_photography_style-0.jpg',
    dest: 'public/images/case-studies/case-studies-hero.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/4246ff146_upscalemedia-transformed.png',
    dest: 'public/images/case-studies/case-study-beach-house.png'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5b48f2dce_pelicanos-2-5.png',
    dest: 'public/images/case-studies/case-study-pelicanos.png'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/2886fc06f_hyggelig-aftenstemningcropped-pxbee-minitools-enhance-20251212181718.jpg',
    dest: 'public/images/case-studies/case-study-yam.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d36a8c70d_2e5887651_Levantis1.png',
    dest: 'public/images/case-studies/case-study-levantis.png'
  },
  
  // Blog/FAQ
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/17b4a5b7d_seedream-40_high-resolution_professional_photography_image_with_precise_details_and_refined_-01-.jpg',
    dest: 'public/images/blog/blog-faq-default.jpg'
  },
  
  // Sitemap
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/70c619556_handling-sensear-sitemap.jpg',
    dest: 'public/images/sitemap-visual.jpg'
  },
  
  // Alternative Service Components
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d2c616905_fd3f4ff86f1dfed345baa64ee2908eda.jpg',
    dest: 'public/images/services/service-sonic-strategy-alt.jpg'
  },
  {
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bbe747c8e_57b86e08a_b6e0a3f63_tech_hifi_1979_07-pxbee-cropped2.jpg',
    dest: 'public/images/services/service-audio-upgrades-alt.jpg'
  }
];

// Download function
function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    // Ensure directory exists
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Skip if file already exists
    if (fs.existsSync(dest)) {
      console.log(`[SKIP] ${dest} already exists`);
      resolve({ skipped: true });
      return;
    }
    
    const file = fs.createWriteStream(dest);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        downloadImage(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`[OK] Downloaded: ${dest}`);
        resolve({ success: true });
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {}); // Delete partial file
      reject(err);
    });
  });
}

// Main execution
async function main() {
  console.log('Starting image download...\n');
  console.log(`Total images to process: ${imageMappings.length}\n`);
  
  // Remove duplicates based on destination path
  const uniqueMappings = [];
  const seenDests = new Set();
  
  for (const mapping of imageMappings) {
    if (!seenDests.has(mapping.dest)) {
      seenDests.add(mapping.dest);
      uniqueMappings.push(mapping);
    }
  }
  
  console.log(`Unique images to download: ${uniqueMappings.length}\n`);
  
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;
  
  for (const mapping of uniqueMappings) {
    try {
      const result = await downloadImage(mapping.url, mapping.dest);
      if (result.skipped) {
        skipped++;
      } else {
        downloaded++;
      }
    } catch (err) {
      console.error(`[ERROR] Failed to download ${mapping.dest}: ${err.message}`);
      failed++;
    }
  }
  
  console.log('\n--- Download Summary ---');
  console.log(`Downloaded: ${downloaded}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Failed: ${failed}`);
  console.log(`Total unique: ${uniqueMappings.length}`);
}

main().catch(console.error);
