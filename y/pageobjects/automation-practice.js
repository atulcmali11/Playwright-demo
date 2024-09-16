export class automationPractice{
    #page;
    constructor(page){
        this.#page=page;
    }
    textboxLocator={
        nameLocator:"#name",
        emailLocator:"#email",
        phoneLocator:"#phone",
        addressLocator:"#textarea"
    }
    radiobuttoncheckboxLocator={
        genderLocator:"#male",
        daysLocator:"#thursday"
    }
     async dropdownLocator(country){
       const dropdown=this.#page.locator("#country");
       await dropdown.selectOption(country);
    }
    async Launch(){
        await this.#page.goto("https://testautomationpractice.blogspot.com/");
    }

    async enterNameInTextbox(name,email,phone,address){
        await this.#page.locator(this.textboxLocator.nameLocator).fill(name);
        await this.#page.locator(this.textboxLocator.phoneLocator).fill(phone);
        await this.#page.locator(this.textboxLocator.emailLocator).fill(email);
        await this.#page.locator(this.textboxLocator.addressLocator).fill(address);

    }

    async radiocheck(){
        await this.#page.locator(this.radiobuttoncheckboxLocator.genderLocator).click();
        await this.#page.locator(this.radiobuttoncheckboxLocator.daysLocator).click();
    }
    

    
}