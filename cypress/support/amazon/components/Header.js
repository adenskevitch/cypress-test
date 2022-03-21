import AbstraUIObject from "./AbstractUIObject";

class Header extends AbstraUIObject {
    constructor() {
        super();
        this.accountButton = '#nav-link-accountList';
        this.searchField = '.nav-search-field';
        this.searchButton = '#nav-search-submit-button';
        this.accountButton = '#nav-link-accountList';
    }

    searchProductOnName(productName) {
        this.inputTextToElement(productName, this.searchField);
        this.clickOnElement(this.searchButton);
    }

    clickOnAccountButton() {
        this.clickOnElement(this.accountButton);
    }
}

export default Header;