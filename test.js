const { By, Key, Builder } = require("selenium-webdriver");
const { post } = require("selenium-webdriver/http");
// require("chromedriver");

async function test_case() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("https://staging.community.fabric.microsoft.com/t5/user/loginpage");

        const userName = await driver.findElement(By.name("login"));

        userName.sendKeys("ics_sysuser");
        const password = await driver.findElement(By.name("password"));
        password.sendKeys("Q!w2e3r4");

        await driver.findElement(By.name("form_0")).submit();
        // await driver.wait(until.titleIs('Home Page'), 5000);

        await driver.sleep(2000);


        const dropDown = await driver.findElement(By.className("lia-js-menu-opener default-menu-option lia-js-click-menu lia-link-navigation"));
        await dropDown.click();

        await driver.sleep(2000);

        const desktop = await driver.findElement(By.className("board-dropdown-item lia-board-rd-discussion1"));
        await desktop.click();
        
        //await driver.sleep(2000);

        const newMessage= await driver.findElement(By.className("lia-button lia-button-primary"));
        await newMessage.click();

        const date =  new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-based, so add 1
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const formattedDate = `${year}:${month}:${day}`
        const formattedTime = `${hours}:${minutes}:${seconds}`;
        const text = `Nikhitha-${formattedDate}-${formattedTime}`;

        const subject= await driver.findElement(By.className("lia-form-subject-input lia-autocomplete-input"));
        subject.sendKeys(text);

        const body = await driver.findElement(By.id('mceu_40'));

        const iframe = await body.findElement(By.tagName('iframe'));
        await driver.switchTo().frame(iframe);

        const paragraphElement  = await driver.findElement(By.tagName('p'));
        await paragraphElement.sendKeys(text);

        await driver.sleep(1000);

        await driver.switchTo().defaultContent();
        // await driver.quit();

        const label= await driver.findElement(By.id("list_0"));
        
        const generalComments = await label.findElement(By.xpath(".//a[contains(text(), 'General Comment')]"));
        await generalComments.click();

        const postBtn=await driver.findElement(By.id("submitContext_1"));
        await postBtn.click();

        await driver.sleep(4000);

        const communityDropdown = await driver.findElement(By.className("selected-values"));

        // await driver.execute_script("arguments[0].focus();", communityDropdown)
        await communityDropdown.click()

        await driver.sleep(2000);

        const dropUl = await driver.findElement(By.className("commnity-panel"));
        const checkboxes= await dropUl.findElements(By.css(".check-box"));

        for(let i=0; i<4; i++){
            checkboxes[i].click();
        }
        await driver.sleep(1000);

        const syndicate=await driver.findElement(By.id("btn-post"));
        await syndicate.click();

        await driver.sleep(10000);
        const proceedBtn=await driver.findElement(By.id("btn-proceed"));
        await proceedBtn.click();

        await driver.sleep(3000);

        const okBtn=await driver.findElement(By.className("btn-ok alert-popup-close lia-button lia-button-primary"));
        await okBtn.click();

        await driver.sleep(1000);

        const status=await driver.findElement(By.className("btn-status lia-button lia-button-primary"));
        await status.click();

        await driver.sleep(10000);

        const statusOk=await driver.findElement(By.className("btn-ok btn-status-close lia-button lia-button-primary"));
        await statusOk.click();

    }
    catch (error) {
        console.error("An error occured:", error)
    }

}
test_case();













       