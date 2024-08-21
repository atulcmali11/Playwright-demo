
const {test,expect}=require('@playwright/test')

test ('Dyanmic dropdown demo',async function({page}){
    await page.goto('https://www.google.com');
    await page.getByTitle("search").pressSequentially('Playwright',{delay:200});

//frame handle
 await page
         .frame({name:'callout'})
         .locator("button",{hasText:"Stay signed out"})
         .click();

    const list1=await page.$$("//div[@role='option' and @aria-label]");
    console.log(list1.length);
    
    await page.pause();
    for(let i=0;i<list1.length;i++){
        const ele=list1[i];
        const text=await ele.textContent();
        console.log(text);
        if(text==='playwright meaning'){
            await ele.click();
        }
        
    }
    
    
})



