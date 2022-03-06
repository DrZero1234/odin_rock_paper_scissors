const options = ["Rock", "Paper", "Scissors"]

function computerPlay() {
    computerChoice = options[Math.floor(Math.random() * options.length)].toLowerCase();
    return computerChoice
}

function Play() {
    let playerSelection;
    let winner;
    do {
        playerSelection = prompt("Rock, Paper, Scissors? ", "").toLowerCase();
    }
    while (playerSelection !== "Rock".toLowerCase() && playerSelection !== "Paper".toLowerCase() && playerSelection !== "Scissors".toLowerCase());
    const computerSelection = computerPlay();
    console.log(`Player Selection: ${playerSelection}`);
    console.log(`Computer Selection: ${computerSelection}`);
    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" || computerSelection === "paper")) {
        winner = `You won ${playerSelection} beats ${computerSelection}.`
        return winner
    } else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" || computerSelection === "paper")) {
        winner = `You lost ${computerSelection} beats your ${playerSelection}.`
        return winner;
    } else {
        winner = `Draw you both chode ${playerSelection}`;
        return winner;
    }
    
}
Play()