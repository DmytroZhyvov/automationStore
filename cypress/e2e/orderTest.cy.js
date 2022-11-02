import user  from '../fixtures/user.json'
import {findExistingProduct} from '../support/helper';
import ProductPage from '../support/pages/ProductPage';
import CheckoutPage from '../support/pages/CheckoutPage';
import AuthorizationPage from '../support/pages/AuthorizationPage';

describe('User can', function (){
    beforeEach(function () {
        AuthorizationPage.visit();
        AuthorizationPage.submitLoginForm(user.userName, user.password);
    })
    it ('Place Order', () => {
        ProductPage.openProductPageById(52);
        ProductPage.setProductQty(4);
        ProductPage.clickAddToCartButton();
        CheckoutPage.clickCheckoutButton();
        CheckoutPage.clickConfirmOrderButton();

        cy.get('.maintext').should('contain.text', ' Your Order Has Been Processed!');
        cy.get('section.mb40').should('contain.text','Thank you for shopping with us!');
    })

    it('Place Order via search', () => {
        findExistingProduct('Skinsheen Bronzer Stick')

        ProductPage.setProductQty(4);
        ProductPage.clickAddToCartButton();
        CheckoutPage.clickCheckoutButton();
        CheckoutPage.clickConfirmOrderButton();

        cy.get('.maintext').should('contain.text', ' Your Order Has Been Processed!');
        cy.get('section.mb40').should('contain.text','Thank you for shopping with us!');
    })
    afterEach(function (){
        CheckoutPage.logout();
    })
})



