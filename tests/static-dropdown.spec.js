const {test}=require("@playwright/test")

test('static dropdown',async function({page}){
    await page.goto("https://testautomationpractice.blogspot.com/");
    const country=page.locator('#country');
    await page.pause();
    await country.selectOption("India")
    await country.selectOption({index:5});
    await country.selectOption({value:'brazil'});
    
})
