const options = ["Rock", "Paper", "Scissors"]

function computerPlay() {
    computerChoice = options[Math.floor(Math.random() * options.length)].toLowerCase();
    return computerChoice
}

function playRound(playerSelection, computerSelection) {
    console.log(`Player Selection: ${playerSelection}`);
    console.log(`Computer Selection: ${computerSelection}`);
    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log(`You won ${playerSelection} beats ${computerSelection}.`);
        return 1;
    } else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" &&playerSelection === "paper")) {
        console.log(`You lost ${computerSelection} beats your ${playerSelection}.`);
        return -1;
    } else {
        console.log(`Draw you both chose ${playerSelection}`);
        return 0;
    }
    
}
console.log(playRound("scissors", computerPlay()))