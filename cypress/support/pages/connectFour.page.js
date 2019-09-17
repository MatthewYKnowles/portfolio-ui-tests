export class ConnectFourPage {
    dropPieceInColumn(columnNumber) {
        cy.get('canvas').then((canvas)=> {
            const columnWidth = canvas.width() / 7;
            cy.get('canvas').click(columnNumber * columnWidth - (columnWidth / 2), 50);
        });
    }

    getVictoryMessage() {
        return cy.get('h1');
    }

    getColumnWarning() {
        return cy.get('[data-test=column-warning]');
    }

    getGameBoard() {
        return cy.get('canvas');
    }

    getRecord() {
        return cy.get('#record');
    }

    startNewGame() {
        cy.get('.container > .btn').click();
    }
}
