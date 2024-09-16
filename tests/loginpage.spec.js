import { LoginPage } from "../y/pageobjects/login-page-object";

const {test}=require("@playwright/test")

test("Login Page test case for valid credentials",async function({page}){
    await page.goto("https://the-internet.herokuapp.com/login");
    const username="tomsmith";
    const password="SuperSecretPassword!";
    const loginpage= new LoginPage(page);
    await loginpage.isDisplayedLogiPageHeader();
    await loginpage.loginToApplication(username,password);
    await loginpage.isDisplayedLogiPageHeader1();
    await loginpage.IsLoginsuccess();
    await loginpage.isLoggedOut();
    await page.waitForTimeout(2000);

    
})