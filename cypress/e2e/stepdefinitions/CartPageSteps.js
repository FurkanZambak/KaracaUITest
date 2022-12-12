import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { cartPage } from "../../pages/CartPage";


Then('Sepetteki ürün bilgileri kontrol edilir', () => {
    cy.fixture('data.json').then(data => {
        cartPage.elements.myCartTxt(data.length).should('be.visible');
        for(let i = 0; i < data.length; i++) {
            cartPage.elements.basketWrappers().eq(i).within(() => {
                cartPage.elements.productName().should('have.text', data[i].name);
                cartPage.elements.productCode().should('have.text', data[i].code);
            });
        }
    });
});