const {test}=require("@playwright/test")


test.describe("Describe block",()=>{
test ("First test",async({page})=>{
    await page.goto("https://www.google.com")

})
})

test.describe.only("Describe block-2",()=>{
    test ("Second test",async({page})=>{
        await page.goto("https://www.flipkart.com")
    
    })
    })

    test.describe.only("Describe block-3",()=>{
        test ("Third test",async({page})=>{
            await page.goto("https://www.amazon.com")
        
        })
        })