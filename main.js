
// get buttons
const result = document.querySelector('#result');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// get computer choice -> random choice
function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return "rock";
    } else if (num == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// check winner
function playRound(player, computer) {
    switch(player + "-" + computer) {
        case "rock-paper":
            return "You Lose! Paper beats Rock!";

        case "rock-scissors":
            return "You Win! Scissors can't beat Rock!";

        case "paper-rock":
            return "You Win! Rock can't beat Paper!";

        case "paper-scissors":
            return "You Lose! Scissors beats Paper!";

        case "scissors-rock":
            return "You Lose! Rock beats Scissors!";

        case "scissors-paper":
            return "You Win! Paper can't beat Scissors!";

        case "rock-rock": case "paper-paper": case "scissors-scissors":
            return "It's a tie!";

        default:
            return "Invalid selection!";
    }
}

const winner = document.createElement('div');

// counting points
let playerPoints = 0;
let computerPoints = 0;

let computerChoice = getComputerChoice();

// buttons clicked
rock.addEventListener('click', () => {
    winner.textContent = playRound('rock', computerChoice);
    result.appendChild(winner);
});
                
paper.addEventListener('click', () => {
    winner.textContent = playRound('paper', computerChoice);
    result.appendChild(winner);
});
                
scissors.addEventListener('click', () => {
    winner.textContent = playRound('scissors', computerChoice);
    result.appendChild(winner);
});


// const playerSelection = prompt("What is your choice?").toLowerCase();
    //     console.log("Player selection: " + playerSelection);
        
    //     const computerSelection = getComputerChoice();
    //     console.log("Computer selection: " + computerSelection);
        
    //     const result = playRound(playerSelection, computerSelection);
    //     console.log(result);
    //     if (result.includes("Win")) {
    //         playerPoints += 1;
    //     } else if (result.includes("Lose")) {
    //         computerPoints += 1;
    //     }
        
    //     console.log("Player points: " + playerPoints);
    //     console.log("Computer points: " + computerPoints);

    // if (playerPoints > computerPoints) {
    //     console.log("You Win!");
    // } else if (playerPoints < computerPoints) {
    //     console.log("You Lose!");
    // } else {
    //     console.log("Tie!");
    // }