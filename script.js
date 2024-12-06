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

    return { getBoard, placeToken, printBoard } // exposes the functon in the factory function to the global scope

}



function Cell() {
    let value = 0; // initializes the value of a cell

    const addToken = (player) => {// creates a arrow function that sets the value of the cell the same as the players value
        value = player;
    };

    const getValue = () => value; // arrow function to retrieve the value of cell

    return { // returns function within the factory function the global scope
        addToken,
        getValue
    }
}

function GameController( // factory function to control the game flow
    playerOneName = "Player One", // parameters used
    playerTwoName = "Player Two"
) {
    const board = Gameboard(); // object to run Gameboard factory function to initialise the gameboard

    const player = [ // object to hold information of players
        {
            name: playerOneName,
            token: 1
        },
        {
            name: playerTwoName,
            token: 2
        }
    ];

    let activePlayer = players[0] // tracks whose turn it is to play

    const switchPlayerTurn = () => { // function to switch players
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };
    const getActivePlayer = () => activePlayer; // retrieves the activePlayer

    const printNewRound = () => { // prints the most up to date board and logs the activePlayer to the console
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
    };

    const playRound = (column) => { // this function handles the process of taking a turn in the game
        console.log(
            `Placing ${getActivePlayer().name}'s token into column ${column}...`
        );
        board.placeToken(column, getActivePlayer().token); // utilises the placeToken function to place token on the board

        /*  This is where we would check for a winner and handle that logic,
        such as a win message. */

        switchPlayerTurn();
        printNewRound();
    }

    printNewRound() //calls the function, to print the board and let you know whose turn it is

    return { // this return object - makes key function available to the scope above - i.e. global
        playRound,
        getActivePlayer,
        getBoard: board.getBoard // allows external acces to the current state of the game board.
    };
}

function ScreeController() {
    const game = GameController();
    const playerTurnDiv = document.querySelector('.turn');
    const boardDiv = document.querySelector('.board');
}