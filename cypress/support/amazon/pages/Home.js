import Header from "../components/Header";
import NavigationFooter from "../components/NavigationFooter";
import AbstractPage from "./AbstractPage";

class HomePage extends AbstractPage {
    constructor() {
        super();
        this.url = '/';
        this.headerPanel = new Header();
        this.navigationFooter = new NavigationFooter();
    };

    getHeader() {
        return this.headerPanel;
    }

    goToSignInPage() {
        this.getHeader().clickOnAccountButton();
    }

    open() {
        return super.open(this.url);
    }

};

export const homePage = new HomePage();