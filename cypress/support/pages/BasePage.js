export default class BasePage {
    getSearchField(){
        return cy.get('#filter_keyword');
    }

    performSearch(searchQuery){
        cy.log(`**Perform search query ${searchQuery}**`);
        this.getSearchField().type(searchQuery);
    }
}