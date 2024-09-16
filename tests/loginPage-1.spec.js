const {test}=require("@playwright/test")
import { LoginPage } from "../y/pageobjects/login-1.js";


test("Login page test using objects", async function ({page}) {
    const loginpage=new LoginPage(page);
    await loginpage.Launch();
    await loginpage.enterUserName("tomsmith");
    await loginpage.enterPassword("SuperSecretPassword!");
    await loginpage.logInButn();
    await page.waitForTimeout(2000);

    
})