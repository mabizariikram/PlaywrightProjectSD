import { test, expect } from '@playwright/test';
import { loginpom} from '../pages/loginpom.page';
import { ProductPom } from '../pages/produitpom.page';


let lp: loginpom;
let pp: ProductPom;

test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com");

    lp = new loginpom(page);
    pp = new ProductPom(page);

    await lp.loginToApp("standard_user", "secret_sauce");
});

test("add produit au panier", { tag: '@smoke' }, async ({ page }) => {

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    await pp.addProduct();

    // vérifier bouton remove
    await expect(pp.getRemoveButton()).toBeVisible();

    // vérifier badge panier
    await expect(pp.getCartBadge()).toHaveText("1");

    await pp.goToCart();

    // vérifier url panier
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
});