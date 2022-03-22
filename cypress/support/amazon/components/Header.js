import AbstraUIObject from "./AbstractUIObject";
import SelectLocationFrame from "./SelectLocationFrame";

class Header extends AbstraUIObject {
    constructor() {
        super();
        this.accountButton = '#nav-link-accountList';
        this.searchField = '#twotabsearchtextbox';
        this.searchButton = 'input#nav-search-submit-button';
        this.accountButton = '#nav-link-accountList';
        this.locationGlobalLink = '#nav-global-location-popover-link';
        this.selectLocationFrame = new SelectLocationFrame();
    }

    searchProductOnName(productName) {
        this.inputTextToElement(productName, this.searchField).then(() => {
            this.clickOnElement(this.searchButton);
        });
    }

    clickOnAccountButton() {
        this.clickOnElement(this.accountButton);
    }

    selectDeliverCountry(countryName) {
        this.clickOnElement(this.locationGlobalLink);
        this.selectLocationFrame.selectCountry(countryName);
    }
}

export default Header;