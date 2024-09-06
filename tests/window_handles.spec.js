
const{test,chromium}=require("@playwright/test")


test("tab test demo", async function({}){
    const browser=await chromium.launch({headless:false,channel:'chrome'});
    const context=await browser.newContext();
    const page1=await context.newPage();
    const page2=await context.newPage();
    await page1.waitForTimeout(3000);
    await page2.waitForTimeout(3000);
    await page1.goto("https://the-internet.herokuapp.com/windows");
    await page2.goto("https://www.google.com");
    let title1= await page1.title();
    console.log(title1);
    let title2= await page2.title();
    console.log(title2);
    

})

test.only("Test tab-2",async function({page}){
    await page.goto("https://the-internet.herokuapp.com/windows");
})