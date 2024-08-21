const {test}=require("@playwright/test");

test("demo test first script",async function({page}){

    await page.goto("https://demo.automationtesting.in/Register.html")
    const title= await page.title();
    
    const textbox_firstName=await page.locator("//input[@placeholder='First Name']");
    await textbox_firstName.fill("Atul");
    await page.getByPlaceholder("Last Name").fill("Mali");
    await page.pause();
    await page.locator("//input[@value='Male']").check();
    await page.locator("input[type='checkbox']").first().setChecked();
    await page.pause();
    await page.locator("input[type='checkbox']").nth(2).click();
    await page.locator("#Skills").selectOption('APIs');
    await page.locator("#Skills").selectOption({Label:'Select Skills'});

     await page.title();

})


//========================================================================
//https://demo.automationtesting.in/Register.html
// const {test, expect}  = require("@playwright/test")

// test("demo test for actions",async ({page})=>{
//     await page.goto("https://demo.automationtesting.in/Register.html")
//     const title = await page.title();
//     console.log(`title  : ${title}`)

//     const textBoxFirstName = await page.locator("//input[@placeholder='First Name']");
//     await textBoxFirstName.fill("Ramesh");
//     await page.getByPlaceholder("Last Name").fill("Ramesh");
//     await page.pause();
//     const btnRadioMale = await page.l