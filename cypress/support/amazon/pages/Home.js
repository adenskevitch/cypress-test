import Header from "../components/Header";
import NavigationFooter from "../components/NavigationFooter";
import AbstractPage from "./AbstractPage";

class HomePage extends AbstractPage {
    constructor() {
        super();
        this.headerPanel = new Header();
        this.navigationFooter = new NavigationFooter();
    };

    

    getHeader() {
        return this.headerPanel;
    }

};

export default HomePage;