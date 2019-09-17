import {ConnectFourPage} from "./connectFour.page";

export class PlayerSelectionPage {
    setPlayerOne(name) {
        cy.get('[data-test=player-one]').type(name);
    }

    setPlayerTwo(name) {
        cy.get('[data-test=player-two]').type(name);
    }

    startGame() {
        cy.get('[data-test=start-game]').click();
        return new ConnectFourPage();
    }
}
