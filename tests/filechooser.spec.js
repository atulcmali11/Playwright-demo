const {test,expect}=require('@playwright/test');

const file1="D://LTI.txt";
test("File chooser options",async function({page}){

   await page.goto("https://the-internet.herokuapp.com/upload");
    const filechooserEventpromise= page.waitForEvent('filechooser');
   await page.locator("#drag-drop-upload").click();
   const filechooser=await filechooserEventpromise;
   await filechooser.setFiles(file1);
   await page.waitForTimeout(3000);
    
})

test("Drag drop with other side", async function ({page}){
   await page.goto("https://www.lambdatest.com/selenium-playground/drag-and-drop-demo");
    const src= await page.getByText("Draggable 1");
    const trgt= await page.locator("#mydropzone");
    await src.dragTo (trgt);
    const src2= await page.getByText("Draggable 2");
    const trgt2= await page.locator("#mydropzone");
    await src2.dragTo (trgt2);
    await page.waitForTimeout(5000);
    let draglst= await page.locator("#droppedlist").textContent();
    console.log(draglst);
    await expect(draglst.includes("Draggable 2")).toBeTruthy();
      
})

test("Drag drop with other side-1", async function ({page}){
   await page.goto("https://www.lambdatest.com/selenium-playground/drag-and-drop-demo");
    const src1= await page.getByText("Drag me to my target");
    const trgt1= await page.locator("#droppable");
    await src1.dragTo (trgt1);
    await page.waitForTimeout(5000);
    let draglst1= await page.locator("#droppable").textContent();
    console.log(draglst1);
    await expect(draglst1.includes("Dropped!")).toBeTruthy();
       
})
