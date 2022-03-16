
const options = ["Rock", "Paper", "Scissors"]


let player_score_int = 0;
let CPU_score_int = 0;

// Query selectors
const buttons = document.querySelector(".selection").querySelectorAll("div");
const human_score_element =  document.querySelector("#human-score");
const CPU_score_element = document.querySelector("#cpu-score");
const last_round_text = document.querySelector("#last-round-text");
const play_again = document.querySelector("#play-again");





// Generates the CPU´s move
function computerPlay() {
    computerChoice = options[Math.floor(Math.random() * options.length)].toLowerCase();
    return computerChoice
}

/* Plays a round of Rock paper scissors. Returns a value based on the result
 1 - Player Won,
 -1 CPU won

 */
function playRound(playerSelection) {
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

// Plays a specific sound depending on the result (win or lose)

function play_sound(e) {
    if (e == "win") {
        audio = new Audio("sounds/win/yes.mp3")
    } else if (e === "lose") {
        audio = new Audio("sounds/lost/the-price-is-right-losing-horn.mp3")
    }
    audio.play()
}

/*
When clicking the play again button this function will reset the game
- 
*/

function reset_game() {
    // Resets the score
    player_score_int = 0;
    CPU_score_int = 0;
    human_score_element.textContent = player_score_int;
    CPU_score_element.textContent = CPU_score_int;
    // Hides the Play Again button
    play_again.style.display = "none";
    // Makes the rock, paper, scissor buttons clickable again
    buttons.forEach((button) => {
        button.style.pointerEvents = "auto";
    })

}


/*
  Simulates 5 round of rock paper scissors and displays the winner of the series.

*/
function game(playerSelection) {

    
    computerSelection = computerPlay()
    // playing the game for 5 rounds
    if  (player_score_int < 5 && CPU_score_int < 5){
        result = playRound(playerSelection);
        // If the player won the round 
        if (result === 1) {
            player_score_int++;
            human_score_element.textContent = player_score_int;
        // If the CPU won the round
        } else if (result === -1) {
            CPU_score_int++;
            CPU_score_element.textContent = CPU_score_int;
        }
    }
    // Evaluating and displaying the winner of the game
    if (player_score_int >= 5 || CPU_score_int >= 5) {
        if (player_score_int === 5) {
            last_round_text.textContent = `You have defeated the computer, good job.`;
            play_sound("win");
            } else if (CPU_score_int === 5){
            play_sound("lose");
            last_round_text.textContent = `The computer won. You gotta practice your random picking skills`;
        }
        // At the end of the game makes the rock, paper scissors buttons unclickable
        buttons.forEach((button) => {
            button.style.pointerEvents = "none";
        })
        // The Play again button appears
        play_again.style.display = "block";
        play_again.addEventListener("click", reset_game);
    }
    return;

    
}



buttons.forEach((button) => {
    button.addEventListener("click", () => {
        game(button.id, computerPlay() )
    })
})
