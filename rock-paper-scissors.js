/*const randomInt = (function getRandomInt(min, max) {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
})(0, 3);*/

//console.log(randomInt);

//this function returns a random number between 0-2 and assigns a string value of rock, paper, or scissors
function getComputerChoice() {

    let randomInt = (function getRandomInt(min, max) {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
    })(0, 3);

    if (randomInt == 0)
        return "rock";
    else if (randomInt == 1)
        return "paper";
    else if (randomInt == 2)
        return "scissors";
 }

//this function asks user for user input and returns the string value
function getHumanChoice() {
    let humanChoice  = prompt("Rock, paper, or scissors? ", "choice");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
 }

//console.log(humanSelection, computerSelection);

let humanScore = 0;
let computerScore = 0;

function playRound(human, computer) {

    let humanSelection = getHumanChoice(); //moved these variables inside the function so new values are stored
    let computerSelection = getComputerChoice(); //moved these variables inside the function so new values are stored
    console.log("Player: " + humanSelection + ", Computer: " + computerSelection);
    if (humanSelection == computerSelection) {
        console.log(`It's a tie! Player: ${humanScore}, Computer: ${computerScore}`);
    }
    else if ((humanSelection == "rock") && (computerSelection == "scissors")
            || (humanSelection == "scissors") && (computerSelection == "paper")
        || (humanSelection == "paper") && (computerSelection == "rock")) {
        humanScore = ++humanScore
        console.log(`You win! ${humanSelection} beats ${computerSelection}. Player: ${humanScore}, Computer: ${computerScore}`)
    }
    else if ((computerSelection == "rock") && (humanSelection == "scissors")
            || (computerSelection == "scissors") && (humanSelection == "paper")
        || (computerSelection == "paper") && (humanSelection == "rock")) {
        computerScore = ++computerScore
        console.log(`You lose! ${computerSelection} beats ${humanSelection}. Player: ${humanScore}, Computer: ${computerScore}`)
        }
}

//plays 5 rounds of game
function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (humanScore>computerScore) {
        console.log("Player wins!");
    }
    else console.log("Computer wins! Better luck next time.");
}

//console.log("Player: " + humanSelection);
//console.log("Computer: " + computerSelection);

playGame();



