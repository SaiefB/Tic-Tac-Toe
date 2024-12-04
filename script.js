function Gameboard() { // Factory function to hold private functions
    const rows = 3;
    const columns = 3;
    const board = []; // board initialized

    // For loop to create the board. other loop make the rows and inner loop makes the arrays within the rows
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    }

    const getBoard = () => board; // function to retrieve board

    const placeToken = (column, player) => { // places a token in the selected field
        const availableCells = board.filter((row) => row[column].getValue() === 0).map(row => row[column]);

        if (!availableCells.length) return; // if cells are all taken then return
    };

    const printBoard = () => { // prints the board
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues);
    };

    return { getBoard, dropToken, printBoard } // exposes the functon in the factory function to the global scope

}



function Cell() {
    let value = 0;

    const addToken = (player) => {
        value = player;
    };
}
