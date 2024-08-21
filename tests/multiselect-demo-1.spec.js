const {test, expect}=require('@playwright/test')

test('multi select from dropdown demo-', async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/");
    console.log("Site launched successfully");
    let title=await page.title();
    await expect(title.includes("Selenium Grid Online | Run Selenium Test On Cloud")).toBeTruthy();
    console.log("Title validation suceessfully");
   
    await page.getByRole('Link',{name:'Select Dropdown List'}).click();
    const drop=await page.locator('#multi-select');
    
    await page.pause();
    
    let a=await drop.selectOption(["California",'New Jersey','Washington']);
    
    await page.pause();
    
    console.log('Selected value:-' ,a);
    await expect(a.includes('New Jersey')).toBeTruthy();
    
})