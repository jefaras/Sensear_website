const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
  const paths = [
    '/en','/el','/en/services','/en/industries','/en/case-studies','/en/blog','/en/contact','/en/about',
    '/el/services','/el/industries','/el/case-studies','/el/blog','/el/contact','/el/about'
  ];

  const byImage = new Map();

  for (const path of paths) {
    await page.goto(`http://127.0.0.1:3000${path}`, { waitUntil: 'networkidle' });
    const findings = await page.evaluate(() => {
      const vh = window.innerHeight;
      return Array.from(document.querySelectorAll('img')).map((img) => {
        const r = img.getBoundingClientRect();
        const src = img.getAttribute('src') || '';
        const alt = img.getAttribute('alt') || '';
        const loading = img.getAttribute('loading') || '(none)';
        return { src, alt, loading, top: Math.round(r.top), bottom: Math.round(r.bottom), belowFold: r.top >= vh };
      }).filter(i => i.belowFold && i.loading !== 'lazy');
    });

    for (const f of findings) {
      const key = `${f.src}|||${f.alt}|||${f.loading}`;
      if (!byImage.has(key)) byImage.set(key, { src: f.src, alt: f.alt, loading: f.loading, pages: [] });
      byImage.get(key).pages.push(path);
    }
  }

  const result = Array.from(byImage.values())
    .map(x => ({ ...x, count: x.pages.length }))
    .sort((a,b) => b.count - a.count);

  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})();
