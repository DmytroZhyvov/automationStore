import user from '../fixtures/user.json'
import AuthorizationPage from '../support/pages/AuthorizationPage';
import AccountPage from '../support/pages/AccountPage';


it('Authorization', () => {
    AuthorizationPage.visit();
    AuthorizationPage.submitLoginForm(user.userName, user.password);
    AccountPage.getUserNameFromHeading().should('contain.text', user.firstName).and('contain.text', ' My Account');

    cy.getCookie('AC_SF_8CEFDA09D5').should('exist');
})



it('Test inheritance', () => {
    AuthorizationPage.visit();
    AuthorizationPage.performSearch('i');
})