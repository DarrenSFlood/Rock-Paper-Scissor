let humanScore = 0;
let computerScore = 0;

//function to randomly generate a Rock, Paper, or Scissor value for the PC
const getComputerChoice = function () {
   let randomNumber = Math.random();

    if (randomNumber >= 0.66){
        return "scissor";
    } else if (randomNumber >= 0.33) {
        return "paper";
    } else {
        return "rock";
    }
}

//function to get Player choice via a prompt.
const getHumanChoice = function() {
    let playerChoice = prompt("Enter a selection, Rock, Paper, or Scissor?").toLowerCase();
    return playerChoice;
}

//count rounds to see if you still play.
function isGameOver() {
    if (humanScore === 3){
        console.log('You did it!');
        return true;
    } else if (computerScore === 3) {
        console.log('You did not do it!');
        return true;
    } else {
        return false;
    }
}

//play a round of the game.
function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    
    // function scope results variables
    let victoryMessage = `You win this round! ${humanChoice} beats ${computerChoice}!`;
    let defeatMessage = `You lose this round! ${computerChoice} beats ${humanChoice}!`;
    let tieMessage = `Tie! Try again!`;

    if (humanChoice === 'rock') {
        switch (computerChoice) {
            case 'rock':
                console.log(tieMessage);
                break;
            case 'paper':
                console.log(defeatMessage);
                computerScore++;
                break;
            case 'scissor':
                console.log(victoryMessage);
                humanScore++;
                break;
        }
    } else if (humanChoice === 'paper') {
        switch (computerChoice) {
            case 'paper':
                console.log(tieMessage);
                break;
            case 'rock':
                console.log(victoryMessage);
                humanScore++;
                break;
            case 'scissor':
                console.log(defeatMessage);
                computerScore++;
                break;
        }
    } else {
        switch (computerChoice) {
            case 'scissor':
                console.log(tieMessage);
                break;
            case 'rock':
                console.log(defeatMessage);
                computerScore++;
                break;
            case 'paper':
                console.log(victoryMessage);
                humanScore++;
                break;
        }
    }

}

function playGame() {
    while (!isGameOver()) {
        playRound();
    }
}

playGame();

