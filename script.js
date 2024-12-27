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

        console.warn("Cell is full.")
        return false;
    };

    const printBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()));
        console.log(boardWithCellValues);
    }

    return { getBoard, placeToken, printBoard }
}

 Gameboard();

function Cell() {
    let value = 0;

    const addToken = (player) => {
        if (value === 0) {
            value = player;
        };
    };

    const getValue = () => value;

    return {
        addToken,
        getValue
    };
};

function GameController(
    playerOneName = "Player One",
    playerTwoName = "Player Two"
 ) {
    const board = Gameboard();

    const players = [

        {
            name: playerOneName,
            token: 1
        },
        {
            name: playerTwoName,
            token: 2
        }
    ];

    let activePlayer = players[0]

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };
    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
    };

    const playRound = (column) => {
        console.log(
            `Placing ${getActivePlayer().name}'s token into cell ${cell}...`
        );
        board.placeToken(column, getActivePlayer().token);

        switchPlayerTurn();
        printNewRound();
    }

    printNewRound()

    return {
        playRound,
        getActivePlayer,
        getBoard: board.getBoard
    };
}