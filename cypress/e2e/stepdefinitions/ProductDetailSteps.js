import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { productDetailPage } from "../../pages/ProductDetailPage";
import { productListPage } from "../../pages/ProductListPage";


When('{int} adet ürünün sepete eklenmesi', (quantity) => {
    cy.fixture('data.json').then(data => {
        for(let i = 0; i < quantity; i++) {
            productListPage.selectProductFromList(data[i].name);
            productDetailPage.clickAddToCartBut();
            productDetailPage.elements.contiuneShoppingBut().should('be.visible');
            if(i < quantity - 1) {
                cy.go('back');
            }
        }
    });
});

Given('Sepete Git butonuna tıklanır', () => {
    productDetailPage.clickGoToCartBut();
});