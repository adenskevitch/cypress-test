import cypress from "cypress";

class SigIn {
    constructor() {
        this.nameField = 'innav-link-accountList';
        this.continueButton = 'input#continue';
        this.allertContent = '.a-list-item';
    };

    fillNameOrEmail(inputData) {
        cy.get(this.nameField).type(inputData);
    };

    clickContinue() {
        cy.get(this.continueButton).click();
    };

    getAllertContent() {
        return cy.get(this.allertContent).invoke('text');
    };
};

export default HomePage;