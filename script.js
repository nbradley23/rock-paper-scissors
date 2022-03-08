//Score Keeping
let playerScore = 0
let computerScore = 0
let combinedScore = `${playerScore} : ${computerScore}`

//Random Computer R/P/S Selection
function computerPlay() {
    let rpsArray = ['rock', 'paper', 'scissors']
    return rpsArray[Math.floor(Math.random() * 3)]
}

//Round of Rock, Paper, Scissors
function rpsRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock') {
        return playerRock(computerSelection);
    } else if (playerSelection === 'paper') {
        return playerPaper(computerSelection);
    } else {
        return playerScissors(computerSelection);
    }



}


//Function for when player chooses Rock
function playerRock(computerSelection) {
    if (computerSelection === 'paper') {
        console.log(`Player chose: rock`);
        console.log(`Computer chose: ${computerSelection}`);
        return "You lose!"
    } else if (computerSelection === "rock") {
        console.log(`Player chose: rock`);
        console.log(`Computer chose: ${computerSelection}`);
        return "You tied please go again"
    } else {
        console.log(`Player chose: rock`);
        console.log(`Computer chose: ${computerSelection}`);
        return "You are the winner!"
    }
}


//Function for when player chooses Paper
function playerPaper(computerSelection) {
    if (computerSelection === 'rock') {
        console.log(`Player chose: paper`);
        console.log(`Computer chose: ${computerSelection}`);
        return "You are the winner!"
    } else if (computerSelection === 'paper') {
        console.log(`Player chose: paper`);
        console.log(`Computer chose: ${computerSelection}`);
        return "You tied please go again"
    } else {
        console.log(`Player chose: paper`);
        console.log(`Computer chose: ${computerSelection}`);
        return "You lose!"
    }
}

//Function for when player chooses Scissors
function playerScissors(computerSelection) {
    if (computerSelection === 'paper') {
        console.log(`Player chose: scissors`);
        console.log(`Computer chose: ${computerSelection}`);
        return "You are the winner!"
    } else if (computerSelection === 'scissors') {
        console.log(`Player chose: scissors`);
        console.log(`Computer chose: ${computerSelection}`);
        return "You tied please go again"
    } else {
        console.log(`Player chose: scissors`);
        console.log(`Computer chose: ${computerSelection}`);
        return "You lose!"
    }
}











