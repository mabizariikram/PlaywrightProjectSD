import { test, expect } from '@playwright/test';
import { loginpom} from '../pages/loginpom.page';
import { ProductPom } from '../pages/produitpom.page';
import { cartpom } from '../pages/cartpom.page';


let lp: loginpom;
let pp: ProductPom;
let cp: cartpom;

test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com");

    lp = new loginpom(page);
    pp = new ProductPom(page);
    cp = new cartpom(page);

    await lp.loginToApp("standard_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await pp.addProductAndGoToCart();

    // await pp.addProduct();
    // await pp.goToCart();
});

test("add produit au panier", { tag: '@smoke' }, async ({ page }) => {

   

    // vérifier url panier
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
    // vérifier produit dans le panier
    await expect(cp.getProduitInCartText()).toHaveText("Sauce Labs Backpack");
    // verifier btn continue shopping
    await expect(cp.clickContinueShopping()).toBeVisible();
    // verifier btn remove
    await expect(cp.clickRemove()).toBeVisible();

    // click checkout
    await cp.clickCheckout();
    // redirect vers checkout step one
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html");

});