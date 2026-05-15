import { test as base, expect } from '@playwright/test'; 
// importer test comme base pour pouvoir l'étendre ensuite 
// et importer expect pour les assertions

export const test = base.extend({
    page: async ({ page }, use) => {
        await page.goto("https://www.saucedemo.com/");
        await use(page);
    }
});

export { expect };

