class HeaderPage {
    elements = {
        logoLink: () => cy.get('.logo a[title = "Karaca"]'),
        mainCatLink: (mainCategory) => cy.contains('nav > a', mainCategory),
        subCatItem: (subCatItem) => cy.contains('.megaMenuWrap[style = "display: block;"] .itemGroupHeadline', subCatItem),
        headerCartLink: () => cy.get('.header-cart'),
        goToCartLink: () => cy.contains('Sepete Git'),
        headerCartLink1: () => cy.contains('.imgText', 'Sepet'),
    }

    hoverToMainCatItem(mainCategory) {
        this.elements.mainCatLink(mainCategory).trigger('mouseover');
    }

    clickSubCatItem(subCatItem) {
        this.elements.subCatItem(subCatItem).click();
    }

    getCartCountItem() {
        return this.elements.headerCartLink().find('.count');
    }

    clickHeaderCartLink() {
        this.elements.headerCartLink1().trigger('mouseover');
        this.elements.goToCartLink().click({force:true});
    }

}

export const headerPage = new HeaderPage();