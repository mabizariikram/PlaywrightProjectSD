import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
});

test("login avec getByRole valid ", async ({page}) => {
    // await page.goto("https://www.saucedemo.com/");
    await page.getByRole("textbox",{name:"Username"}).fill("standard_user");
    await page.getByRole("textbox",{name:"Password"}).fill("secret_sauce");
    await page.getByRole("button",{name:"Login"}).click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

});

test("login avec getByRole invalid ", async ({page}) => {
    // await page.goto("https://www.saucedemo.com/");
    await page.getByRole("textbox",{name:"Username"}).fill("wrong_user");       
    await page.getByRole("textbox",{name:"Password"}).fill("wrong_password");
    await page.getByRole("button",{name:"Login"}).click();
    await expect(page.getByRole('heading', {
        name: 'Epic sadface: Username and password do not match any user in this service'
    })).toBeVisible();

    //await expect(page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service");    
});