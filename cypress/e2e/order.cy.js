import user  from '../fixtures/user.json'
import {findExistingProduct} from '../support/helper';

it('Place Order', () => {
    cy.setCookie('AC_SF_8CEFDA09D5', user.AC_SF_8CEFDA09D5);

    cy.visit('/index.php?rt=product/product&product_id=52');

    cy.get('#product_quantity').clear().type(4);
    cy.get('li .cart').click();
    cy.get('#cart_checkout1').click();
    cy.get('#checkout_btn').click();

    cy.get('.maintext').should('contain.text', ' Your Order Has Been Processed!');
    cy.get('section.mb40').should('contain.text','Thank you for shopping with us!');
})

it('Place Order via search', () => {
    cy.setCookie('AC_SF_8CEFDA09D5', user.AC_SF_8CEFDA09D5);

    cy.visit('/');
    findExistingProduct('Skinsheen Bronzer Stick')

    cy.get('#product_quantity').clear().type(4);
    cy.get('li .cart').click();
    cy.get('#cart_checkout1').click();
    cy.get('#checkout_btn').click();

    cy.get('.maintext').should('contain.text', ' Your Order Has Been Processed!');
    cy.get('section.mb40').should('contain.text','Thank you for shopping with us!');
})