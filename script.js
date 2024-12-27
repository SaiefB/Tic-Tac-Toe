 function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = []; // board = [[], [], []]
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell()); // board = [[Cell, Cell, Cell], [Cell, Cell, Cell], [Cell, Cell, Cell]];
        }
    }
    console.log(board); // For Debugging

    const getBoard = () => board; // function to retrieve board

    const placeToken = (inputCell, player) => { // cell validation
        if (inputCell < 0 || inputCell > 3) { // if cell less than 0 or more than 3 then invalid cell
            console.log("Invalid Cell Selected!");
            return false;
        }

        for (let i = 0; i < rows; i++) { // iterates through all three rows
            for (let j = 0; j < columns; j++) { // iterates through all three cells within each row
                const cell = board[i][j]; // assigns each cell to cell variable
                if (cell.getValue() === 0) {
                    cell.addToken(player);
                    return true;
                };
            }
        }
    };
 }

 Gameboard();

 function Cell() {

    getValue() {
        
    };

    return {
        getValue
    }
 }