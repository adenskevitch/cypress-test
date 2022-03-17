import SignIn from "./SignIn";

class ErrorEnableCookesPage {
    constructor() {
        this.goBackButton = '.amzn-btn';
    };

    clickOnGoBackButton() {
        cy.get(this.goBackButton).should('be.visible');

        cy.get(this.goBackButton).click();
        return new SignIn();
    };

    // isGoBackButtonVisible(){
    //     cy.get(this.goBackButton).should('be.visible');
    // }
};

export default ErrorEnableCookesPage;