import { test, expect } from '../fixtures/test-base';

test('login valid', async ({ page }) => {
    await page.fill("#user-name", "standard_user");
    await page.fill("#password", "secret_sauce");
    await page.click("#login-button");

    await expect(page).toHaveURL(/inventory/);
});