/* Rock Paper Scissors is a game whereby two players can each
   choose between three options; rock, paper, or scissors.

   A game is won a player chooses an option that "beats" the other's.

   Rock beats scissors, scissors beats paper, and paper beats rock.

   If both players choose the same option, they have to play again.

   The game can be played for as many rounds as the players want.
*/

//Make the computer return a random choice between rock, paper, or scissors
let computerScore = 0;
let humanScore = 0;
let ties = 0;

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice == 1) {
        return "rock";
    }
    else if (computerChoice == 2) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    humanChoice = prompt("What's your choice?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    else if ((computerChoice == "rock" && humanChoice == "paper") || (computerChoice == "paper" && humanChoice == "scissors") || (computerChoice == "scissors" && humanChoice == "rock")) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else {
        ties++;
        return "Nobody won that round! Play again!";
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanAnswer = getHumanChoice();
        const computerAnswer = getComputerChoice();
        playRound(humanAnswer, computerAnswer)
    }

    if (computerScore > humanScore) {
        return "the computer reigns supreme!";
    }
    else if (humanScore > computerScore) {
        return "you reign supreme!";
    }
    else {
        return "you both reign supreme!";
    };

}

console.log(playGame(), `Final stats: computer score = ${computerScore}, human score = ${humanScore}, ties = ${ties}`);