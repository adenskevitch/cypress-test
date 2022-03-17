/// <reference types = 'cypress'/>

import ErrorEnableCookesPage from '../../support/amazon/pages/ErrorEnableCookies';
import HomePage from '../../support/amazon/pages/Home';
import SignIn from '../../support/amazon/pages/SignIn';

describe('Fail login verification', () => {

    const homePage = new HomePage();
    const signInPage = new SignIn();
    const errorEnableCookesPage = new ErrorEnableCookesPage();

    it('login page should be opened', () => {
        cy.visit('https://www.amazon.com/');
        homePage
            .clickOnAccountButton();
    });

    it('name field should be filled', () => {
        signInPage
            .fillNameOrEmail('assasdsadsadasdd@asd.asd')
            .clickContinue();
    });

    it('cookies should be enabled', () => {
        // if(errorEnableCookesPage.isGoBackButtonVisible())
        errorEnableCookesPage
            .clickOnGoBackButton()
            .clickContinue();
    });

    it('allert tet should be validate', () => {
        signInPage
            .allertContentVerify();
    });
});
