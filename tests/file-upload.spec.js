
const {test,expect}=require('@playwright/test');
const { dirname } = require('path');

const file1="D://LTI.txt";
test("File upload",async function({page}){
    await page.goto("https://the-internet.herokuapp.com/upload");
   await page.locator("#file-upload").setInputFiles(file1);
   await page.pause();
})


