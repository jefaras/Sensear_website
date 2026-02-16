const fs = require('fs');
const path = require('path');

// Define replacements for background images
const backgroundReplacements = [
  {
    from: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg",
    to: "/images/backgrounds/background-texture-warm-silver.jpg"
  }
];

// Define replacements for other images
const imageReplacements = [
  // Contact page
  {
    from: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6cd5af555_picturetopeopleorg-af1f54707bfc9381612737a8cbdc641c34f5f390c625633f3b.png",
    to: "/images/brand/contact-phone.png"
  },
  {
    from: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/21a008aa5_picturetopeopleorg-3dd2d76b45071cf3a83492fa044da51b0fe8ba66777df92c31.png",
    to: "/images/brand/contact-email.png"
  },
  // FAQ page
  {
    from: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/17b4a5b7d_seedream-40_high-resolution_professional_photography_image_with_precise_details_and_refined_-01-.jpg",
    to: "/images/blog/blog-faq-default.jpg"
  },
  // About page unique approach
  {
    from: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/df442a3bc_f12d13b47_IMG_20250722_165530.jpg",
    to: "/images/about/about-unique-approach.jpg"
  },
  // Sitemap page
  {
    from: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/70c619556_handling-sensear-sitemap.jpg",
    to: "/images/sitemap-visual.jpg"
  },
  // Sonic identity page
  {
    from: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9e78deacd_gemini-25-flash-image_Upscale_this_image_and_fix_anything_that_looks_distorted_or_blurred-0.jpg",
    to: "/images/services/sonic-identity/sonic-identity-hero.jpg"
  },
  {
    from: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/deb3db30e_image00006b-CROPPED1.jpg",
    to: "/images/services/sonic-identity/sonic-identity-workshop.jpg"
  },
  {
    from: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/2f1aa2923_00a27c3bd633abfcfe751c91ef9d3f08sonic.jpg",
    to: "/images/services/sonic-identity/sonic-identity-development.jpg"
  },
  {
    from: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7c6f67623_d6be48cfcce95f702a6c4b34c0e7cc47CROPPED-pxbee-minitools-enhance-2025112017940.jpg",
    to: "/images/services/sonic-identity/sonic-identity-implementation.jpg"
  },
  // Audio upgrades page
  {
    from: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/22a32a26f_seedream-40_professional_photo_of_a_sleek_speaker_in_a_modern_setting_with_a_collection_of_r-1crop1-1.jpg",
    to: "/images/services/audio-upgrades/audio-upgrades-hero.jpg"
  },
  {
    from: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/8aea621ce_e65177c598c0c9820abde209555dc0d0cropped2-pxbee-minitools-enhance-20251120175811.jpg",
    to: "/images/services/audio-upgrades/audio-upgrades-assessment.jpg"
  },
  {
    from: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fb6a2cfcc_0acfe1722c9ef9946388029ddb720290CROPPED.jpg",
    to: "/images/services/audio-upgrades/audio-upgrades-venue.jpg"
  },
  {
    from: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b00d7c94c_aiease_1763654314701.jpg",
    to: "/images/services/audio-upgrades/audio-upgrades-clarity.jpg"
  },
  // Event soundtracks page
  {
    from: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f5124bf21_pxbee_2025-11-20_15-29-00-cropped1-1.jpg",
    to: "/images/services/event-soundtracks/event-soundtracks-hero.jpg"
  },
  {
    from: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e56a199c4_ac423ae7b75beed60a76ecc7a719d544croppedUPSCALED.jpg",
    to: "/images/services/event-soundtracks/event-soundtracks-planning.jpg"
  },
  {
    from: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9f56a9904_2f602f264fc83649ea78ee45caeec916upscaled.jpg",
    to: "/images/services/event-soundtracks/event-soundtracks-venue.jpg"
  },
  {
    from: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f5882e104_IMG_20250917_225633.jpg",
    to: "/images/services/event-soundtracks/event-soundtracks-process.jpg"
  }
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Apply background replacements
  for (const replacement of backgroundReplacements) {
    if (content.includes(replacement.from)) {
      content = content.split(replacement.from).join(replacement.to);
      modified = true;
    }
  }
  
  // Apply image replacements
  for (const replacement of imageReplacements) {
    if (content.includes(replacement.from)) {
      content = content.split(replacement.from).join(replacement.to);
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${filePath}`);
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDirectory(filePath);
    } else if (file.endsWith('.tsx')) {
      processFile(filePath);
    }
  }
}

console.log('Starting batch image path update...');
walkDirectory('./app');
console.log('Done!');
