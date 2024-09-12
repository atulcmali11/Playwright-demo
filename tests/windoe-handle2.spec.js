const{test,chromium}=require("@playwright/test")


test("tab test demo", async function({}){
    const browser=await chromium.launch({headless:false,channel:'chrome'});
    const context=await browser.newContext();
    const page1=await context.newPage();
    await page1.waitForTimeout(3000);
    await page1.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
   // await page1.getByRole("link",{name:"Follow On Twitter"}).click();
   await page1.locator("#followboth").click();
   await multipage
    await page1.pause();
})