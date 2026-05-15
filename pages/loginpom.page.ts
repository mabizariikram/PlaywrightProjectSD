import {Page} from '@playwright/test'
export class loginpom{
    readonly page:Page;
    constructor (  p:Page){
       this.page=p;
    }
    // loctors:
    elements={
        username :()=>this.page.locator("#user-name"),
        password : ()=>this.page.locator("#password"),
        login : ()=>this.page.locator("#login-button"),
        errorMessage: ()=>this.page.locator('[data-test="error"]')
    }

    // les méthodes :

    async saisieUsername(u:string){
        await this.elements.username().fill(u)
    }

    async saisiePassword(p:string){
        await this.elements.password().fill(p);

    }
    async clickLogin(){
        await this.elements.login().click();
    }

    // async getErrorMessageText(){

    //     await this.elements.errorMessage().textContent()
    // }

//     getErrorMessage() {
//     return this.page.getByTestId("error");
// }
// async getErrorMessageText(){
//     return await this.elements.errorMessage().textContent();
// }


 getErrorMessage() {
    return this.elements.errorMessage()
}

 async loginToApp(u:string,p:string){
        await this.saisieUsername(u);
        await this.saisiePassword(p);
        await this.clickLogin();
    }










}