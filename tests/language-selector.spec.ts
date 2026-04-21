import { test, expect } from '@playwright/test';

test.describe('Language Selector Navigation', () => {
  test('should allow users to select languages regardless of device size', async ({ page }) => {
    // Navigate to the Help Center homepage
    await page.goto('/en-us');

    // Make sure the page has fully loaded
    await expect(page.locator('body')).toBeVisible();

    const viewportSize = page.viewportSize();
    // In our Banbury responsive logic, >= 1024 is desktop, < 1024 is tablet/mobile
    const isMobileOrTablet = viewportSize && viewportSize.width < 1024;

    if (isMobileOrTablet) {
      // Test the Hamburger Menu language selector
      const mobileMenuButton = page.locator('.menu-button-mobile');
      await expect(mobileMenuButton).toBeVisible();
      
      // Open the hamburger menu
      await mobileMenuButton.click();
      
      const mobileNav = page.locator('#user-nav-mobile');
      await expect(mobileNav).toHaveAttribute('aria-expanded', 'true');

      // Locate the language selector inside the mobile menu
      const languageDropdownToggle = mobileNav.locator('.language-selector .dropdown-toggle');
      await expect(languageDropdownToggle).toBeVisible();
      
      // Click to open the language dropdown
      await languageDropdownToggle.click();
      
      const dropdownMenu = mobileNav.locator('.language-selector .dropdown-menu');
      await expect(dropdownMenu).toBeVisible();

      // Find Español and select it
      const espanolLink = dropdownMenu.locator('a[role="menuitem"]:has-text("Español")');
      await expect(espanolLink).toBeVisible();
      
      // Click and ensure navigation resolves successfully
      await Promise.all([
        page.waitForLoadState('domcontentloaded'),
        espanolLink.click()
      ]);

      // Assert the URL natively redirected to the Spanish environment
      expect(page.url()).toContain('/hc/es');

    } else {
      // Test the Desktop Footer language selector
      const footerSelector = page.locator('.footer-language-selector');
      await expect(footerSelector).toBeVisible();
      
      // Ensure it is scrolled into view (if at bottom of viewport)
      await footerSelector.scrollIntoViewIfNeeded();

      const languageDropdownToggle = footerSelector.locator('.dropdown-toggle');
      await expect(languageDropdownToggle).toBeVisible();

      // Click to open the dropdown
      await languageDropdownToggle.click();

      const dropdownMenu = footerSelector.locator('.dropdown-menu');
      await expect(dropdownMenu).toBeVisible();

      // Find Español and select it
      const espanolLink = dropdownMenu.locator('a[role="menuitem"]:has-text("Español")');
      await expect(espanolLink).toBeVisible();

      // Click and ensure navigation resolves successfully
      await Promise.all([
        page.waitForLoadState('domcontentloaded'),
        espanolLink.click()
      ]);

      // Assert the URL natively redirected to the Spanish environment
      expect(page.url()).toContain('/hc/es');
    }
  });
});
