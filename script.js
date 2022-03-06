const options = ["Rock", "Paper", "Scissors"]
playerScore
do {
    
}
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

function game(playerSelection, computerSelection) {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        result = playRound(playerSelection, computerSelection)
        if (result === 1) {
            playerScore++;
        } else if (result === -1) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log(`Player won with the score of ${playerScore} - ${computerScore}. `)
    } else if (computerScore > playerScore) {
        console.log(`The computer wont with the score of ${playerScore} - ${computerScore}. `)
    } else {
        console.log(`The tie ended with a ${playerScore} - ${computerScore} draw. `)
    }
}
game()