import AbstraUIObject from "../AbstractUIObject";
import PriceRangeFilterComponent from "./PriceRangeFilterComponent";

class FilterBlock extends AbstraUIObject {
    constructor() {
        super();
        this.featuredBrands = '#brandsRefinements ul li'
        this.priceRangeFilter = new PriceRangeFilterComponent();
    }

    selectBrands(someLeter) {
        cy.get(this.featuredBrands)
            .contains('li', someLeter).then(el => {
                cy.wrap(el).find('[type="checkbox"]')
                    .check({ force: true })
                    .should('be.checked');
            })
    }

    applyPriceFilter(from, to) {
        this.priceRangeFilter.fillLowPriceField(from);
        this.priceRangeFilter.fillHighPriceField(to);
        this.priceRangeFilter.clickOnApplyButton();
    }


}

export default FilterBlock;