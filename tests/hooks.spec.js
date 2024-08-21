// before each and before all demonstartion

const {test,expect}=require('@playwright/test');

let title='';
test.beforeEach('Execute before all test cases',async function({page}){
    await page.goto("https://www.lambdatest.com/selenium-playground/");
    title=await page.title();
})
test ('before each hooks test',async function({page}){
    await expect(title.includes("Selenium")).toBeTruthy();
})
test ('before each hooks test-1',async function({page}){
    await expect(title.includes("Selenium")).toBeTruthy();
})

test.afterEach(async function(){
    console.log("Executed after each");
})
