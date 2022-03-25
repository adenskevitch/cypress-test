/// <reference types = 'cypress'/>

import { homePage } from '../../support/amazon/pages/Home';
import { searchResultPage } from '../../support/amazon/pages/SearchResult';
import { signInPage } from '../../support/amazon/pages/SignIn';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
});

describe('Amazon tests', () => {

    beforeEach(() => {
        cy.fixture('property').as('property');
    });

    describe('Fail login verification', () => {

        before(() => {
            homePage.open();
        });

        it('SignIn page should be opened', () => {
            homePage.goToSignInPage();
            signInPage.isSignInPageOpened();
        });

        it('Invalid user data should be input', function () {
            signInPage.iputInvalidEmail(this.property.email);
        });

        it('Cookies should be enabled', () => {
            signInPage.getErrorCookiesFrame()
                .acceptCookiesAndTryAgain();
            signInPage.clickContinue();
        });

        it('Error message should be validate', function () {
            signInPage.errorMessageValidation(this.property.signInErrorMessage);
        });

    });

    describe('verification search any product', () => {

        before(() => {
            homePage.open();
        });

        it('Deliver country should be set', function () {
            homePage.getHeader().selectDeliverCountry(this.property.deliverCountry);
            homePage.getHeader().deliverCountryVerification(this.property.deliverCountry);
        });

        it('Page with search products should be opened', function () {
            homePage.getHeader().searchProductOnName(this.property.searchProduct);
        });

        describe('Shoul include search line in product title', () => {
            it('separate validation', function () {
                searchResultPage.productTitleValidation(this.property.searchProduct);
            });
        });

    });

    describe.only('Filter test', () => {

        before(() => {
            homePage.open()
        });

        it('Page with search products should be opened', function () {
            homePage.getHeader().searchProductOnName(this.property.searchProduct);
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

    describe('Waits implementation', () => {

        before(() => {
            homePage.open()
            homePage.getHeader().searchProductOnName('laptop');
        });

        it('Price range filter should be apply', () => {
            searchResultPage.getFilterBlock().applyPriceFilter(0, 500);
        });

        it('Brand should be selected', { retries: { openMode: 5 } }, () => {
            searchResultPage.getFilterBlock().selectBrands('ASUS');
        });

        it('Loading indicator should be hiden', {
            retries: { openMode: 5 },
            defaultCommandTimeout: 5000
        }, () => {
            searchResultPage.waitUntilLoadingCircleHides();
        });

    });

    describe('Interceptions', () => {

        beforeEach(() => {
            homePage.open()
        })

        it('Request should include valid email', () => {

            cy.intercept('POST', '/ap/*', requ => {
                // expect(requ.body).to.include('as1q1q1q1qqd%40asd.asd');
                console.log(requ);
            }).as('req');

            homePage.getHeader().clickOnAccountButton();
            signInPage.inputTextToElement('as1q1q1q1qqd@asd.asd', signInPage.nameField);
            signInPage.clickContinue();

            cy.wait('@req').then(inter => {
                console.log(inter.response);
                expect(inter.request.body).to.include('as1q1q1q1qqd%40asd.asd');
            })

        });

        it('Request should include valid product name', () => {
            cy.intercept('/*', requ => {
                console.log(requ);
            }).as('req');

            // homePage.getHeader().searchProductOnName('laptop');
            homePage.getHeader().inputTextToElement('laptop', homePage.getHeader().searchField);
            homePage.getHeader().clickOnElement(homePage.getHeader().searchButton);

            cy.wait('@req').then(inter => {
                console.log(inter.response);

                expect(inter.request).to.deep.include('laptop');
            });

        });

    })

});