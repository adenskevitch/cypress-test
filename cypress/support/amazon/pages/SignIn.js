import { errorEnableCookiesFrame } from "../components/ErrorCookiesFrame";
import AbstractPage from "./AbstractPage";

class SignIn extends AbstractPage {
    constructor() {
        super();
        this.signInForm = 'form[name="signIn"]';
        this.nameField = '#ap_email';
        this.continueButton = 'input#continue';
        this.errorMessageBox = '#auth-error-message-box';
        this.allertContent = '.a-list-item';
        this.errorCookiesFrame = errorEnableCookiesFrame;
    }

    getErrorCookiesFrame() {
        return this.errorCookiesFrame;
    }

    isSignInPageOpened() {
        cy.get(this.signInForm).should('be.visible');
    }

    identificationOnNameOrEmail(inputData) {
        this.inputTextToElement(inputData, this.nameField);
        this.clickOnElement(this.continueButton);
    }

    iputInvalidEmail(invalidEmail) {
        this.inputTextToElement(invalidEmail, this.nameField);
        this.clickOnElement(this.continueButton);
        return this;
    }

    errorMessageValidation(expectText) {
        cy.get(this.errorMessageBox).should('be.visible')
            .then(box => {
                cy.wrap(box).find('span').should('contain.text', expectText);
            });
    }

    clickContinue() {
        cy.get(this.continueButton).click();
    }

    allertContentVerify(textForValidate) {
        cy.get(this.allertContent)
            .should('include.text', textForValidate);
    }

}

export const signInPage = new SignIn();