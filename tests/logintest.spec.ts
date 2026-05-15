import{ test , expect} from '@playwright/test' // importer les test et les exception de la bib de playwright 

test("ouvrir la page de sauce demo", {tag: '@regression'}, async({page}) =>{
     await page.goto("https://www.saucedemo.com/");//naviger vers un url
     await expect(page).toHaveTitle(/Swag Labs/);// assertion pour verifier qu'on est dans la bonne page 
     await page.screenshot({path:"screenshot.png", fullPage:true});// prendre une capture d'ecran de la page
     await page.locator("#user-name").fill("standard_user");
     await page.locator("#password").fill("secret_sauce");
     await page.locator("#login-button").click();
     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
     await page.screenshot({path:"screenshot2.png", fullPage:true});// prendre une capture d'ecran de la page apres le login
     
    

});