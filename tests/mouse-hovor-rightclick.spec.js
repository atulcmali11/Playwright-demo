const {test,expect}=require('@playwright/test')

test("Mouse Hovor action-Right click",async function({page}){
    await page.goto("https://the-internet.herokuapp.com/context_menu");
    await page.pause();
    await page.locator("#hot-spot").click({button:'right'});
    await page.pause();
})