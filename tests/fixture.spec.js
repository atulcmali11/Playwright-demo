const {test,expect, chromium}=require('@playwright/test');

//let title='';
let browser;
let page;
let context;
test.beforeEach(async function({ }){

     browser= await chromium.launch();
     context= await browser.newContext();
     page= await context.newPage();

})
test("create fixture",async function(){
    await page.goto("https://www.lambdatest.com/selenium-playground/");
    let title=await page.title();
    console.log(title);
    
})
   test.afterEach(async function(){
    await page.close();
    await context.close();
    await browser.close();
})
