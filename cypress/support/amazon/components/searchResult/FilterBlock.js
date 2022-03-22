import AbstraUIObject from "../AbstractUIObject";
import PriceRangeFilterComponent from "./PriceRangeFilterComponent";

class FilterBlock extends AbstraUIObject {
    constructor() {
        super();
        this.priceRangeFilter = new PriceRangeFilterComponent();
    }

    applyPriceFilter(from, to) {
        this.priceRangeFilter.fillLowPriceField(from);
        this.priceRangeFilter.fillHighPriceField(to);
        this.priceRangeFilter.clickOnApplyButton();
    }


}

export default FilterBlock;