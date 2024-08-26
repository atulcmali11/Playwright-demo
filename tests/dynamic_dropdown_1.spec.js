
const {test,expect}=require('@playwright/test')

test("Its dynamic dropdown test demo-2", async ({page})=>{

    await page.goto("https://www.jotform.com/widgets/dynamic-dropdowns");
    let title=await page.title();
    console.log(title);

    await page.getByRole("button",{name:"ESC"}).click();
    
})