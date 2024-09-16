const {test}=require("@playwright/test")
import {automationPractice} from "../y/pageobjects/automation-practice.js";


test("Automation practice:-" , async function({page}){
    const autopractice= new automationPractice(page);
    await autopractice.Launch();
    await autopractice.enterNameInTextbox("Atul","abc@gmail.com","1234567890","pandharpur");
    await autopractice.radiocheck();
    await autopractice.dropdownLocator("India");
    await page.waitForTimeout(3000);


})
