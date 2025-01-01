function Gameboard(gameController) {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => {
        console.log(`Current Board: ${board}`);
        return board;
    };

    const updateCell = (index, value) => {
        if (!gameController.isGameRunning()) {
            console.log("Game over. Press Restart to play again.");
            return false;
        }
        if (board[index] === "") {
            board[index] = value;
            console.log(`Cell ${index} updated to ${value}`);
            return true;
        } else {
            console.log(`Cell ${index} is already occupied.`);
            return false;
        }
    };

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
        console.log("Board reset.");
    };

    return { getBoard, updateCell, resetBoard };
}

function GameController() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    let currentPlayer = "X";
    let gameRunning = true;

    const getPlayer = () => currentPlayer;

    const isGameRunning = () => gameRunning;

    const changePlayer = () => {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        console.log(`Player changed to: ${currentPlayer}`);
    };

    const checkWin = (gameBoard) => {
        let roundWon = false;
        const currentBoard = gameBoard.getBoard();

        for (const condition of winConditions) {
            const [a, b, c] = condition;
            if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            console.log(`Player ${currentPlayer} Wins!`);
            gameRunning = false;
            return `${currentPlayer} Wins!`;
        } else if (!currentBoard.includes("")) {
            console.log("Draw!");
            gameRunning = false;
            return "Draw!";
        } else {
            changePlayer();
        }
        return null;
    };

    const resetGame = () => {
        gameRunning = true;
        currentPlayer = "X";
        console.log("Game reset.");
    };

    return { getPlayer, isGameRunning, changePlayer, checkWin, resetGame };
}

function ScreenController() {
    const gameController = GameController();
    const gameBoard = Gameboard(gameController);
    const cells = document.querySelectorAll(".cell");
    const statusText = document.querySelector("#statusText");
    const restartButton = document.querySelector("#restartBtn");

    const updateStatusText = (message) => {
        statusText.textContent = message;
    };

    const handleCellClick = (event) => {
        const cell = event.target;
        const index = cell.getAttribute("data-index");

        if (!index || !gameController.isGameRunning()) return;

        const currentPlayer = gameController.getPlayer();
        if (gameBoard.updateCell(index, currentPlayer)) {
            cell.textContent = currentPlayer;
            const result = gameController.checkWin(gameBoard);

            if (result) {
                updateStatusText(result);
            } else {
                updateStatusText(`Player ${gameController.getPlayer()}'s turn`);
            }
        }
    };

    const handleRestart = () => {
        gameBoard.resetBoard();
        gameController.resetGame();
        cells.forEach((cell) => (cell.textContent = ""));
        updateStatusText(`Player X's turn`);
    };

    // Add event listeners
    cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
    restartButton.addEventListener("click", handleRestart);

    // Initialize game state
    updateStatusText("Player X's turn");
}

// Initialize the game
ScreenController();
