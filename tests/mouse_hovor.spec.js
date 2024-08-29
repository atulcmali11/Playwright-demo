const {test,expect}=require('@playwright/test')

test("Mouse Hovor action",async function({page}){
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    let title= await page.title();
    console.log(title);
    await page.pause();
    await page.getByRole('button',{name:'Mouse Hover'}).hover();
    await page.getByRole("link",{name:'Top'}).click();
    
    
    
})