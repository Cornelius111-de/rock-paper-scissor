let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice == 1) {
        return "paper"
    } else if (randomChoice == 2) {
        return "rock"
    } else { return "scissor" }
}


function getHumanChoice() {
    let userInput = prompt("Rock, Paper Scissor? You have to choose!");
    let inputHumanChoice = ["rock", "paper", "scissor"];

    if (userInput == inputHumanChoice[0]) {
        return "rock"
    } else if (userInput == inputHumanChoice[1]) {
        return "paper"
    } else { return "scissor" }

}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie, go play another Round! (:")
    } else if (
        (humanChoice === "scissor" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissor")
    ) {
        console.log(`You win, ${humanSelection} beats ${computerSelection} (:`)
        humanScore++
    } else if (
        (humanChoice === "paper" && computerChoice === "scissor") ||
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "scissor" && computerChoice === "rock")
    ) {
        computerScore++
        console.log(`You loose, ${computerSelection} beats ${humanSelection} .. :(`)
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`Round ${i + 1}:`);
        playRound(humanSelection, computerSelection);
        console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Game over! The computer won the game.");
    } else {
        console.log("It's a tie! No winner this time.");
    }
}

playGame();




