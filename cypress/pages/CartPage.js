class CartPage {
    elements = {
        basketWrappers: () => cy.get('.basketProductWrap'),
        productName: () => cy.get('.name'),
        productCode: () => cy.get('.no'),
        myCartTxt: (quantity) => cy.contains(`Sepetim (${quantity} Ürün)`)
    }
    
}

export const cartPage = new CartPage();