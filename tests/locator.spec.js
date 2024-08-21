const {test,expect}=require("@playwright/test")


test.describe("Locator demo",()=>{
    test("Locator:- getByRole ",async ({page})=>{
        await page.goto("https://demo.automationtesting.in/Register.html");
       // await page.waitForTimeout(15000);

       const radiomale=await page.getByRole("radio",{name:"Male", exact:true});
       await radiomale.click();
       //const checkbox=await page.getByRole("checkbox",{name:'Cricket'});
       //const checkbox = await page.getByRole('checkbox', { name: 'Cricket' });
       //const checkbox = await page.getByRole('checkbox').filter({ type: 'checkbox', name:'Cricket'});
       //const checkbox = await page.getByRole('checkbox', { name: 'Cricket' }).filter({ has: page.locator('#checkbox1') });
       const checkbox=await page.getByRole('generic').filter({hasText:'Cricket'}).getByRole('checkbox');
       await checkbox.check();
       //await page.waitForTimeout(2000);

    })

})