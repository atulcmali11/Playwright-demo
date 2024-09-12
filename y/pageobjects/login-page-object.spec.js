const { expect } = require("@playwright/test");

export class LoginPage{
    #page;
    constructor(page){
        this.#page=page;
        this.loginPageHeader="//h2[text()='Login Page']";
        this.enterUserName="#username";
        this.enterPassword="id=password";
        this.loginButton="//button[normalize-space()='Login']";
        this.logInsuccess="//h2[text()=' Secure Area']";
        this.logoutButton="//i[@class='icon-2x icon-signout']";
    }
    async isDisplayedLogiPageHeader(){
        await expect(this.#page.locator(this.loginPageHeader)).toBeVisible();
    }
    async loginToApplication(username,password){
        await this.UserName1(username);
        await this.Password1(password);
        await this.loginButton1();

    }
    async UserName1(username){
        await this.#page.locator(this.enterUserName).fill(username);
    }
    async Password1(password){
        await this.#page.locator(this.enterPassword).fill(password);
    }
    async loginButton1(){
        await this.#page.locator(this.loginButton).click();
    }
    async isDisplayedLogiPageHeader1(){
        await expect(this.#page.locator(this.logInsuccess)).toBeVisible();
    }
    async isLoggedOut(){
        await this.#page.locator(this.logoutButton).click();
    }
}