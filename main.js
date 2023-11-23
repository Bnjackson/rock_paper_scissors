'use strict';

const rockChoice = document.getElementById('rock-button');
const paperChoice = document.getElementById('paper-button');
const scissorsChoice = document.getElementById('scissors-button');

const usersImage = document.getElementById('users-image');
const computersImage = document.getElementById('computers-image');

const usersScoreElement = document.getElementById('players-score');
const computersScoreElement = document.getElementById('computers-score');

const gameboardTitle = document.getElementById('gameboard-title');
const gameboardMessage = document.getElementById('gameboard-message');

const mainSection = document.getElementById('main-content');
const endScreen = document.getElementById('end-screen');
const endScreenMessage = document.getElementById('end-screen-message');
const playAgainButton = document.getElementById('play-again-button');

rockChoice.addEventListener('click', () => {
    game('rock');
});

paperChoice.addEventListener('click', () => {
    game('paper');
});

scissorsChoice.addEventListener('click', () => {
    game('scissors');
});

playAgainButton.addEventListener('click', () => {
    playAgain();
});

let playerScore = 0;
let computerScore = 0;

function game(userChoice) {
    const computerChoice = getComputerChoice();
    const roundWinner = playRound(userChoice, computerChoice);
    updateGameboard(userChoice, computerChoice, roundWinner);
    if (checkForWinner()) {
        endGame();
    }
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(userChoice, computerChoice) {
    let roundWinner; 
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        roundWinner = 'player';
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        roundWinner = 'player';
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        roundWinner = 'player'
    } else if (userChoice === computerChoice) {
        roundWinner = 'none';
    } else {
        roundWinner = 'computer';
    }
    return roundWinner;
}

function updateGameboard(userChoice, computerChoice, roundWinner) {
    if (roundWinner === 'player') {
        playerScore++;
        gameboardTitle.textContent = 'You won this round';
        gameboardMessage.textContent = `${userChoice} beats ${computerChoice}`;
    } else if (roundWinner === 'computer') {
        computerScore++;
        gameboardTitle.textContent = 'You lost this round';
        gameboardMessage.textContent = `${computerChoice} beats ${userChoice}`;
    } else {
        gameboardTitle.textContent = 'Its a draw';
        gameboardMessage.textContent = `${userChoice} ties with ${computerChoice}`;
    }
    usersImage.src = `./resources/images/${userChoice}.svg`;
    computersImage.src = `./resources/images/${computerChoice}.svg`;
    usersScoreElement.textContent = `Player: ${playerScore}`;
    computersScoreElement.textContent = `Computer: ${computerScore}`;
}

function checkForWinner() {
    if (playerScore === 5 || computerScore === 5) {
        return true;
    } else {
        return false;
    }
}

function endGame() {
    mainSection.style.display = 'none';
    endScreen.style.display = 'block';
    if (playerScore === 5) {
        endScreenMessage.textContent = 'You won congrats!';
    } else {
        endScreenMessage.textContent = 'You lost, better luck next time!';
    }
}

function playAgain() {
    location.reload();
};