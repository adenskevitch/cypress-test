import AbstraUIObject from "./AbstractUIObject";

class ErrorEnableCookiesFrame extends AbstraUIObject {
    constructor() {
        super();
        this.goBackButton = '.amzn-btn';
        this.cookieErrorWraper = '#ap_error_page_cookieless_wrapper';
    };

    acceptCookiesAndTryAgain() {
        this.clickOnElement(this.goBackButton);
    };
};

export const errorEnableCookiesFrame = new ErrorEnableCookiesFrame();