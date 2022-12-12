class ProductDetailPage {
    elements = {
        productTitle: () => cy.get('h1.title'),
        productCodeField: () => cy.get('.product_code'),
        productPriceField: () => cy.get('.priceDesktop .prices'),
        addToCartBut: () => cy.get('#addToCart'),
        quantityDropdown: () => cy.get('#unit'),
        contiuneShoppingBut: () => cy.contains('#multipleAddCart:not(.addtoCartPopup) button', 'ALIŞVERİŞE DEVAM ET'),
        goToCartBut: () => cy.contains('#multipleAddCart:not(.addtoCartPopup) button', 'SEPETE GİT')
    }

    clickAddToCartBut() {
        this.elements.addToCartBut().click();
    }

    clickGoToCartBut() {
        this.elements.goToCartBut().click();
    }

    selectProdQuantity(quantity) {
        this.elements.quantityDropdown().select(quantity);
    }
}

export const productDetailPage = new ProductDetailPage();