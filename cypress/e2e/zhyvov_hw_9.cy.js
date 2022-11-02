import user from '../fixtures/user.json'
import AuthorizationPage from '../support/pages/AuthorizationPage';
import AccountPage from '../support/pages/AccountPage';

describe('User can', function () {
    it('login with correct login and password', () => {
        AuthorizationPage.visit();
        AuthorizationPage.submitLoginForm(user.userName, user.password);
        AccountPage.getUserNameFromHeading().should('contain.text', user.firstName).and('contain.text', ' My Account');
        cy.getCookie('AC_SF_8CEFDA09D5').should('exist');
        AccountPage.logout();
    })
})

describe('User can not', function () {
    it('login with correct login and invalid password', () => {
        AuthorizationPage.visit();
        AuthorizationPage.submitLoginForm(user.userName,'invalidPassword');
        AuthorizationPage.getLoginAlert().should('contain.text', "\n×\nError: Incorrect login or password provided.");
    })

    it('login with invalid login and correct password', () => {
        AuthorizationPage.visit();
        AuthorizationPage.submitLoginForm('invalidUser',user.password);
        AuthorizationPage.getLoginAlert().should('contain.text', "\n×\nError: Incorrect login or password provided.");
    })

    it('login with invalid login and invalid password', () => {
        AuthorizationPage.visit();
        AuthorizationPage.submitLoginForm('invalidUser','invalidPassword');
        AuthorizationPage.getLoginAlert().should('contain.text', "\n×\nError: Incorrect login or password provided.");
    })

    it('login with with correct login and without password', () => {
        AuthorizationPage.visit();
        AuthorizationPage.typeTextInLoginField(user.userName);
        AuthorizationPage.getLoginButton().click();
        AuthorizationPage.getLoginAlert().should('contain.text', "\n×\nError: Incorrect login or password provided.");
    })

    it('login with without login and with correct password', () => {
        AuthorizationPage.visit();
        AuthorizationPage.typeTextInPasswordField(user.password)
        AuthorizationPage.getLoginButton().click();
        AuthorizationPage.getLoginAlert().should('contain.text', "\n×\nError: Incorrect login or password provided.");
    })

    it('login with without login and without password', () => {
        AuthorizationPage.visit();
        AuthorizationPage.getLoginButton().click();
        AuthorizationPage.getLoginAlert().should('contain.text', "\n×\nError: Incorrect login or password provided.");
    })

    it('login with Spaces only login and correct password', () => {
        AuthorizationPage.visit();
        AuthorizationPage.submitLoginForm('   ',user.password);
        AuthorizationPage.getLoginAlert().should('contain.text', "\n×\nError: Incorrect login or password provided.");
    })

    it('login with correct login and Spaces only password', () => {
        AuthorizationPage.visit();
        AuthorizationPage.submitLoginForm(user.userName,'    ');
        AuthorizationPage.getLoginAlert().should('contain.text', "\n×\nError: Incorrect login or password provided.");
    })

})

