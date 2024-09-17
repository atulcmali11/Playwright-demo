const{test,expect}=require('@playwright/test')
import fs from 'fs'
import path from 'path'
import{parse} from 'csv-parse/sync'

const testdata=parse(fs.readFileSync(path.join(__dirname,"./testdata/logintestdata.csv")),
{
    columns:true,
    skip_empty_lines:true
});

for(let data of testdata){
test(`data driven test case using JSON as an input data-${data.id}`,async function({page}){
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.locator("id=username").fill(data.username);
    await page.locator("id=password").fill(data.password);
    await page.locator("//button[normalize-space()='Login']").click();
    //const msg='You logged into a secure area!';
    await expect(page.locator(`//div[normalize-space(text())="${data.message}"]`)).toBeVisible({timeout:30000});

})}
