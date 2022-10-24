import user from "../fixtures/user.json";

export function findExistingProduct(productName) {
    cy.get('#filter_keyword').type(productName);

    cy.get('.button-in-search').click();

    cy.get('h1.productname').should('contain', productName)
}

export function login() {
    cy.visit('/index.php?rt=account/login');

    cy.get('#loginFrm_loginname').type(user.userName);
    cy.get('#loginFrm_password').type(user.password);

    cy.get("[title='Login']").click();

    cy.get('h1.heading1').should('contain.text', user.firstName).and('contain.text', ' My Account');
}

export function findProduct(productName) {
    cy.get('.thumbnails.grid').find('.prdocutname[title]')
        .then($arr => {
            const texts = [...$arr].map(el => el.innerText);

            if (texts.indexOf(productName) !== -1) {
                $arr[texts.indexOf(productName)].click();
                cy.get('li .cart').click();
                cy.get('#cart_checkout1').click();
                cy.get('#checkout_btn').click();

                cy.get('.maintext').should('contain.text', ' Your Order Has Been Processed!');
                cy.get('section.mb40').should('contain.text','Thank you for shopping with us!');

                } else {

                    cy.get('body').then($body => {
                        if ($body.find('.pagination li a').length > 0) {
                            cy.get('.pagination li a').contains('>').click()
                        }
                    })
                    findProduct(productName)
                }
            })
        }