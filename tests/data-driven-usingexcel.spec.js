
const{test,expect}=require('@playwright/test')

import * as xlsx from 'xlsx'
import path from 'path'

const workbook=xlsx.readFile(path.join(__dirname,"./testdata/logintestdataexcel.xlsx"));
const sheet=workbook.Sheets[workbook.SheetNames[0]];
const testdata=xlsx.utils.sheet_to_json(sheet);
    
for(let data of testdata){
    test(`data driven test case using JSON as an input data-${data.id}`,async function({page}){
        await page.goto("https://the-internet.herokuapp.com/login");
        await page.locator("id=username").fill(data.username);
        await page.locator("id=password").fill(data.password);
        await page.locator("//button[normalize-space()='Login']").click();
        //const msg='You logged into a secure area!';
        await expect(page.locator(`//div[normalize-space(text())="${data.message}"]`)).toBeVisible({timeout:30000});
    
    })}


