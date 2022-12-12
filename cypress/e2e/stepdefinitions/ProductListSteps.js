import { Then, Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { productListPage } from "../../pages/ProductListPage";

Then('{string} kategorisine ait ürün listesinin açıldığının kontrol edilmesi', (subCategory) => {
    productListPage.elements.productNameHeader().should('be.visible')
        .and('have.text', subCategory);
});

Then('Breadcrumbdaki son itemde {string} kategorisi yazdığının görülmesi', (subCategory) => {
    productListPage.elements.lastBreadcrumbItem().should('be.visible')
        .and('contains.text', subCategory);
});

Given('Ürün sıralama listesine tıklanır', () => {
    productListPage.clickFilterSortBut();
});

When('Sıralama listesinden En Çok Beğenilen seçeneğine tıklanır', () => {
    productListPage.clickMostLikedSortLink();
});

Then('Aktif sıralama seçeneğinin En Çok Beğenilen olduğunun kontrolü', () => {
    productListPage.elements.filterSortButton().then(elm => {
        expect(elm.text().trim()).to.be.eq('En Çok Beğenilen');
    });
});

Then('Sayfa url değerindeki parametrenin kontrol edilmesi', () => {
    cy.url().should('contain', 'sort=pr.total_wishlist');
});

When('Listedeki ilk ürüne tıklanır', () => {
    productListPage.clickFirstProductLink();
});

Given('{int} adet ürün bilgisinin dosyaya yazılması', (quantity) => {
    productListPage.getProdData(quantity).then(data => {
        cy.writeFile("cypress/fixtures/data.json", data);
    })
});