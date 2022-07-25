const {When,Then,Before,After,Given}=require("@cucumber/cucumber")
const {initDriver}=require("../../feature/support/driverUtil")
const {By}=require('selenium-webdriver')

const {expect}=require("chai")
let sum=0





let driver
Before(function(){
driver=initDriver()
})

After(function(){
    driver.quit()
})
When('I add {int} and {int}', function (num1, num2) {
    sum=num1+num2
});
Then('the result should be {int}', function (result) {
    expect(sum).equal(result)
});
///////////////////
Given('i visit google homepage', async ()=>{
await driver.get("https://www.google.com/")
});



When('i search with fine', async ()=>{
await driver.findElement(By.name("q")).sendKeys('Techverito'+'\n')
});

Then('i should to see results', async ()=>{

const text=await driver.findElement(By.id('search')).getText()
    console.log(text)
});


