import { test, expect } from '@playwright/test';
function escapeForRegex(s: string): string {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

const searchMethods = ['SubmitButton', 'EnterKey', 'AutocompleteClick'] as const;

/**
 * Validates the core search functionality to ensure search interactions do not silently fail.
 * Parametrized to automatically cover the three discrete ways users interact with the bar.
 * 
 * @see {@link https://justserve.zendesk.com/agent/tickets/13566}
 */
for (const method of searchMethods) {
  test(`HomePage search validation via ${method}`, async ({ page }) => {
    const testHost = process.env.ZENDESK_TEST_HOST;
    // if (!testHost || testHost === 'justserve.zendesk.com') {
    //   throw new Error('STOP!: You must configure ZENDESK_TEST_HOST in your .env file to a valid Sandbox domain. Testing against justserve.zendesk.com is not allowed.');
    // }

    const startUrl = `https://${testHost}/hc/admin/local_preview/start`;
    await page.goto(startUrl);

    const searchInput = page.locator('input#query');
    await searchInput.waitFor({ state: 'visible', timeout: 50000 });

    await searchInput.pressSequentially('cities', { delay: 150 });

    const instantSearchDropdown = page.locator('zd-autocomplete');
    await expect(instantSearchDropdown).toBeVisible({ timeout: 10000 });

    if (method === 'EnterKey') {
      await searchInput.press('Enter');
    } else if (method === 'SubmitButton') {
      await page.locator('button#searchSubmitBtn').click();
    } else if (method === 'AutocompleteClick') {
      await instantSearchDropdown.locator('a, zd-autocomplete-multibrand').first().click();
    }

    await expect(page).not.toHaveURL(startUrl, { timeout: 15000 });
    const domainRegex = new RegExp(`.*${escapeForRegex(testHost ?? '')}.*`);
    await expect(page).toHaveURL(domainRegex, { timeout: 15000 });
  });
}
