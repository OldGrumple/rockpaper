//Declare all the global variables
let playerSelection;
let computerSelection;
let roundCounter = 1;
let message;

// The computer selects a random choice from the array
function computerPlay(){
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()* options.length)];
}

function playRound() {
    playerSelection = prompt('Choose rock, paper or scissors').toLowerCase(); // Making the player's entered choice case insensitive.
    computerSelection = computerPlay();

    message = "Round #" + roundCounter + ". ";

    if(playerSelection === computerSelection){

        message += "It's a tie! Play again. " + playerSelection + " vs " + computerSelection;
        return message;

    } else if(playerSelection === 'rock' && computerSelection === 'paper'){

        message += "You loose! Paper beats rock. " + playerSelection + " vs " + computerSelection;
        return message;

    } else if(playerSelection === 'paper' && computerSelection === 'rock'){

        message += "You win! Rock beats paper. " + playerSelection + " vs " + computerSelection;
        return message;

    } else if(playerSelection === 'rock' && computerSelection === 'scissors'){

        message += "You win! Rock crushes scissors. " + playerSelection + " vs " + computerSelection;
        return message;

    } else if(playerSelection === 'scissors' && computerSelection === 'rock'){

        message += "You loose. Rock crushes scissors. "  + playerSelection + " vs " + computerSelection;
        return message;

    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {

        message += "You win! Scissors cut paper. "  + playerSelection + " vs " + computerSelection;
        return message;

    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {

        message += "You loose! Scissors cut paper. "  + playerSelection + " vs " + computerSelection;
        return message;

    }
}

function game() {
    do {
        console.log(playRound());
        roundCounter++;
    } while (playerScore < 3 && computerScore < 3);
        if (playerScore === 3){
            message = "Congratulations! You're the winner!";
        } else {
            message = "Sorry! The computer beat you, are you going to take that?!";
        }

    message += " Your score is" + playerScore + " and the computer's score is " + computerScore + ".";
    return message;
}

console.log(game());