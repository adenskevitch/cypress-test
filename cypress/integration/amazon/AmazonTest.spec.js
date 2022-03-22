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

    describe('verification search any product', () => {

        it('page with search products should be opened', () => {
            cy.visit('/');
            // cy.get('.glow-toaster-content .glow-toaster-button-dismiss').click()
            homePage.getHeader().selectDeliverCountry('United Kingdom');
            homePage.getHeader().searchProductOnName('iphone');
            cy.wait(2000)
        });

        describe('Shoul include search line in product title', () => {
            it('separate validation', () => {
                const searchResultPage = new SearchResultPage();
                searchResultPage.productTitleValidation();
            });
        });

    });

    describe('Filter test', () => {
        const searchResultPage = new SearchResultPage();

        before(() => {
            cy.visit('https://www.amazon.com/s?k=laptop&ref=nb_sb_noss_1');
        });

        it('Products title should contain "laptop" line', () => {
            searchResultPage.productTitleValidation('laptop');
        });

        it('Price range filter should be apply', () => {
            searchResultPage.getFilterBlock().applyPriceFilter(0, 500);
        });

        it('Products price should be less than 500', () => {
            searchResultPage.productPriceValidation(500);
        });
    });

    describe.only('Waits implementation', () => {
        const searchResultPage = new SearchResultPage();

        before(() => {
            cy.visit('/');
            homePage.getHeader().searchProductOnName('laptop');


        });

        it('Price range filter should be apply', () => {
            searchResultPage.getFilterBlock().applyPriceFilter(0, 500);
        });

        it('Brand should be selected', { retries: { openMode: 5 } }, () => {
            searchResultPage.getFilterBlock().selectBrands('ASUS');
        });

        it('Loading indicator should be hiden',
            { retries: { openMode: 5 }, defaultCommandTimeout: 5000 }, () => {
                searchResultPage.waitUntilLoadingCircleHides();
            });

    });

});