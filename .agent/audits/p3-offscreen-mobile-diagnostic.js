const fs = require('fs');
const { chromium } = require('playwright');

function normalize(src) {
  if (!src) return src;
  try {
    const u = new URL(src, 'http://127.0.0.1:3000');
    if (u.pathname === '/_next/image') {
      const inner = u.searchParams.get('url');
      if (inner) return decodeURIComponent(inner);
    }
    return u.pathname + (u.search || '');
  } catch {
    return src;
  }
}

(async () => {
  const pages = fs.readFileSync('.agent/audits/p3-offscreen-final2-offscreen-pages.txt', 'utf8')
    .split(/\r?\n/)
    .map(s => s.trim())
    .filter(Boolean);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const map = new Map();

  for (const url of pages) {
    await page.goto(url, { waitUntil: 'networkidle' });
    const rows = await page.evaluate(() => {
      const vh = window.innerHeight;
      return Array.from(document.querySelectorAll('img')).map((img) => {
        const r = img.getBoundingClientRect();
        return {
          src: img.getAttribute('src') || '',
          alt: img.getAttribute('alt') || '',
          loading: img.getAttribute('loading') || '(none)',
          top: Math.round(r.top),
          belowFold: r.top >= vh,
        };
      }).filter(x => x.belowFold && x.loading !== 'lazy');
    });

    for (const row of rows) {
      const norm = normalize(row.src);
      const key = `${norm}|||${row.alt}|||${row.loading}`;
      if (!map.has(key)) map.set(key, { src: row.src, normalized: norm, alt: row.alt, loading: row.loading, pages: new Set() });
      map.get(key).pages.add(url);
    }
  }

  const out = Array.from(map.values()).map((v) => ({
    src: v.src,
    normalized: v.normalized,
    alt: v.alt,
    loading: v.loading,
    pageCount: v.pages.size,
    pages: Array.from(v.pages),
  })).sort((a, b) => b.pageCount - a.pageCount);

  fs.writeFileSync('.agent/audits/p3-offscreen-mobile-diagnostic.json', JSON.stringify(out, null, 2));
  await browser.close();
})();
