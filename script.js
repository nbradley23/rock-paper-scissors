//Score Keeping
let playerScore = 0;
let computerScore = 0;
let combinedScore = `${playerScore} : ${computerScore}`

//Random Computer R/P/S Selection
function computerPlay() {
    let rpsArray = ['rock', 'paper', 'scissors']
    return rpsArray[Math.floor(Math.random() * 3)]
}

//Random Player R/P/S Selection
function playerPlay() {
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

//Plays game of R/P/S, best of five
function game() {
    while (playerScore < 5 && computerScore < 5) {
        rpsRound(playerPlay(), computerPlay())

    }

    if (playerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        console.log('Player has won the game!!')
    }

    if (computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        console.log('Computer has won the game!!')
    }
}

//Function for when player chooses Rock
function playerRock(computerSelection) {
    if (computerSelection === 'paper') {
        console.log(`Player chose: rock`);
        console.log(`Computer chose: ${computerSelection}`);
        computerWin();
        return "You lose!"
    } else if (computerSelection === "rock") {
        console.log(`Player chose: rock`);
        console.log(`Computer chose: ${computerSelection}`);
        return "You tied please go again"
    } else {
        console.log(`Player chose: rock`);
        console.log(`Computer chose: ${computerSelection}`);
        playerWin();
        return "You are the winner!"
    }
}


//Function for when player chooses Paper
function playerPaper(computerSelection) {
    if (computerSelection === 'rock') {
        console.log(`Player chose: paper`);
        console.log(`Computer chose: ${computerSelection}`);
        playerWin();
        return "You are the winner!"
    } else if (computerSelection === 'paper') {
        console.log(`Player chose: paper`);
        console.log(`Computer chose: ${computerSelection}`);
        return "You tied please go again"
    } else {
        console.log(`Player chose: paper`);
        console.log(`Computer chose: ${computerSelection}`);
        computerWin();
        return "You lose!"
    }
}

//Function for when player chooses Scissors
function playerScissors(computerSelection) {
    if (computerSelection === 'paper') {
        console.log(`Player chose: scissors`);
        console.log(`Computer chose: ${computerSelection}`);
        playerWin();
        return "You are the winner!"
    } else if (computerSelection === 'scissors') {
        console.log(`Player chose: scissors`);
        console.log(`Computer chose: ${computerSelection}`);
        return "You tied please go again"
    } else {
        console.log(`Player chose: scissors`);
        console.log(`Computer chose: ${computerSelection}`);
        computerWin();
        return "You lose!"
    }
}

//When player wins, adds 1 to their score and prints the combined score
function playerWin() {
    ++playerScore
    console.log(`${playerScore} : ${computerScore}`)
}

//When computer wins, adds 1 to its score and prints the combined score
function computerWin() {
    ++computerScore
    console.log(`${playerScore} : ${computerScore}`)
}










