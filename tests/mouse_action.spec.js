const {test, expect}=require('@playwright/test')

test("Mouse event demo",async function({page}){
    await page.goto("https://testautomationpractice.blogspot.com/");

    let title= await page.title();
    console.log(title);
    await page.getByRole('button',{name:'Copy Text'}).dblclick();
    await page.pause();
    let value1= await page.locator('#field1').getAttribute("value")
   // let value2=await page.locator("#field2").getAttribute("value");
    let value2=await page.locator("#field2").inputValue();
    await expect(value2.includes("Hello World!")).toBeTruthy();

    console.log(value1,value2);

    let text=await page.getByRole("button",{name:'Submit'}).hover();
    console.log(text);
    
    

     
})