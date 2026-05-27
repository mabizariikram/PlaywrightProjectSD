import {Page} from '@playwright/test'
export class cartpom{
    readonly page:Page;
    constructor (  p:Page){
       this.page=p;
    }
    // loctors:
    elements={
        // locator de produit apparent dans le panier
        produitInCart: () => this.page.locator("[data-test='inventory-item-name']"),
        checkoutButton: () => this.page.locator("[data-test='checkout']"),
        continueShoppingButton: () => this.page.locator("#continue-shopping"),
        removeButton: () => this.page.locator("[data-test='remove-sauce-labs-backpack']")
    
     
    }

    // les méthodes :
     getProduitInCartText(){
        return this.elements.produitInCart()
    }   
    async clickCheckout(){
        await this.elements.checkoutButton().click();
    }   
    // continoue soit visible 
     clickContinueShopping(){
        return this.elements.continueShoppingButton();
    }
    clickRemove(){
        return this.elements.removeButton();
    }   

}