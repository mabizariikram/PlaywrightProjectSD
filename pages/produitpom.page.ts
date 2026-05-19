import { Page } from "@playwright/test";

export class ProductPom {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    elements = {
        addToCart: () => this.page.locator("#add-to-cart-sauce-labs-backpack"),
        removeBtn: () => this.page.locator("#remove-sauce-labs-backpack"),
        cartBadge: () => this.page.locator('[data-test="shopping-cart-badge"]'),
        cartLink: () => this.page.locator(".shopping_cart_link")
    }

    async addProduct() {
        await this.elements.addToCart().click();
    }

    async goToCart() {
        await this.elements.cartLink().click();
    }

    //  important (pas async)
    getRemoveButton() {
        return this.elements.removeBtn();
    }

    getCartBadge() {
        return this.elements.cartBadge();
    }
}