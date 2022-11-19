import BasePage from './BasePage';

class ProductPage extends BasePage{
    openProductPageById(productId) {
        cy.visit(`/index.php?rt=product/product&product_id=${productId}`);
    }

    getProductQtyField(){
        return cy.get('#product_quantity');
    }

    setProductQty(productQty){
        this.getProductQtyField().clear().type(productQty);
    }

    getAddToCartButton(){
        return cy.get('li .cart');
    }

    clickAddToCartButton(){
        this.getAddToCartButton().click();
    }
}

export default new ProductPage();