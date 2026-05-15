import { test as base, expect, Page } from '@playwright/test';

type Fixtures = { // crrer une fixture loggedpage de type page psq typescript est strict et que page est de type page
    loggedPage: Page; // on dit que  loggedpage est une page playwright 
};

export const test = base.extend<Fixtures>({ 
// crer une nouvelle fixture en utilisant la base de test et en lui ajoutant la fixture loggedpage
    loggedPage: async ({ page }, use) => {
        await page.goto("https://www.saucedemo.com/");

        await page.fill("#user-name", "standard_user");
        await page.fill("#password", "secret_sauce");
        await page.click("#login-button");

        await use(page);
    }
});

export { expect };