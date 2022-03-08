function computerPlay() {
    let rpsArray = ['rock', 'paper', 'scissors']
    return rpsArray[Math.floor(Math.random() * 3)]
}

//create function that takes two parameters player and computer selections
//create conditionals to determine who wins the round
//return string that declares the winner of the round

let computerSelection = computerPlay();
let playerSelection = "";

function rpsRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock') {
        return playerRock(computerSelection);
    } else if (playerSelection === 'paper') {
        return playerPaper(computerSelection);
    }



}

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

function playerPaper (computerSelection) {
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



