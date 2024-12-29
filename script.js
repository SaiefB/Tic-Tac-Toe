function Gameboard() {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => {
        console.log(`Current Board: ${board}`)
        return board;
    };

    const updateCell = (index, value) => {
        
        if (board[index] === "") {
            board[index] = value; 
            console.log(`Cell ${index} updated to ${value}`)
        } else {
            console.log(`Cell ${index} is already occupied`)
        }
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

    const checkWin = () => {
        let roundWon = false;
        let currentBoard = gameBoard.getBoard();

        for (let i = 0; i < winConditions.length; i++) {
            const winningCondition = winConditions[i];
            const cellA = currentBoard[winningCondition[0]]
            console.log(cellA)
            const cellB = currentBoard[winningCondition[1]]
            const cellC = currentBoard[winningCondition[2]]


            if (cellA === "" || cellB === "" || cellC === "") {
                continue;
            }

            if (cellA === cellB && cellB === cellC) {
                roundWon = true;
                break;
            };
        }

        if (roundWon) {
            console.log(`Player ${currentPlayer} Wins!`)
            gameRunning = false;
        } else if (!currentBoard.includes("")) {
            console.log("Draw!");
            gameRunning = false;
        } else {
            changePlayer();
        }
    }





    return { getPlayer, isGameRunning, changePlayer, checkWin }

};





function ScreenController() {
    const cells = document.querySelector(".cell");
    const statusText = document.querySelector("#statusText");
    const restartButton = document.querySelector("#restartBtn");


};

// for testing purposes:
const game = GameController();
const gameBoard = Gameboard();

// Test updating cells and checking for wins:

/* // Test for draw
gameBoard.updateCell(4, "X")
game.checkWin();
gameBoard.updateCell(2, "O")
game.checkWin();
gameBoard.updateCell(5, "X")
game.checkWin();
gameBoard.updateCell(3, "O")
game.checkWin();
gameBoard.updateCell(7, "X")
game.checkWin();
gameBoard.updateCell(1, "O")
game.checkWin();
gameBoard.updateCell(0, "X")
game.checkWin();
gameBoard.updateCell(8, "O")
game.checkWin();
gameBoard.updateCell(6, "X")
game.checkWin();
 */

// Test for win
gameBoard.updateCell(0, "X")
game.checkWin();
gameBoard.updateCell(3, "O")
game.checkWin();
gameBoard.updateCell(1, "X")
game.checkWin();
gameBoard.updateCell(4, "O")
game.checkWin();
gameBoard.updateCell(2, "X")
game.checkWin();
console.log("/////////////////////////////////////////////////////")
// Test for input after win
gameBoard.updateCell(8, "O")
game.checkWin();
