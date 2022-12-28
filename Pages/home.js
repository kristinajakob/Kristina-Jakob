'use strict';
const { By, Key, until } = require("selenium-webdriver");

module.exports = class HomePage {
    #driver;

    constructor(webdriver) {
        this.#driver = webdriver;
    }

    goToPage() {
        this.#driver.get("http://test.qa.rs/");
    }
    
    async clickOnRegisterLink() {
        const registerLink = await this.#driver.findElement(By.linkText('Register'));
        await registerLink.click();
    }

}
   
