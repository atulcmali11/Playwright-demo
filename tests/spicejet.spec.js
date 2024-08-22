const {test,expect}=require('@playwright/test')

test('Spice jet site automation',async function({page}){
    await page.goto("https://www.spicejet.com/");
    let title=await page.title();
    console.log(title);
    
    
})