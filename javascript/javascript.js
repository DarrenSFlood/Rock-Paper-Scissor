//global scope player score
let humanScore = 0;
let computerScore = 0;

//function to randomly generate a Rock, Paper, or Scissor value for the PC

let getComputerChoice = function () {
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

let getHumanChoice = function() {
    let playerChoice = prompt("Enter a selection, Rock, Paper, or Scissor?").toLowerCase();
    return playerChoice;
}


// Function to play a single round. This should update the global scores and provide a console message stating the outcome.
let playRound = (humanChoice, computerChoice) => {
    let victoryMessage = `You win! ${humanChoice} beats ${computerChoice}!`;
    let defeatMessage = `You lose! ${computerChoice} beats ${humanChoice}!`;
    let tieMessage = `Tie! Try again!`;

    if (humanChoice === 'rock') {
        switch (computerChoice) {
            case 'rock':
                console.log(tieMessage);
                break;
            case 'paper':
                console.log(defeatMessage);
                break;
            case 'scissor':
                console.log(victoryMessage);
                break;
        }
    } else if (humanChoice === 'paper') {
        switch (computerChoice) {
            case 'paper':
                console.log(tieMessage);
                break;
            case 'rock':
                console.log(victoryMessage);
                break;
            case 'scissor':
                console.log(defeatMessage);
                break;
        }
    } else {
            switch (computerChoice) {
                case 'scissor':
                    console.log(tieMessage);
                    break;
                case 'rock':
                    console.log(defeatMessage);
                    break;
                case 'paper':
                    console.log(victoryMessage);
                    break;
            }
        }
 }




playRound(getHumanChoice(), getComputerChoice());

