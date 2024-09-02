const {test,expect}=require('@playwright/test')

test("Mouse Hovor action",async function({page}){
    await page.goto("https://www.flipkart.com/");
    await page.waitForLoadState();
    //await page.reload();
   // await page.pause();
    //await page.getByRole("button",{name:'X'}).click();
    await page.locator("//span[text()='Login']").click();
    await page.locator("//img[@title='Flipkart']").click();
    await page.locator("//span[@role='button']").click();
      //await page.pause();
    await page.isVisible("image",{name:'Electronics'});
    //await page.getByRole("image",{name:'Electronics'}).hover();
    await page.locator("//span[text()='Electronics']").hover();
    //await page.getByRole("link",{name:'Laptop and Desktop'}).hover();
    await page.getByRole("link",{name:'Gaming Laptops'}).click();
    //await page.waitForLoadState();

    const headingGamingLaptops = await page.getByRole('heading',{name:'Gaming Laptops Store'}).isVisible();
    console.log(headingGamingLaptops);

    

})
