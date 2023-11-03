let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let gameOver = false;

function makeMove(index) {
    if (!gameOver && board[index] === '') {
        board[index] = currentPlayer;
        document.getElementById('game-board').children[index].textContent = currentPlayer;
        if (checkWin()) {
            gameOverMessage(`${currentPlayer} wins!`);
        } else if (board.every(cell => cell !== '')) {
            gameOverMessage("It's a draw!");
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function gameOverMessage(message) {
    document.getElementById('result-message').textContent = message;
    document.getElementById('overlay').style.display = 'flex';
}

function newGame() {
    document.getElementById('overlay').style.display = 'none';
    resetGame();
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    document.getElementById('game-board').childNodes.forEach(cell => cell.textContent = '');
    document.getElementById('message').textContent = '';
}

resetGame();