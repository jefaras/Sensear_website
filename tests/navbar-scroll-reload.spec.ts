import { test, expect } from '@playwright/test';

test.describe('Navbar scroll state on reload', () => {
  test('should maintain black background when page is reloaded while scrolled down', async ({ page }) => {
    // Navigate to a page with enough content to scroll
    await page.goto('/en/industries/music-for-hotels-and-resorts');

    // Wait for page to fully load
    await page.waitForLoadState('networkidle');

    // Scroll down past the threshold (20px)
    await page.evaluate(() => window.scrollTo(0, 500));

    // Wait a moment for the scroll event to be processed
    await page.waitForTimeout(100);

    // Get the navbar element
    const navbar = page.locator('nav').first();

    // Verify navbar has black background after scrolling
    const initialBgClass = await navbar.getAttribute('class');
    console.log('Initial navbar classes after scroll:', initialBgClass);
    expect(initialBgClass).toContain('bg-black');

    // Get console logs before reload
    const consoleMessages: string[] = [];
    page.on('console', msg => {
      consoleMessages.push(msg.text());
      console.log('Console:', msg.text());
    });

    // Reload the page
    await page.reload({ waitUntil: 'networkidle' });

    // Wait for the component to mount and process initial scroll
    await page.waitForTimeout(200);

    // Get the navbar element again after reload
    const navbarAfterReload = page.locator('nav').first();

    // Verify navbar still has black background after reload
    const reloadedBgClass = await navbarAfterReload.getAttribute('class');
    console.log('Navbar classes after reload:', reloadedBgClass);
    console.log('Console messages:', consoleMessages);

    // Check if the navbar has the black background class
    expect(reloadedBgClass).toContain('bg-black');

    // Verify the scroll position was restored by browser
    const scrollY = await page.evaluate(() => window.scrollY);
    console.log('Scroll position after reload:', scrollY);
    expect(scrollY).toBeGreaterThan(20);
  });

  test('should be transparent at top of page on initial load', async ({ page }) => {
    // Navigate to a page
    await page.goto('/en/industries/music-for-hotels-and-resorts');

    // Wait for page to fully load
    await page.waitForLoadState('networkidle');

    // Get the navbar element
    const navbar = page.locator('nav').first();

    // Verify navbar is transparent at the top
    const bgClass = await navbar.getAttribute('class');
    console.log('Navbar classes at top of page:', bgClass);
    expect(bgClass).toContain('bg-transparent');
  });
});
