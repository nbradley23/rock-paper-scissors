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
    if (playerSelection === "rock" && (computerSelection === 'paper' || computerSelection === 'scissors')) {
        console.log(`Player chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        return "You are the winner!!!"
    } else if (playerSelection === computerSelection) {
        console.log(`Player chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        return "You tied please go again"
    }



}