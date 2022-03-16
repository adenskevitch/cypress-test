// import HomePage from '../../support/amazon/pages/Home.js';

import HomePage from "../../support/Amazon/Pages/Home.js";

// const  HomePage = require('../../support/amazon/pages/Home');

const homePage = new HomePage()


describe('Fail login verification', () => {
        it('login test', () => {
            cy.visit('https://www.amazon.com/');
            // const homePage = new HomePage();

        })
})
