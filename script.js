//Score Keeping
let playerScore = 0;
let computerScore = 0;
let round = 0;

//Random Computer R/P/S Selection
function computerPlay() {
    let rpsArray = ['rock', 'paper', 'scissors'];
    return rpsArray[Math.floor(Math.random() * 3)];
}

//Random Player R/P/S Selection
function playerPlay() {
    let rpsArray = ['rock', 'paper', 'scissors'];
    return rpsArray[Math.floor(Math.random() * 3)];
}

//Round of Rock, Paper, Scissors
function rpsRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" || "paper" || "scissors") {
        if (playerSelection === 'rock') {
            return playerRock(computerSelection);
        } else if (playerSelection === 'paper') {
            return playerPaper(computerSelection);
        } else if (playerSelection === 'scissors') {
            return playerScissors(computerSelection);
        } else {
            alert("Invalid selection. Please try again.");

        }
    }
}


//Plays game of R/P/S, best of five
function game() {
    while (playerScore < 5 && computerScore < 5) {
        playerSelection = prompt("Please enter your choice: Rock, Paper, or Scissors");
        rpsRound(playerSelection, computerPlay());




        if (playerScore === 5) {
            playerScore = 0;
            computerScore = 0;
            round = 0;
            console.log('Player has won the game!!');
        }

        if (computerScore === 5) {
            playerScore = 0;
            computerScore = 0;
            round = 0;
            console.log('Computer has won the game!!');
        }
    }
}

//Function for when player chooses Rock
function playerRock(computerSelection) {
    if (computerSelection === 'paper') {
        newRound();
        roundLost(playerSelection, computerSelection);
        computerWinScore();
    } else if (computerSelection === "rock") {
        newRound();
        roundTied(playerSelection, computerSelection);
    } else {
        newRound();
        roundWon(playerSelection, computerSelection);
        playerWinScore();
    }
}


//Function for when player chooses Paper
function playerPaper(computerSelection) {
    if (computerSelection === 'rock') {
        newRound();
        roundWon(playerSelection, computerSelection);
        playerWinScore();
    } else if (computerSelection === 'paper') {
        newRound();
        roundTied(playerSelection, computerSelection);
    } else {
        newRound();
        roundLost(playerSelection, computerSelection);
        computerWinScore();
    }
}

//Function for when player chooses Scissors
function playerScissors(computerSelection) {
    if (computerSelection === 'paper') {
        newRound();
        roundWon(playerSelection, computerSelection);
        playerWinScore();
    } else if (computerSelection === 'scissors') {
        newRound();
        roundTied(playerSelection, computerSelection);
    } else {
        newRound();
        roundLost(playerSelection, computerSelection);
        computerWinScore();
    }
}

//When player wins, adds 1 to their score and prints the combined score
function playerWinScore() {
    ++playerScore;
    console.log(`Score: ${playerScore} to ${computerScore}`);
    console.log(" ");
}

//When computer wins, adds 1 to its score and prints the combined score
function computerWinScore() {
    ++computerScore;
    console.log(`Score: ${playerScore} to ${computerScore}`);
    console.log(" ");
}


function newRound() {
    round++;
    console.log(`It's round: ${round}`);
}

function roundWon(playerSelection, computerSelection) {
    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log("You are the winner of the round!");
}

function roundLost(playerSelection, computerSelection) {
    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log("You lost the round!");
}

function roundTied(playerSelection, computerSelection) {
    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log("You tied please go again");
    console.log(" ");
}







