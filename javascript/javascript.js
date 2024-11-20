//function to randomly generate a Rock, Paper, or Scissor value for the PC

let getComputerChoice = function () {
   let randomNumber = Math.random();

    if (randomNumber >= 0.66){
        return "Scissor";
    } else if (randomNumber >= 0.33) {
        return "Paper";
    } else {
        return "Rock";
    }
}

//function to get Player choice via a prompt.

let getHumanChoice = function() {
    let playerChoice = prompt("Enter a selection, Rock, Paper, or Scissor?").toLowerCase();
    return playerChoice;
}

//global scope player score
let humanScore = 0;
let computerScore = 0;


