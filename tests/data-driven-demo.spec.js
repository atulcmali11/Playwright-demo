const {test,expect}=require('@playwright/test')
import testdata from './testdata/testdata.json'

test.skip("data driven test case using JSON as an input data",async function({page}){
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.locator("id=username").fill("tomsmith");
    await page.locator("id=password").fill("SuperSecretPassword!");
    await page.locator("//button[normalize-space()='Login']").click();
    await expect(page.locator('//div[normalize-space(text())="You logged into a secure area!"]')).toBeVisible();

})
// const testdata = [
//     {
//         id: 1,
//         username: "tomsmith",
//         password: "SuperSecretPassword!",
//         message: "You logged into a secure area!"
//     },
//     {
//         id: 2,
//         username: "tomsmith12345",
//         password: "SuperSecretPassword!",
//         message: "Your username is invalid!"
//     },
//     {
//         id: 3,
//         username: "tomsmith",
//         password: "Super",
//         message: "Your password is invalid!"
//     }
// ]

for(let data of testdata){
    
test(`data driven test case using JSON as an input data-${data.id}`,async function({page}){
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.locator("id=username").fill(data.username);
    await page.locator("id=password").fill(data.password);
    await page.locator("//button[normalize-space()='Login']").click();
    //const msg='You logged into a secure area!';
    await expect(page.locator(`//div[normalize-space(text())="${data.message}"]`)).toBeVisible();

})
}

