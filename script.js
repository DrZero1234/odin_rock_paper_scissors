const buttons = document.querySelector(".selection").querySelectorAll("div");


const options = ["Rock", "Paper", "Scissors"]


let player_score_int = 0;
let CPU_score_int = 0;

// Generates the content of the website

const human_score_element =  document.querySelector("#human-score");
const CPU_score_element = document.querySelector("#cpu-score");
const last_round_text = document.querySelector("#last-round-text");
const play_again = document.querySelector("#play-again");



function reset_game() {
    player_score_int = 0;
    CPU_score_int = 0;
    human_score_element.textContent = player_score_int;
    CPU_score_element.textContent = CPU_score_int;
    play_again.style.display = "none";

}

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
function playRound(playerSelection) {
    // Displaying the choices for testing purposes
    console.log(`Player Selection: ${playerSelection}`);
    computerSelection = computerPlay();
    // The player won the round
    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        last_round_text.textContent = `You won ${playerSelection} beats ${computerSelection}.`;
        return 1;
    // The CPU won the round
    } else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" &&playerSelection === "paper")) {
        last_round_text.textContent = `You lost ${computerSelection} beats your ${playerSelection}.`;
        return -1;
    // Round Draw
    } else {
        last_round_text.textContent = `Draw you both chose ${playerSelection}`;
    }
    
}
/*
  Simulates 5 round of rock paper scissors and displays the winner of the series.

*/
function game(playerSelection) {

    // playing the game for 5 rounds
    computerSelection = computerPlay()
    if  (player_score_int < 5 && CPU_score_int < 5){
        result = playRound(playerSelection);
        console.log(result);
        // asks the user for legitimate choice (Rock, Paper or Scissor)
        // CPU choice with the help of computerPlay function
        // Adding to the result based on the turn´s result
        if (result === 1) {
            player_score_int++;
            human_score_element.textContent = player_score_int;

        } else if (result === -1) {
            CPU_score_int++;
            CPU_score_element.textContent = CPU_score_int;
        }
    }
    // Evaluating and displaying the winner and the final score
    if (player_score_int >= 5 || CPU_score_int >= 5) {
        if (player_score_int === 5) {
            last_round_text.textContent = `You have defeated the computer, good job.`;
            } else if (CPU_score_int === 5){
            last_round_text.textContent = `The computer won. You gotta practice your random picking skills`;  
        }
        play_again.style.display = "block";
        play_again.addEventListener("click", reset_game);
    }
    return

    
}

buttons.forEach((button) => {
    console.log(`Id ${button.id}`)
    button.addEventListener("click", () => {
        game(button.id, computerPlay() )
    })
})
