import BasePage from './BasePage';

class CheckoutPage extends BasePage{
    getCheckoutButton(){
        return cy.get('#cart_checkout1');
    }

    clickCheckoutButton(){
        this.getCheckoutButton().click();
    }

    getConfirmOrderButton(){
        return cy.get('#checkout_btn');
    }

    clickConfirmOrderButton(){
        this.getConfirmOrderButton().click();
    }

}

export default new CheckoutPage();