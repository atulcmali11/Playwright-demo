const {test,expect}=require('@playwright/test')

test('Spice jet site automation',async function({page}){
    await page.goto("https://www.makemytrip.com/");
    let title=await page.title();
    console.log(title);
    await page.pause();
    await page.locator("//section[@class='modalMain tcnFooter']/span[@data-cy='closeModal']").click();
   // let source= await page.getByPlaceholder("From").fill('ag');
    let source= await page.locator("//div[@class='flt_fsw_inputBox searchCity inactiveWidget activeWidget']").fill('ag');
    
    //label[@for='fromCity']
   
   
    
})