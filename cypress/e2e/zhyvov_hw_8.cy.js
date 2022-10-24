import {login, findProduct} from "../support/helper";

it('Order via hw helper function', () => {
    login();

    cy.get('#filter_keyword').type('I');
    cy.get('.fa.fa-search').click();

    findProduct('NAIL LACQUER 1');
})