const fs = require('fs');

const files = [
  'app/[lang]/about/page.tsx',
  'app/[lang]/blog/page.tsx',
  'app/[lang]/case-studies/page.tsx',
  'app/[lang]/contact/page.tsx',
  'app/[lang]/faq/page.tsx',
  'app/[lang]/industries/page.tsx',
  'app/[lang]/sitemap-page/page.tsx',
  'app/[lang]/services/page.tsx',
  'app/[lang]/services/signature-playlists/page.tsx',
  'app/[lang]/services/event-soundtracks/page.tsx',
  'app/[lang]/services/sonic-identity/page.tsx',
  'app/[lang]/services/audio-upgrades/page.tsx',
  'app/[lang]/industries/music-for-hotels-and-resorts/page.tsx',
  'app/[lang]/industries/music-for-restaurants-and-bars/page.tsx',
  'app/[lang]/industries/music-for-events-and-experiences/page.tsx',
  'app/[lang]/industries/music-for-retail-stores/page.tsx',
  'app/[lang]/industries/music-for-wellness-and-gyms/page.tsx',
  'app/[lang]/industries/music-for-art-museums-and-fashion/page.tsx',
];

let changed = 0;

for (const file of files) {
  const oldText = fs.readFileSync(file, 'utf8');
  let text = oldText;

  // One-line hero image tags
  text = text.replace(/className="object-cover"\s*\/>/g, 'className="object-cover" priority />');

  // Multi-line hero image tags
  text = text.replace(/className="object-cover"\r?\n(\s*)\/>/g, 'className="object-cover"\n$1priority\n$1/>');

  if (text !== oldText) {
    fs.writeFileSync(file, text, 'utf8');
    changed += 1;
    console.log('updated', file);
  }
}

console.log('changed_files', changed);
