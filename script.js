//Score Keeping
let playerScore = 0;
let computerScore = 0;
let round = 0;
let playerSelection = '';
let roundP = document.createElement('p');
let playerSelectionP = document.createElement('p');
let computerSelectionP = document.createElement('p');
let scoreP = document.createElement('p');
let winOrLoseRound = document.createElement('p');
let gameWinner = document.createElement('p');
let resultsDiv = document.querySelector('.results');


const rpsBtns = document.querySelectorAll('.btn');

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
function game(playerSelection) {
    // while (playerScore < 5 && computerScore < 5) {
    // playerSelection = prompt("Please enter your choice: Rock, Paper, or Scissors");
    rpsRound(playerSelection, computerPlay());




    if (playerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        round = 0;
        gameWinner.innerText = 'Player has won the game!!';
        resultsDiv.appendChild(gameWinner);
    }

    if (computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        round = 0;
        gameWinner.innerText = 'Computer has won the game!!';
        resultsDiv.appendChild(gameWinner);
    }
}
// }

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
    scoreP.innerText = `Score: ${playerScore} to ${computerScore}`;
    resultsDiv.appendChild(scoreP)
}

//When computer wins, adds 1 to its score and prints the combined score
function computerWinScore() {
    ++computerScore;
    scoreP.innerText = `Score: ${playerScore} to ${computerScore}`;
    resultsDiv.appendChild(scoreP)
}


function newRound() {
    scoreP.innerText = ""
    gameWinner.innerText = ""
    round++;
    roundP.innerText = `It's round: ${round}`;
    resultsDiv.appendChild(roundP);
}

function roundWon(playerSelection, computerSelection) {
    playerSelectionP.innerText = `Player chose: ${playerSelection}`;
    resultsDiv.appendChild(playerSelectionP);
    computerSelectionP.innerText = `Computer chose: ${computerSelection}`;
    resultsDiv.appendChild(computerSelectionP);
    winOrLoseRound.innerText = "You are the winner of the round!";
    resultsDiv.appendChild(winOrLoseRound);
}

function roundLost(playerSelection, computerSelection) {
    playerSelectionP.innerText = `Player chose: ${playerSelection}`;
    resultsDiv.appendChild(playerSelectionP);
    computerSelectionP.innerText = `Computer chose: ${computerSelection}`;
    resultsDiv.appendChild(computerSelectionP);
    winOrLoseRound.innerText = "You lost the round!";
    resultsDiv.appendChild(winOrLoseRound);
}

function roundTied(playerSelection, computerSelection) {
    playerSelectionP.innerText = `Player chose: ${playerSelection}`;
    resultsDiv.appendChild(playerSelectionP);
    computerSelectionP.innerText = `Computer chose: ${computerSelection}`;
    resultsDiv.appendChild(computerSelectionP);
    winOrLoseRound.innerText = "You tied please go again";
    resultsDiv.appendChild(winOrLoseRound);
}


rpsBtns.forEach(btn => {
    btn.addEventListener('click', runGame)
})



function runGame(e) {
    playerSelection = e.target.innerText.toLowerCase();
    game(playerSelection);
}