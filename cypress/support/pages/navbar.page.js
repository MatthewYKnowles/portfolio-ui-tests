import {ProjectsPage} from "./projectsPage";

export class NavbarPage {
    goToProjects() {
        cy.contains('Projects').click();
        return new ProjectsPage();
    }
}
