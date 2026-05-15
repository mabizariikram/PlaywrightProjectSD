import { test as base, expect, Page } from '@playwright/test';
import { loginpom } from '../pages/loginpom.page';

type Fixtures = {
   loggedPage: Page;
    loginpomValid: loginpom;// instance la page pom valid 
    loginpomInvalid: loginpom; // instance de page pom invalid
};

export const test = base.extend<Fixtures>({
    loggedPage: async ({ page }, use) => {
        await page.goto('https://www.saucedemo.com/');   
        await use(page);
    },
    loginpomValid: async ({ loggedPage }, use) => {
        const lp = new loginpom(loggedPage);
        await lp.loginToApp('standard_user', 'secret_sauce');
        await use(lp);
    },
    loginpomInvalid: async ({ loggedPage }, use) => {
        const lp = new loginpom(loggedPage);
        await lp.loginToApp('wrong_user', 'wrong_password');
        await use(lp);
    } 

});

export { expect };   
    