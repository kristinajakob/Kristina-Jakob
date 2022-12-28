"use strict";

require("chromedriver");
const webdriver = require("selenium-webdriver");
const { By, Key, until } = require("selenium-webdriver");
const { assert, expect } = require("chai");
const HomePage = require("http://test.qa.rs");
const RegisterPage = require("http://test.qa.rs/register");
const LoginPage = require("http://test.qa.rs/login");

describe("Fast Food test", function() {
    let driver;
    let pageHomepage;
    let pageRegister;
    let pageLogin;
    
});

    before(function() {
        driver = new webdriver.Builder().forBrowser("chrome").build();
        pageHomepage = new HomePage(driver);
        pageRegister = new RegisterPage(driver);
        pageLogin = new LoginPage(driver);
    
        });

    it("Verify homepage", async function() {
        await pageHomepage.goToPage();
        const pageTitle = await pageHomepage.getPageHeaderTitle();
        expect(pageTitle).to.contain("Fast Food");
        expect(await pageHomepage.isBugListDivDisplayed()).to.be.true;
    });

    it("Goes to resgister page", async function() {
        await pageHomepage.clickOnRegisterLink();
       

        expect(await pageRegister.getRegisterButtonValue()).to.contain('Register');
    });

    it('Successfuly performs registration', async function() {
        await pageRegister.getInputFirstname().sendKeys('Kristina');     
        await pageRegister.getInputLastname().sendKeys('Jakob');
        await pageRegister.getInputEmail().sendKeys('test@example.local');
        await pageRegister.getInputUsername().sendKeys('Kris');
        await pageRegister.getInputPassword().sendKeys('Kris');
        await pageRegister.getInputPasswordConfirmation().sendKeys('Kris');
        await pageRegister.getRegisterButton().click();

        expect(await pageHomepage.getSuccesssAlertText()).to.contain("Sucsess");
    });