import {NavbarPage} from "../support/pages/navbar.page";

describe("Connect Four", ()=> {
    let playerOneName;
    let playerTwoName;
    let navbarPage;

    beforeEach(()=> {
        navbarPage = new NavbarPage();
        let now = Date.now();
        playerOneName = `p1-${now}`;
        playerTwoName = `p2-${now}`;
        cy.visit("/");
    });

    it('should display winning players name', ()=> {
        let projectsPage = navbarPage.goToProjects();
        let playerSelectionPage = projectsPage.goToConnectFour();
        playerSelectionPage.setPlayerOne(playerOneName);
        playerSelectionPage.setPlayerTwo(playerTwoName);
        let connectFourPage = playerSelectionPage.startGame();
        connectFourPage.dropPieceInColumn(4);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(4);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(4);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(4);
        connectFourPage.getVictoryMessage().contains(`${playerOneName} wins!!`)
    });

    it('should display column full', ()=> {
        let projectsPage = navbarPage.goToProjects();
        let playerSelectionPage = projectsPage.goToConnectFour();
        playerSelectionPage.setPlayerOne(playerOneName);
        playerSelectionPage.setPlayerTwo(playerTwoName);
        let connectFourPage = playerSelectionPage.startGame();
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.getColumnWarning().should('not.be.visible');
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.getColumnWarning().should('be.visible');
    });

    it('should keep the same color for board and pieces', ()=> {
        cy.viewport(1280, 720);
        let projectsPage = navbarPage.goToProjects();
        let playerSelectionPage = projectsPage.goToConnectFour();
        playerSelectionPage.setPlayerOne(playerOneName);
        playerSelectionPage.setPlayerTwo(playerTwoName);
        let connectFourPage = playerSelectionPage.startGame();
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(4);
        connectFourPage.dropPieceInColumn(5);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(5);
        connectFourPage.getGameBoard().matchImageSnapshot();
    });

    it('should keep a record of victories', ()=> {
        let projectsPage = navbarPage.goToProjects();
        let playerSelectionPage = projectsPage.goToConnectFour();
        playerSelectionPage.setPlayerOne(playerOneName);
        playerSelectionPage.setPlayerTwo(playerTwoName);
        let connectFourPage = playerSelectionPage.startGame();
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(4);
        connectFourPage.dropPieceInColumn(4);
        connectFourPage.dropPieceInColumn(5);
        connectFourPage.dropPieceInColumn(5);
        connectFourPage.dropPieceInColumn(6);
        connectFourPage.getRecord().contains(`${playerOneName} vs ${playerTwoName}: 1-0-0`);
        connectFourPage.startNewGame();
        connectFourPage.dropPieceInColumn(1);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(3);
        connectFourPage.dropPieceInColumn(4);
        connectFourPage.dropPieceInColumn(4);
        connectFourPage.dropPieceInColumn(5);
        connectFourPage.dropPieceInColumn(5);
        connectFourPage.dropPieceInColumn(6);
        connectFourPage.getRecord().contains(`${playerOneName} vs ${playerTwoName}: 1-1-0`);
    });
});
