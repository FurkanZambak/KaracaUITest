class ProductListPage {
    elements = {
        lastBreadcrumbItem: () => cy.get('.krc-breadcrumb > ul > li').last(),
        productNameHeader: () => cy.get('.productCount').prev(),
        mostLikedSortLink: () => cy.contains('.dropdown-menu.show > a', 'En Çok Beğenilen'),
        filterSortButton: () => cy.get('.productList #filterSortOrder'),
        productList: () => cy.get('.plpProduct'),
        productTitle: (productName) => cy.get(`a[title = '${productName}']`)
    }

    clickFilterSortBut() {
        this.elements.filterSortButton().click();
    }

    clickMostLikedSortLink() {
        this.elements.mostLikedSortLink().click();
    }

    selectProductFromList(productName) {
        this.elements.productTitle(productName).click({ force: true });
    }

    getProdData(quantity) {
        return new Cypress.Promise((resolve) => {
            let dataArry = [];
            this.elements.productList().each((product, i) => {
                if(i >= quantity) {
                    return false;
                }
                let data = {
                    name: '',
                    code: '',
                    price: ''
                };
                cy.wrap(product[0]).find('a[href]').then(elm => {
                    data.name = elm.attr('title');
                    data.code = elm.attr('data-productmpn');
                    data.price = elm.attr('data-productprice');
                    dataArry.push(data);
                });
            }).then(() => { resolve(dataArry); });
        });
    }
}

export const productListPage = new ProductListPage();