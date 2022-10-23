export function findExistingProduct(productName) {
    cy.get('#filter_keyword').type(productName);

    cy.get('.button-in-search').click();

    cy.get('h1.productname').should('contain', productName)

}