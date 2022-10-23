import {faker} from "@faker-js/faker";

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


it('Registration with faker', () => {
    cy.visit('/')

    cy.get('#customernav').click();
    cy.get("[title='Continue']").click();
    cy.get('#AccountFrm_firstname').type(user.firstName);
    cy.get('#AccountFrm_lastname').type(user.lastName);
    cy.get('#AccountFrm_email').type(user.email);
    cy.get('#AccountFrm_address_1').type(user.address);
    cy.get('#AccountFrm_city').type(user.city);
    cy.get('#AccountFrm_zone_id').select(1);
    cy.get('#AccountFrm_postcode').type(user.postCode);
    cy.get('#AccountFrm_country_id').select('United Kingdom');
    cy.get('#AccountFrm_loginname').type(user.userName);
    cy.get('#AccountFrm_password').type(user.password);
    cy.get('#AccountFrm_confirm').type(user.password);
    cy.get('#AccountFrm_newsletter0').click();
    cy.get('#AccountFrm_agree').check();
    cy.get("[title='Continue']").click();

    cy.get('h1.heading1').should('contain.text', ' Your Account Has Been Created!')
})
