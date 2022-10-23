import user from '../fixtures/user.json'


it('Authorization', () => {
    cy.visit('/index.php?rt=account/login');

    cy.get('#loginFrm_loginname').type(user.userName);
    cy.get('#loginFrm_password').type(user.password);

    cy.get("[title='Login']").click();

    cy.get('h1.heading1').should('contain.text', user.firstName).and('contain.text', ' My Account');

    cy.getCookie('AC_SF_8CEFDA09D5').should('exist');
})
