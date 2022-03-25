import { signInPage } from "../pages/SignIn";
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
        return signInPage
    }

    selectDeliverCountry(countryName) {
        this.clickOnElement(this.locationGlobalLink);
        cy.wait(2000)
        this.selectLocationFrame.selectCountry(countryName);
    }

    deliverCountryVerification(deliverCountry) {
        cy.get(this.locationGlobalLink)
            .find('#glow-ingress-line2')
            .should('contain.text', deliverCountry);
    }
}

export default Header;