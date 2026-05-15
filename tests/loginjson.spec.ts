import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

// __dirname = dossier du test
const jsonPath = path.resolve(__dirname, '../resources/loginData.json');
const loginData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

for (const data of loginData) {
  test(`login ${data.username}`, async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    await page.fill("#user-name", data.username);
    await page.fill("#password", data.password);
    await page.click("#login-button");

    if (data.result === "success") {
      await expect(page).toHaveURL(/inventory/);
    } else {
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    }
  });
}