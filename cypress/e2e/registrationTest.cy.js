import RegistrationPage from "../support/pages/RegistrationPage";


it('Registration with faker', () => {
    RegistrationPage.registerNewUser();

    cy.get('h1.heading1').should('contain.text', ' Your Account Has Been Created!')
})
