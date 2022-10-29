import {login, findProduct} from "../support/helper";

it('Order via hw helper function', () => {
    login();

    cy.get('#filter_keyword').type('I');
    cy.get('.fa.fa-search').click();

    findProduct('nail LaCquer 1');
})