import AbstraUIObject from "../AbstractUIObject";

class PriceRangeFilterComponent extends AbstraUIObject {
    constructor() {
        super();
        this.lowPriceField = '#low-price';
        this.highPriceField = '#high-price';
        this.applyFilterButton = '#priceRefinements form .a-button-input';
    }

    fillLowPriceField(price) {
        this.inputTextToElement(price, this.lowPriceField);
    }

    fillHighPriceField(price) {
        this.inputTextToElement(price, this.highPriceField);
    }

    clickOnApplyButton() {
        this.clickOnElement(this.applyFilterButton);
    }
}

export default PriceRangeFilterComponent;