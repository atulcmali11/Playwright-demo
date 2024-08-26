
const{test,expect}=require('@playwright/test');

const personInfo={
    Name:'aaaa',
    Email:'aass',
    Password:'asdf',
    Company:'fdfd',
    Website:'assghgh',
    Country:'India',
    City:'Pune',
    Address:'llll',
    Address1:'dsds',
    State:'asasa',
    Zip_Code:'554466'
}

test('end to end test case of page',async function({page}){
    await page.goto("https://www.lambdatest.com/selenium-playground/");
    await page.getByText("Input Form Submit").click();
    await page.waitForLoadState();
    let heading=await page.getByRole("heading",{name:'Form Demo'}).textContent();
    console.log(heading);
    
    await expect(heading.includes("Form Demo")).toBeTruthy();
    await page.getByRole("textbox",{name:'Name'}).fill("Atul");
    await page.getByPlaceholder('Email',{exact:true}).fill("abc.xyz@gmail.com");
    await page.locator("//input[@type='password']").fill("asd123");
    await page.locator("#company").fill("W energy");
    await page.getByPlaceholder("Website").fill('www.google.com');
    let country= await page.locator("//select[@name='country']");
    await country.selectOption("India");
    await page.locator("#inputCity").fill("Pandharpur");
    await page.locator("#inputAddress1").fill("Bhose");
    await page.locator("#inputAddress2").fill("Bhose Pati");
    await page.getByPlaceholder("State").fill("Maharashtra");
    await page.locator("#inputZip").fill('413315');
    await page.getByRole("button",{name:'Submit'}).click();

    let val= await page.locator("//p[@class='success-msg hidden']").textContent();
    await expect(val.includes("Thanks for contacting us, we will get back to you shortly.")).toBeTruthy();

  
})

test('Using object',async function({page}){

    await page.goto("https://www.lambdatest.com/selenium-playground/");
    await page.getByText("Input Form Submit").click();
    await page.waitForLoadState();
    let heading=await page.getByRole("heading",{name:'Form Demo'}).textContent();
    console.log(heading);
    
    await expect(heading.includes("Form Demo")).toBeTruthy();
    await page.getByRole("textbox",{name:'Name'}).fill(personInfo.Name);
    await page.getByRole("textbox",{name:'Email'}).fill(personInfo.Email);
    await page.locator("//input[@type='password']").fill(personInfo.Password);
    await page.locator("#company").fill(personInfo.Company);
    await page.getByPlaceholder("Website").fill(personInfo.Website);
    let country= await page.locator("//select[@name='country']");
    await country.selectOption(personInfo.Country);
    await page.locator("#inputCity").fill(personInfo.City);
    await page.locator("#inputAddress1").fill(personInfo.Address);
    await page.locator("#inputAddress2").fill(personInfo.Address1);
    await page.getByPlaceholder("State").fill(personInfo.State);
    await page.locator("#inputZip").fill(personInfo.Zip_Code);
    await page.getByRole("button",{name:'Submit'}).click();

    let val= await page.locator("//p[@class='success-msg hidden']").textContent();
    await expect(val.includes("Thanks for contacting us, we will get back to you shortly.")).toBeTruthy();


})