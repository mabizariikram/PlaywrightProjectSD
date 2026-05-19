import {test , expect} from '@playwright/test'

test ("add produit au panier", {tag: '@smoke'}  ,async ({page})=>{
    await page.goto("https://www.saucedemo.com");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.locator("#add-to-cart-sauce-labs-backpack").click();
    // assertion que remove s'affiche :
    await expect(page.locator("#remove-sauce-labs-backpack")).toBeVisible();
    //verifier dans panier affiche 1:
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText("1");
    await page.locator(".shopping_cart_link").click();
    // assetion url page panier:
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");

});