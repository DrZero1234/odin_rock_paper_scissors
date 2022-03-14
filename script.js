const buttons = document.querySelector(".selection").querySelectorAll("div");

const options = ["Rock", "Paper", "Scissors"]
let player_score_int = 0;
let CPU_score_int = 0;

// Generates the content of the website

const human_score_element =  document.querySelector("#human-score");
const CPU_score_element = document.querySelector("#cpu-score");
const last_round_text = document.querySelector("#last-round-text");




// Generates the CPU´s move
function computerPlay() {
    computerChoice = options[Math.floor(Math.random() * options.length)].toLowerCase();
    return computerChoice
}

/* Plays a round of Rock paper scissors. Displays the player and CPU choices
and returns a value accordingly:
 1 - Player Won,
 0 - Draw,
 -1 CPU won

 */
function playRound(playerSelection, computerSelection) {
    // Displaying the choices for testing purposes
    console.log(`Player Selection: ${playerSelection}`);
    console.log(`Computer Selection: ${computerSelection}`);
    // The player won the round
    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        last_round_text.textContent = `You won ${playerSelection} beats ${computerSelection}.`;

        return 1;
    // The CPU won the round
    } else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" &&playerSelection === "paper")) {
        console.log(`You lost ${computerSelection} beats your ${playerSelection}.`);
        return -1;
    // Round Draw
    } else {
        console.log(`Draw you both chose ${playerSelection}`);
        return 0;
    }
    
}
/*
  Simulates 5 round of rock paper scissors and displays the winner of the series.

*/
function game(playerSelection, cpuSelection) {

    // playing the game for 5 rounds
    while (player_score_int < 5 ||CPU_score_int < 5)
        // asks the user for legitimate choice (Rock, Paper or Scissor)
        // CPU choice with the help of computerPlay function
        computerSelection = computerPlay()
        result = playRound(playerSelection, computerSelection)
        // Adding to the result based on the turn´s result
        if (result === 1) {
            player_score_int++;
            human_score_element.textContent = player_score_int;

        } else if (result === -1) {
            computerScore++;
        }
        // The current score of the series.
        console.log(`Current Score: Player: ${playerScore} - CPU: ${computerScore}`);
    }
    // Evaluating and displaying the winner and the final score
    if (playerScore > computerScore) {
        console.log(`Player won with the score of ${playerScore} - ${computerScore}. `)
    } else if (computerScore > playerScore) {
        console.log(`The computer won with the score of ${playerScore} - ${computerScore}. `)
    } else {
        console.log(`The tie ended with a ${playerScore} - ${computerScore} draw. `)
    }
}

buttons.forEach((button) => {
    console.log(`Id ${button.id}`)
    button.addEventListener("click", () => {
        playRound(button.id, computerPlay() )
    })
})
