import {faker} from "@faker-js/faker";
import BasePage from './BasePage';

const user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    postCode: faker.address.zipCode(),
    userName: faker.internet.userName(),
    password: faker.internet.password(15)
}

class RegistrationPage extends BasePage{
    visit(){
        cy.log('**Open Registration page**');
        cy.visit('/index.php?rt=account/create');
    }

    getFirstNameField(){
        return cy.get('#AccountFrm_firstname');
    }

    getLastNameField(){
        return cy.get('#AccountFrm_lastname');
    }

    getEmailField(){
        return cy.get('#AccountFrm_email');
    }

    getAddress1Field(){
        return cy.get('#AccountFrm_address_1');
    }

    getCityField(){
        return cy.get('#AccountFrm_city');
    }

    getRegionDropdown(){
        return cy.get('#AccountFrm_zone_id');
    }

    getPostCodeField(){
        return cy.get('#AccountFrm_postcode');
    }

    getCountryDropdown(){
        return cy.get('#AccountFrm_country_id');
    }

    getLoginNameField(){
        return cy.get('#AccountFrm_loginname');
    }

    getPasswordField(){
        return cy.get('#AccountFrm_password');
    }

    getConfirmPasswordField(){
        return cy.get('#AccountFrm_confirm');
    }

    getNewsletterNoCheckbox(){
        return cy.get('#AccountFrm_newsletter0');
    }

    checkPrivacyPolicy(){
        cy.get('#AccountFrm_agree').check();
    }

    getContinueButton(){
        return cy.get("[title='Continue']");
    }

    registerNewUser(){
        this.visit();
        this.getFirstNameField().type(user.firstName);
        this.getLastNameField().type(user.lastName);
        this.getEmailField().type(user.email);
        this.getAddress1Field().type(user.address);
        this.getCityField().type(user.city);
        this.getRegionDropdown().select(1);
        this.getPostCodeField().type(user.postCode);
        this.getCountryDropdown().select('United Kingdom');
        this.getLoginNameField().type(user.userName);
        this.getPasswordField().type(user.password);
        this.getConfirmPasswordField().type(user.password);
        this.getNewsletterNoCheckbox().click();
        this.checkPrivacyPolicy();
        this.getContinueButton().click();
    }
}

export default new RegistrationPage();