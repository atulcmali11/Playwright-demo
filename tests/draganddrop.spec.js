const {test,expect}=require('@playwright/test')

test ("drag drop functionality",async function({page}){
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
    await page.pause();
   const sourceLocation= await page.locator("#column-a");
   const destinationLocation=await page.locator("#column-b");
   await sourceLocation.dragTo(destinationLocation);
   let draggedlocator= await page.locator("//div[@id='column-b']/header").textContent();
   console.log(draggedlocator);
   

   await expect(draggedlocator).toBe("A");
   await expect(draggedlocator.includes("A")).toBeTruthy();
})