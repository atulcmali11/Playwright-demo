
const {test,expect}=require('@playwright/test');

test ('multi select drop-down', async function({page}){

    await page.goto("https://www.lambdatest.com/selenium-playground");
    await page.getByRole('Link',{name:'Select Dropdown List'}).click();
    const drop=await page.locator('#multi-select');
    await page.pause();
    await drop.selectOption("California");
    await drop.selectOption({index:4});

    let alltext= await drop.textContent();
    console.log("alltext:-",alltext);
    
    let selectvalues=await drop.locator("option:checked ").allInnerTexts();  
    console.log(selectvalues);
    await page.pause();
    
    let selectedValues= await page.$$eval('#multi-select option:checked',elements=> elements.map(elements.value));
    console.log("selected values= ",selectedValues);
    await page.pause();
    
})