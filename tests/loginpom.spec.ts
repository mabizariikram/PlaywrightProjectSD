import {test, expect} from '@playwright/test'
import {loginpom} from '../pages/loginpom.page'
let  lp:loginpom; // lp variable qui va contenir l'instance du mon page object

test.beforeEach(async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    lp = new loginpom(page);// cree une instance du pom et en lui passant le page de test 
});

test("login valid", async ({page})=>{
    await lp.saisieUsername("standard_user");
    await lp.saisiePassword("secret_sauce");
    await lp.clickLogin();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

})

test("login invalid", async () => {
    await lp.saisieUsername("wrong_user");
    await lp.saisiePassword("wrong_password");
    await lp.clickLogin();
    // assertion:
    //await expect(lp.getErrorMessage()).toHaveText("Epic sadface: Username and password do not match any user in this service");
    // await expect(lp.getErrorMessage()).toContainText("Epic sadface: Username and password do not match any user in this service");
 const errorMessage = await lp.getErrorMessage().textContent();
     expect(errorMessage).toBe("Epic sadface: Username and password do not match any user in this service");
 });