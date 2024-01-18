// Select the relevant elements from the page
const scoreCounter = document.querySelector('.score-counter');
const grid = document.querySelector('.grid');
const endGameScreen = document.querySelector('.end-game-screen');
const endGameText = document.querySelector('.end-game-text');
const playAgainButton= document.querySelector('.play-again');

// Initialise the variables needed for the game setup
const totalCells = 100;
const totalBombs = 10;
const maxScore = 90;
const bombsList = [];

let score = 0;

// Function to increment the score and display it
function updateScore() {
    score++;
    scoreCounter.innerText = score.toString().padStart(5, '0');

    if (score === maxScore) {
        endGame(true);
    }
}

// Function for when the game ends
function endGame(isVictory) {
    if (isVictory) {
        endGameText.innerHTML = 'YOU<br>WON';
        endGameScreen.classList.add('win');
    }
    revealAllBombs();
    endGameScreen.classList.remove('hidden');
};

// Function to reveal all bombs
function revealAllBombs() {
    const cells = document.querySelectorAll('.cell');

    for (let i = 1; i <= cells.length; i++) {
        const cell = cells[i - 1];

    if (bombsList.includes(i)) {
        cell.classList.add('cell-bomb');
    }}
};

playAgainButton.addEventListener('click', function () {
    window.location.reload();
});



for (let i = 1; i <= 100; i++) {
    // Create a cell
    const cell = document.createElement('div'); // cell = <div></div>
    cell.classList.add('cell'); // cell = <div class ="cell"></div>
    
    // Manage the "click" event for the cell
    cell.addEventListener('click', function () {
            // Don't do anything if it is already clicked
        if (cell.classList.contains('cell-clicked')) {
            return;
        }

        if (bombsList.includes(i)) {
            cell.classList.add('cell-bomb');
            endGame();
        } else {
        cell.classList.add('cell-clicked');
        updateScore();}
    });

    grid.appendChild(cell);
};

while (bombsList.length < totalBombs) {
    // Generate a random number
    const randomNumber = Math.floor(Math.random() * totalCells) + 1;
    
    // Add the number to the list if not already included
    if (!bombsList.includes(randomNumber)){
        bombsList.push(randomNumber)
    }

};
