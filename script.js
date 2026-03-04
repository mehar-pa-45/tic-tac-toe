let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

function play(cell, index) {

    if (board[index] !== "" || gameOver) {
        return;
    }

    board[index] = currentPlayer;
    cell.innerText = currentPlayer;

    if (checkWinner()) {
        document.getElementById("status").innerText =
            "Player " + currentPlayer + " Wins!";
        gameOver = true;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById("status").innerText =
        "Player " + currentPlayer + " Turn";
}

function checkWinner() {
    const winPatterns = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    return winPatterns.some(pattern => {
        return pattern.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;
    document.getElementById("status").innerText =
        "Player X Turn";

    document.querySelectorAll(".cell").forEach(cell => {
        cell.innerText = "";
    });
}
