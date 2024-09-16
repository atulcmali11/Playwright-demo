export class LoginPage{
    #page;
    loginPageLocator={
        loginPageHeader:"//h2[text()='Login Page']",
        textBoxUserName:"#username",
        textBoxPassword:"id=password",
        loginButton:"//button[normalize-space()='Login']"
    }
    constructor(page){
        this.#page=page;

    }

    async Launch(){
        await this.#page.goto("https://the-internet.herokuapp.com/login");
    }
    async enterUserName(username){
        await this.#page.locator(this.loginPageLocator.textBoxUserName).fill(username);

    }
    async enterPassword(password){
        await this.#page.locator(this.loginPageLocator.textBoxPassword).fill(password);
    }

    async logInButn(){
        await this.#page.locator(this.loginPageLocator.loginButton).click();
    }
}