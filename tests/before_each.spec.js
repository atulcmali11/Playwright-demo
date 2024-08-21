const {test,expect}=require("@playwright/test")

//before each is hook ,it will use for

// test.beforeAll(()=>{
//     console.log("Before all");
    
// })

test.describe('before each test-1',function(){
    test('Test demo-1', async function(page){
        await page.goto("https://testautomationpractice.blogspot.com/");
        await expect(page).toHaveUrl('https://testautomationpractice.blogspot.com/');

    })

})