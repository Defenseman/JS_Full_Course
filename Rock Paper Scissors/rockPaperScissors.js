const choices = ['rock', 'paper', 'scissors']
const playerResult = document.getElementById("playerResult");
const computerResult = document.getElementById("computerResult");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (computerChoice === playerChoice ) {
        result = 'It`s a TIE';
    }else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === 'scissors') ? 'YOU WIN' : 'YOU LOSE';
                break
            case "paper":
                result = (computerChoice === 'rock') ? 'YOU WIN' : 'YOU LOSE';
                break
            case "scissors":
                result = computerChoice === 'scissors' ? 'YOU WIN' : 'YOU LOSE';
                break
        }
    }
    playerResult.textContent = `PLAYER: ${playerChoice}`;
    computerResult.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result

    resultDisplay.classList.remove('greenText', 'redText')

    switch (result) {
        case "YOU WIN":
            resultDisplay.classList.add('greenText');
            playerScore++
            playerScoreDisplay.textContent = playerScore;
            break
        case "YOU LOSE":
            resultDisplay.classList.add('redText')
            computerScore++
            computerScoreDisplay.textContent = computerScore;
            break
    }
}