import {PlayerSelectionPage} from "./playerSelection.page";

export class ProjectsPage {
    goToConnectFour() {
        cy.get('[data-test=connect-four]').click({force:true});
        return new PlayerSelectionPage();
    }
}
