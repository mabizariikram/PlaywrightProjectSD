import {test, expect}from '@playwright/test';
import {loginpom} from '../pages/loginpom.page';
import fs from 'fs';//file system pour lire le fichier csv
import {parse} from 'csv-parse/sync';// importer un parseur pour convertir le csv en object javascript
import path from 'path'

let lp:loginpom; //instance de pom de login

const users= parse(fs.readFileSync(path.join(__dirname,'data/jdd.csv')),{
    columns:true,// ligne qui presente nom des colonne
    skip_empty_lines:true//ignore les ligne vides

});

test("login_jdd",async ({page})=>{
    for (const user of users!){
        lp= new loginpom(page);
        await page.goto("https://www.saucedemo.com/");
        await lp.saisieUsername(user!.username);
        await lp.saisiePassword(user!.password);
        await lp.clickLogin();

        if (user!.result=="success"){
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
        }
        else{
            await expect(page.locator("[data-test='error']")).toBeVisible();
        }
        


    }
});