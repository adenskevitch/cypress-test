class SignIn {
    constructor() {
        this.nameField = '#ap_email';
        this.continueButton = 'input#continue';
        this.allertContent = '.a-list-item';
    };

    fillNameOrEmail(inputData) {
        cy.get(this.nameField).type(inputData);
        return this;
    };

    clickContinue() {
        cy.get(this.continueButton).click();
    };

    allertContentVerify() {
        cy.get(this.allertContent)
            .should('include.text', 'We cannot find an account with that email address');
    };

};

export default SignIn;