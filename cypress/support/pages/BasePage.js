import user from '../../fixtures/user.json'

export default class BasePage {
    getLoginOrRegisterButton(){
        return cy.get('#customernav');
    }

    getAccountButton(){
        return cy.get("[data-id='menu_account']").first();
    }

    getSearchField(){
        return cy.get('#filter_keyword');
    }

    performSearch(searchQuery){
        cy.log(`**Perform search query ${searchQuery}**`);
        this.getSearchField().type(searchQuery);
    }

    logout(){
        cy.log('**Log out**');
        this.getAccountButton().click();
        cy.get("[data-id='menu_logout']").first().click({force: true});
    }

    setCookie() {
        cy.setCookie('AC_SF_8CEFDA09D5', user.AC_SF_8CEFDA09D5);
    }


}