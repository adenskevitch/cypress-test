import AbstractPage from "./AbstractPage";

class SignIn extends AbstractPage {
    constructor() {
        super();
        this.nameField = '#ap_email';
        this.continueButton = 'input#continue';
        this.allertContent = '.a-list-item';
    };

    identificationOnNameOrEmail(inputData) {
        this.inputTextToElement(inputData, this.nameField);
        this.clickOnElement(this.continueButton);
        // cy.get(this.nameField).type(inputData);
        // return this;
    };

    clickContinue() {
        cy.get(this.continueButton).click();
    };

    allertContentVerify(textForValidate) {
        cy.get(this.allertContent)
            .should('include.text', textForValidate);
    };

};

export default SignIn;