class AbstraUIObject {

    clickOnElement(webElement) {
        cy.get(webElement).should('be.visible').click();
    }

    inputTextToElement(text, webElement) {
        cy.get(webElement).type(text);
    }
}

export default AbstraUIObject;