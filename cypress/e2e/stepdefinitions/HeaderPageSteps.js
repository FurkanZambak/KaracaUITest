import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { headerPage } from "../../pages/HeaderPage";

Given('Anasayfanın açılması', () => {
    cy.visit('https://www.karaca.com');
});

Then('Sayfa title değerinin kontrol edilmesi', () => {
    cy.title().should('contain', 'Karaca');
}); 

Then('Anasayfada logonun görüntülenmesi', () => {
    headerPage.elements.logoLink().should('be.visible');
});

Given('{string} kategorisine hover işlemi yapılır', (mainCategory) => {
    headerPage.hoverToMainCatItem(mainCategory);
});

When('{string} alt kategorisine tıklanır', (subCategory) => {
    headerPage.clickSubCatItem(subCategory);
});

Then('Header alanında sepetteki ürün sayısı {int} kadar olmalıdır', (quantity) => {
    headerPage.getCartCountItem().should('have.text', `${quantity}`);
});

/* Given('Sepetim sayfasının açılması', () => {
    headerPage.clickHeaderCartLink();
}); */