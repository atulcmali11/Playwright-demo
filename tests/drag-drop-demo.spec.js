const {test,expect}=require("@playwright/test")

test("Drag drop demo with mouse event",async function({page}){

    await page.goto("https://www.lambdatest.com/selenium-playground/drag-and-drop-demo");
    const sourceLocator=await page.locator("id=draggable");
    const destnationLocator=await page.locator("id=droppable");

    const sourceLocatorBoundingbox=await sourceLocator.boundingBox();
    const destnationLocatorBoundingbox=await destnationLocator.boundingBox();

    await page.pause();
    await page.mouse.move(sourceLocatorBoundingbox.x,sourceLocatorBoundingbox.y);
    console.log(sourceLocatorBoundingbox);
    
    await page.mouse.down();

    await page.mouse.move(destnationLocatorBoundingbox.x,destnationLocatorBoundingbox.y);
    console.log(destnationLocatorBoundingbox);
    
    await page.mouse.up();
    

    await page.waitForTimeout(3000);
})