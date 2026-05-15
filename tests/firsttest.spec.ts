import{ test , expect} from '@playwright/test' // importer les test et les exception de la bib de playwright 

test("ouvrir la page de sauce demo", {tag: '@regression'}, async({page}) =>{
     await page.goto("https://www.saucedemo.com/");//naviger vers un url
     await expect(page).toHaveTitle(/Swag Labs/);// assertion pour verifier qu'on est dans la bonne page 
     await page.screenshot({path:"screenshot.png", fullPage:true});// prendre une capture d'ecran de la page
    

});