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

    const getBoard = () => board;

    const placeToken = (cell, player) => {
        const availableCell = 
    }
 }

 Gameboard();

 function Cell() {

 }