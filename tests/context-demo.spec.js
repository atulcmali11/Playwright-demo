
const{test,chromium}=require("@playwright/test")

test("context demo",async function({browser}){

    const context1= await browser.newContext();
    const context2=await browser.newContext();
    const page1= await context1.newPage();
    const page2= await context2.newPage();

    await page1.goto("https://www.google.com");
    await page1.waitForTimeout(3000);
    await page2.goto("https://www.google.com");
    await page2.waitForTimeout(2000);

    console.log("End of context");
    await context1.close();
    await context2.close();
    await browser.close();
    
})

test.only("new window handles", async function(){
    const browser= await chromium.launch();
    const context3= await browser.newContext();
    const page= await context3.newPage();

    await page.goto("https://the-internet.herokuapp.com/windows");
    const  clickherelocator= await page.getByText("Click Here");
    const pagepromise= context3.waitForEvent('page');
    await clickherelocator.click();

    const newpage= await pagepromise;
    let titlte= await newpage.title();
    console.log(titlte);

    await newpage.waitForTimeout(2000);
    await context3.close();
    await newpage.close();
    await page.close();
    await browser.close();
    


})