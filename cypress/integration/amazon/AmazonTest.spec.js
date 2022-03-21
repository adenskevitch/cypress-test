/// <reference types = 'cypress'/>

import ErrorEnableCookesPage from '../../support/amazon/pages/ErrorEnableCookies';
import HomePage from '../../support/amazon/pages/Home';
import SearchResultPage from '../../support/amazon/pages/SearchResult';
import SignIn from '../../support/amazon/pages/SignIn';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
});

describe('Amazon tests', () => {

    const homePage = new HomePage();

    describe('Fail login verification', () => {

        const signInPage = new SignIn();
        const errorEnableCookesPage = new ErrorEnableCookesPage();

        it('login page should be opened', () => {
            cy.visit('/');

            homePage.getHeader()
                .clickOnAccountButton();
        });

        it('invalid name field should be input', () => {
            signInPage
                .identificationOnNameOrEmail('asdas@asfsaf.asd');
        });

        it('cookies should be enabled', () => {
            // if(errorEnableCookesPage.isGoBackButtonVisible())
            errorEnableCookesPage
                .clickOnGoBackButton()
                .clickContinue();
        });

        it('allert tet should be validate', () => {
            signInPage
                .allertContentVerify('We cannot find an account with that email address');
        });
    });

    describe.only('verification search any product', () => {

        it('page with search products should be opened', () => {
            cy.visit('/');
            homePage.getHeader().searchProductOnName('laptop');
        })

        it('Shoul include search line in product title', () => {

            const searchResultPage = new SearchResultPage();
            searchResultPage.productTitleValidation();
        });

    });

});