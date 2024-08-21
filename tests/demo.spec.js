const {test}=require("@playwright/test");

test("first test",async function({page}){
    await page.goto("https://www.google.com/");
})