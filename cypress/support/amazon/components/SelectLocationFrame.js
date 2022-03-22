import AbstraUIObject from "./AbstractUIObject";

class SelectLocationFrame extends AbstraUIObject {
    constructor() {
        super();
        this.dropDownButton = '.a-popover-wrapper [data-action="a-dropdown-button"]';
        this.doneButton = '.a-button-text[type="button"]';
        this.countryList = '.a-list-link';
    }

    selectCountry(countryName) {
        this.clickOnElement(this.dropDownButton)
            .then(() => {
                cy.get(this.countryList).contains(countryName).click()
            })
            .then(() => {
                this.clickOnElement(this.doneButton);
            })
            .then(() => cy.wait(2000));
    }
}

export default SelectLocationFrame;