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
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice == 1) {
        return "rock";
    }
    else if (computerChoice == 2) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("What's your choice?");
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

// A player only "reigns supreme" if they win more than the opponent 
// AND have at least as many wins as there are ties.
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanAnswer = getHumanChoice();
        const computerAnswer = getComputerChoice();
        playRound(humanAnswer, computerAnswer)
    }

    if (computerScore > humanScore && computerScore >= ties) {
        return "the computer reigns supreme!";
    }
    if (computerScore < humanScore && humanScore >= ties) {
        return "you reign supreme!";
    }
    if (computerScore === humanScore && computerScore > ties) {
        return "you both reign supreme!";
    }
    return "none of you reign supreme";
}

console.log(playGame(), `Final stats: computer score = ${computerScore}, human score = ${humanScore}, ties = ${ties}`);