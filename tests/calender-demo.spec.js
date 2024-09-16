const{test,expect}=require("@playwright/test")

test("Canlender handling demo:", async function({page}){
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    const datelocator=await page.locator("#birthday");
    datelocator.fill("1987-06-11");
    await page.waitForTimeout(3000);

})

test.only("Date picker demo",async function({page}){
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    const startDate=await page.getByPlaceholder("Start date");
    const endDate= await page.getByPlaceholder("End date");
    await startDate.click();
    const startspecificDatepick=await page.locator("//table//td[@class='day' and text()='27']");
    await startspecificDatepick.click();
    await endDate.click();
    const endspecificDatepick=await page.locator("//table//td[@class='day' and text()='30']");
    await endspecificDatepick.click();


    await page.waitForTimeout(2000);

})