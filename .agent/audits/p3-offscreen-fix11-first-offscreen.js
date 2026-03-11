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
  const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });

  const out = [];

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
      }).filter(x => x.belowFold && x.loading !== 'lazy').sort((a, b) => a.top - b.top);
    });

    out.push({
      url,
      firstOffscreenNonLazy: rows[0]
        ? { ...rows[0], normalized: normalize(rows[0].src) }
        : null,
      count: rows.length,
    });
  }

  fs.writeFileSync('.agent/audits/p3-offscreen-fix11-first-offscreen.json', JSON.stringify(out, null, 2));
  await browser.close();
})();
