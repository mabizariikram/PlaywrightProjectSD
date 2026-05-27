import {test , expect} from '@playwright/test'

// hooks: executer avant chaque test
test.beforeEach( async ({page})=>{
    await page.goto("https://www.saucedemo.com/");

})



test ("login valid",{tag: '@valid'}, async ({page})=>{
    //await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user"); 
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    // assertion:
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.screenshot({path:"login_valid.png", fullPage:true});// prendre une capture d'ecran de la page apres le login valide

});

 test ("login invalid",{tag : '@invalid'}, async ({page})=>{
    //await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("wrong_user");
    await page.locator("#password").fill("wrong_password");
    await page.locator("#login-button").click();
    // assertion:
    await expect(page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service");
    //await expect(page.locator("h3[data-test='error']")).toBeVisible();
    await page.screenshot({path:"login_invalid.png", fullPage:true});// prendre une capture d'ecran de la page apres le login invalide 

});    