const {test,expect}=require('@playwright/test');
const { log } = require('console');

test('Frame handling',async function({page}){
    await page.goto("https://the-internet.herokuapp.com/nested_frames");
    const frames=page.frames();
    console.log(frames.length);
    //const frameBottom= await page.frameLocator("//frame[@name='frame-bottom']");

    let btFrame=await page.frame({name:'frame-bottom'});
    let bodyLocator=btFrame.locator('//body');
    let text=await bodyLocator.textContent();
    console.log(text);

     const Topframe= await page.frameLocator("//frame[@name='frame-top']");
     let childframe=Topframe.frameLocator("//frame[@name='frame-middle']");
     let bodyLocatorMiddle= childframe.locator('//body');
     let textMiddle=await bodyLocatorMiddle.textContent();
     console.log(textMiddle);


     let childframeleft=Topframe.frameLocator("//frame[@name='frame-left']");
     let bodyLocatorLeft= childframeleft.locator('//body');
     let textLeft=await bodyLocatorLeft.textContent();
     console.log(textLeft);


     let childframeRight=Topframe.frameLocator("//frame[@name='frame-right']");
     let bodyLocatorRight= childframeRight.locator('//body');
     let textRight=await bodyLocatorRight.textContent();
     console.log(textRight);
     
})
