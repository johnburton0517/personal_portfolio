const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', cellClicked);
});

// initialize current player
let currentPlayer = 'X';

function cellClicked(e) {

    // if gamemode has been selected
    if (gameModeSelected === true) {

        if (e.target.textContent !== ' ') {
            alert('This cell is already filled');
        }

        else if (hasWinner === false) {
            // Fill the cell with the current player X or O
            e.target.textContent = currentPlayer;

            // Change the current player
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

            // Change the current player on game info
            document.getElementById('current-player').textContent = "Current Player: " + currentPlayer;

            // Check if the game is over
            checkWinner(false);

            // if single player game
            if (singlePlayer === true && currentPlayer === 'O' && hasWinner === false) {
                // computer plays
                computerPlay();
            }
        }
    }
}
  
var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

var hasWinner = false;

// check if there is a winner
function checkWinner(checkingMove) {
    // winner if there is a match in the winning combinations
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent && cells[a].textContent !== ' ') {
            hasWinner = true;
            // animateWinningCells();
            if (checkingMove === false) {
                animateWinningCells(a, b, c);
            }

            // change current-player to "Player X" or "Player O won"
            document.getElementById('current-player').textContent = `Player ${cells[a].textContent} won!`;
            break;
        }

        // if there is no winner
        else if (cells[0].textContent !== ' ' && cells[1].textContent !== ' ' && cells[2].textContent !== ' ' && cells[3].textContent !== ' ' && cells[4].textContent !== ' ' && cells[5].textContent !== ' ' && cells[6].textContent !== ' ' && cells[7].textContent !== ' ' && cells[8].textContent !== ' ') {
            hasWinner = true;
            document.getElementById('current-player').textContent = `It's a tie!`;
            break;
        }

        else {
            hasWinner = false;
        }
    }
}

// animate on the winning cells
function animateWinningCells(a, b, c) {
    let i = 0;
    const intervalId = setInterval(() => {
        if (i >= 3) {
        clearInterval(intervalId);
        cells[a].classList.add('green');
        cells[b].classList.add('green');
        cells[c].classList.add('green');
        return;
        }
        cells[a + (b - a) * i].classList.add('green');
        i++;
    }, 500);
  }
  


// Reset the game
const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {
    for (const cell of cells) {
        cell.textContent = ' ';
        cell.classList.remove('green');
    }

    // Reset other game state variables
    currentPlayer = 'X';
    document.getElementById('current-player').textContent = "Current Player: " + 'X';
    hasWinner = false;

    // promt user to select gamemode
    gameModeSelected = false;
    document.getElementById("popup").style.display = "block";
});

// cant click on cells if gamemode has not been selected
let gameModeSelected = false;

// show popup when the page loads
window.onload = function () {
    document.getElementById("popup").style.display = "block";
}

// hide popup when the user clicks on the button
function hidePopup() {
    document.getElementById("popup").style.display = "none";
    gameModeSelected = true;
}

// if single player button is clicked
function singlePlayerButton() {
    hidePopup();
    singlePlayer = true;
}

// if two player button is clicked
function twoPlayerButton() {
    hidePopup();
    singlePlayer = false;
}

// computer plays best move
function computerPlay () {
    setTimeout(() => {
        if (singlePlayer === true) {
            // look at the board and find what moves can be made
            let availableMoves = [];
            for (let i = 0; i < cells.length; i++) {
                if (cells[i].textContent === ' ') {
                    availableMoves.push(i);
                }
            }

            // console log the available moves
            // console.log(availableMoves);

            // look at the available moves and find if there is a winning move
            // if there is a winning move, make that move
            for (let i = 0; i < availableMoves.length; i++) {
                let move = availableMoves[i];
                cells[move].textContent = currentPlayer;
                checkingMove = true;
                checkWinner(checkingMove);
                if (hasWinner === true) {
                    cells[move].textContent = currentPlayer;
                    currentPlayer = 'X'
                    document.getElementById('current-player').textContent = "Current Player: " + currentPlayer;
                    checkWinner(false);
                    return;
                }
                cells[move].textContent = ' ';
            }
            
            // look at the available moves and find if there is a blocking move
            // if there is a blocking move, make that move
            for (let i = 0; i < availableMoves.length; i++) {
                let move = availableMoves[i];
                cells[move].textContent = 'X';
                checkingMove = true;
                checkWinner(checkingMove);
                if (hasWinner === true) {
                    cells[move].textContent = currentPlayer;
                    currentPlayer = 'X'
                    document.getElementById('current-player').textContent = "Current Player: " + currentPlayer;
                    checkWinner(false);
                    return;
                }
                cells[move].textContent = ' ';
            }

            // if there is no winning move or blocking move, make a random move
            let randomCell = Math.floor(Math.random() * availableMoves.length);
            cells[availableMoves[randomCell]].textContent = currentPlayer;
            currentPlayer = 'X'
            document.getElementById('current-player').textContent = "Current Player: " + currentPlayer;
            checkWinner(false);
        }
    }, 500);
}

