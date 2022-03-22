class AbstraUIObject {

    clickOnElement(webElement) {
        return cy.get(webElement).click();
    }

    inputTextToElement(text, webElement) {
        return cy.get(webElement).type(text, { force: true });
    }
}

export default AbstraUIObject;