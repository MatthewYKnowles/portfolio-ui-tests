import {PlayerSelectionPage} from "./playerSelection.page";

export class ProjectsPage {
    goToConnectFour() {
        cy.get('.connect-four').click({force:true});
        return new PlayerSelectionPage();
    }
}
