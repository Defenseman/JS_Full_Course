const choices = ['rock', 'paper', 'scissors']
const playerResult = document.getElementById("resultDisplay");
const computerResult = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");


function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";
    console.log(computerChoice)
    if (computerChoice === playerChoice ) {
        resultDisplay.textContent = 'It`s a Tie';
    }else {
        switch (playerChoice) {
            case "rock":
                (computerChoice === 'scissors') ? 'You WIN' : 'You LOSE';
                break
            case "paper":
                (computerChoice === 'rock') ? 'You WIN' : 'You LOSE';
                break
            case "scissors":
                computerChoice === 'scissors' ? 'You WIN' : 'You LOSE';
                break
        }
    }
    playerResult.textContent = `PLAYER ${playerChoice}`;
    computerResult.textContent = `COMPUTER ${computerChoice}`;
}