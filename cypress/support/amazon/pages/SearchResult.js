import FilterBlock from "../components/searchResult/FilterBlock";
import ProductsBlock from "../components/searchResult/ProductsBlock";
import AbstractPage from "./AbstractPage";

class SearchResultPage extends AbstractPage {
    constructor() {
        super();
        this.filterBlock = new FilterBlock();
        this.productsBlock = new ProductsBlock();
        this.loadingIndicator = '.s-result-list-placeholder .a-spinner';
    }

    waitUntilLoadingCircleHides() {
        cy.get(this.loadingIndicator).should('not.be.visible');
    }


    productPriceValidation(lessThan) {
        cy.get('[data-component-type="s-search-result"] .a-price-whole').each(el => {
            cy.wrap(el)
                .then((price) => {
                    expect(Number(price.text())).to.be.lessThan(lessThan);
                })
        })
    }

    productTitleValidation(includingLine) {
        cy.get('[data-component-type="s-search-result"]').each((el) => {
            cy.wrap(el)
                .find('.s-list-col-right .s-title-instructions-style span:only-child')
                .contains(includingLine, { matchCase: false })
                .should('be.visible');
        })
            .then(() => {
                cy.get('.s-pagination-next').should('be.visible').click()
                    .then(() => {
                        this.productTitleValidation();
                    });
            });
    }

    // throughPagesValidation() {
    //     this.productTitleValidation();
    //     cy.get('.s-pagination-next').click();
    // }

    getFilterBlock() {
        return this.filterBlock;
    }
}

export const searchResultPage = new SearchResultPage();