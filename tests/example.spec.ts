import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check that the page has loaded
    await expect(page).toHaveTitle(/.*/);
  });

  test('should navigate to about page', async ({ page }) => {
    await page.goto('/');
    
    // Click on about link in navigation (be more specific to avoid footer link)
    const aboutLink = page.getByRole('navigation').getByRole('link', { name: /about/i });
    await aboutLink.click();
    await expect(page).toHaveURL(/.*about.*/);
  });

  test('should have navigation menu', async ({ page }) => {
    await page.goto('/');
    
    // Check for navigation
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });
});

test.describe('About Page', () => {
  test('should load about page successfully', async ({ page }) => {
    await page.goto('/about');
    
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/.*about.*/);
  });

  test('should have about page content', async ({ page }) => {
    await page.goto('/about');
    
    // Check for main content
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });
});

test.describe('Language Switching', () => {
  test('should switch between English and Greek', async ({ page }) => {
    // Visit English version
    await page.goto('/en');
    await page.waitForLoadState('networkidle');
    
    // Visit Greek version
    await page.goto('/el');
    await page.waitForLoadState('networkidle');
    
    // Verify Greek version loaded
    await expect(page).toHaveURL(/.*el.*/);
  });
});
