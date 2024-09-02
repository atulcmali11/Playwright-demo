
const {test,expect}=require('@playwright/test');

test("Slider demo",async function({page}){

    await page.goto("https://the-internet.herokuapp.com/upload");
})
