import cypress from "cypress";

class HomePage {
    constructor() {
        this.accountButton = '#nav-link-accountList';
    }

    clickOnAccountButton() {
        cy.get(this.accountButton).click();
    };
};

export default HomePage;