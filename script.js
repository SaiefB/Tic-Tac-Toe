function Gameboard() {
    let board = ["", "", "X", "", "", "", "", "", ""];

    const getBoard = () => {
        console.log(`Current Board: ${board}`)
        return board;
    };

    const updateCell = (index, value) => {
        console.log(`Cell: ${board[index]}`)
        return board[index] = value;
    }

    const resetBoard = () => {
        return board = ["", "", "", "", "", "", "", "", ""];
    };

    return { getBoard, updateCell, resetBoard};
};



function GameController() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8]
    ]

    let currentPlayer = "X";
    console.log("currentPlayer: " + currentPlayer)

    let gameRunning = true;
    console.log("isGameRunning: " + gameRunning)

    const getPlayer = () => {
        console.log(`Current Player: ${currentPlayer}`)
        return currentPlayer;
    }

    const isGameRunning = () => {
        console.log(`Is the game Running: ${gameRunning}`)
        return gameRunning;
    }

    const changePlayer = () => {
        if (currentPlayer === "X") {
            console.log(`Player changed to: O`)
           return currentPlayer = "O";
        } else {
            console.log(`Player changed to: X`)
            return currentPlayer = "X";
        };
    };

    const updateCell = () => {

    }

    return { getPlayer, isGameRunning, changePlayer, updateCell }

};





function ScreenController() {
    const cells = document.querySelector(".cell");
    const statusText = document.querySelector("#statusText");
    const restartButton = document.querySelector("#restartBtn");


};

// for testing purposes:
const game = GameController();
const gameBoard = Gameboard();