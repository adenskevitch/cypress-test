import AbstraUIObject from "../components/AbstractUIObject";

class AbstractPage extends AbstraUIObject {

    open(path) {
        return cy.visit(path);
    }

};

export default AbstractPage;