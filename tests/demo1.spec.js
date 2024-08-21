const {test } = require("@playwright/test");

test("My first Test cases:",async function({page}) {

    await page.goto("https://www.google.com");
    const title= await page.title();
    console.log(title);
    await page.locator("[name='q']").fill('Javascript');
    //await page.pause();

    
    
    
})