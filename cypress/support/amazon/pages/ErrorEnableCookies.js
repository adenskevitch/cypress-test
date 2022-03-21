import AbstractPage from "./AbstractPage";
import SignIn from "./SignIn";

class ErrorEnableCookesPage extends AbstractPage {
    constructor() {
        super();
        this.goBackButton = '.amzn-btn';
    };

    clickOnGoBackButton() {
        this.clickOnElement(this.goBackButton);
        return new SignIn();
    };

};

export default ErrorEnableCookesPage;