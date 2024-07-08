// Project: "Rock, Paper, Scissors" Game
// Create a program that plays a game of Rock, Paper, Scissors with the user.
// Requirements:
// 1. Ask the user to choose one of Rock, Paper, or Scissors.
// 2. Generate a random choice (Rock, Paper, or Scissors) for the computer.
// 3. Determine the winner based on the game's rules (Rock beats Scissors, Scissors beats Paper, Paper beats Rock).
// 4. Output the result, including the user's choice, the computer's choice, and the winner.
// 5. Allow the user to play again.
import inquirer from "inquirer";
async function playGame() {
    const userChoice = await getUserChoice();
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    determineWinner(userChoice, computerChoice);
    const playAgain = await inquirer.prompt([{
            type: 'confirm',
            name: 'playAgain',
            message: 'Play again?'
        }]);
    if (playAgain) {
        playGame();
    }
}
async function getUserChoice() {
    const answer = await inquirer.prompt([{
            type: 'input',
            name: 'userChoice',
            message: 'Choose Rock, Paper, or Scissors: ',
            validate: function (value) {
                if (value.toLowerCase() !== "rock" && value.toLowerCase() !== "paper" && value.toLowerCase() !== "scissors") {
                    return 'Invalid input. Choose Rock, Paper, or Scissors:';
                }
                return true;
            }
        }]);
    return answer.userChoice.toLowerCase();
}
function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.33) {
        return "rock";
    }
    else if (randomNum < 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
        console.log("You win!");
    }
    else {
        console.log("Computer wins!");
    }
}
playGame();
