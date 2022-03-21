import AbstractPage from "./AbstractPage";

class SearchResultPage extends AbstractPage {
    constructor() {
        super();
        this.filterBlock
        this.productsBlock
    }

    productTitleValidation() {
        cy.get('[data-component-type="s-search-result"]')
            .each((el) => {
                cy.wrap(el)
                    .find('.s-list-col-right .s-title-instructions-style span:only-child')
                    //shuld(el=>{                    })
                    .contains('laptop', { matchCase: false })
                    .should('be.visible');
            }).then(() => {
                cy.get('.s-pagination-next').should('be.visible').click();
                this.productTitleValidation();
            });
    }

    throughPagesValidation() {
        this.productTitleValidation();
        cy.get('.s-pagination-next').click();


    }
}

export default SearchResultPage;