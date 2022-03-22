import AbstraUIObject from "./AbstractUIObject";

class NavigationFooter extends AbstraUIObject {
    constructor() {
        super();
        this.backToTopButton = '.navFooterBackToTop';
        this.helpLink = '.navFooterVerticalRow .navFooterLinkCol:last-child:last-child ul:last-child :last-child :last-child';
    }

    clickOnHelpLink() {
        this.clickOnElement(this.helpLink);
    }
}

export default NavigationFooter;