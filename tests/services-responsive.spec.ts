import { test } from '@playwright/test';

test.describe('Services page responsive layout test', () => {
  const viewports = [
    { name: 'mobile-small', width: 320, height: 568 },
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1280, height: 720 },
    { name: 'large-desktop', width: 1920, height: 1080 },
  ];

  for (const viewport of viewports) {
    test(`services page at ${viewport.name} (${viewport.width}x${viewport.height})`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('http://localhost:3001/en/services');
      await page.waitForLoadState('networkidle');
      
      // Take full page screenshot
      await page.screenshot({ 
        path: `test-results/services-${viewport.name}.png`, 
        fullPage: true 
      });
    });
  }
});
