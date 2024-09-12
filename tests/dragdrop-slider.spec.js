
const {test,expect}=require('@playwright/test');

test("Horizonatal Slider demo",async function({page}){

    await page.goto("https://the-internet.herokuapp.com/horizontal_slider");
    const slidebarLocator=await page.locator("//input[@type='range']");
    const valuLocator= await page.locator("//span[@id='range']");

    await slidebarLocator.click();
    const value='1.5';

    while(true){
        const text=await valuLocator.textContent();
        console.log("Slidebar value:-",text);
        if(text===value){
            break;
        }
       // await slidebarLocator.press('ArrowLeft');
        await slidebarLocator.press('ArrowRight');
        await page.waitForTimeout(2000);

        
    }

})

test.only("Slider demo1",async function({page}){
    await page.goto("https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo");
    const slidelocation= await page.locator("//*[@id='slider3']/div/input");
    const slideval= await page.locator("#rangeSuccess");

    await slidelocation.click();
    const val1=65;
    while(true){

        const text1=await slideval.textContent();
        console.log(text1);
        if(text1===val1){
            break;
        }

        await slidelocation.press('ArrowRight');
        await page.waitForTimeout(2000);
        
    }

})
