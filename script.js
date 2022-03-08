//Score Keeping
let playerScore = 0;
let computerScore = 0;
let combinedScore = `${playerScore} : ${computerScore}`
let round = 0;

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
        playerSelection = prompt("Please enter your choice: Rock, Paper, or Scissors")
        rpsRound(playerSelection, computerPlay())
    }

    if (playerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        round = 0;
        console.log('Player has won the game!!')
    }

    if (computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        round = 0;
        console.log('Computer has won the game!!')
    }
}

//Function for when player chooses Rock
function playerRock(computerSelection) {
    if (computerSelection === 'paper') {
        newRound()
        console.log(`Player chose: rock`);
        console.log(`Computer chose: ${computerSelection}`);
        computerWin();
        console.log("You lost the round!")
    } else if (computerSelection === "rock") {
        newRound()
        console.log(`Player chose: rock`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log("You tied please go again")
    } else {
        newRound()
        console.log(`Player chose: rock`);
        console.log(`Computer chose: ${computerSelection}`);
        playerWin();
        console.log("You are the winner of the round!")
    }
}


//Function for when player chooses Paper
function playerPaper(computerSelection) {
    if (computerSelection === 'rock') {
        newRound()
        console.log(`Player chose: paper`);
        console.log(`Computer chose: ${computerSelection}`);
        playerWin();
        console.log("You are the winner of the round!")
    } else if (computerSelection === 'paper') {
        newRound()
        console.log(`Player chose: paper`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log("You tied please go again")
    } else {
        newRound()
        console.log(`Player chose: paper`);
        console.log(`Computer chose: ${computerSelection}`);
        computerWin();
        console.log("You lost the round!")
    }
}

//Function for when player chooses Scissors
function playerScissors(computerSelection) {
    if (computerSelection === 'paper') {
        newRound()
        console.log(`Player chose: scissors`);
        console.log(`Computer chose: ${computerSelection}`);
        playerWin();
        console.log("You are the winner of the round!")
    } else if (computerSelection === 'scissors') {
        newRound()
        console.log(`Player chose: scissors`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log("You tied please go again")
    } else {
        newRound()
        console.log(`Player chose: scissors`);
        console.log(`Computer chose: ${computerSelection}`);
        computerWin();
        console.log("You lost the round!")
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


function newRound() {
    round++
    console.log(`It's round: ${round}`)
}







