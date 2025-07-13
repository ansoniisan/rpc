//PART 1 - DEFINE THE GAME LOGIC

//Make the computer return a random choice between rock, paper, or scissors
let computerScore = 0;
let humanScore = 0;
let ties = 0;
let gamesPlayed = 0;

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

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
        computerScore++;
    }
    else if ((computerChoice == "rock" && humanChoice == "paper") || (computerChoice == "paper" && humanChoice == "scissors") || (computerChoice == "scissors" && humanChoice == "rock")) {
        humanScore++;
    }
    else {
        ties++;
    }
    gamesPlayed++;
    console.log(gamesPlayed);
}


//PART 2 - MANIPULATE THE DOM

let container = document.querySelector("#container");
container.style.textAlign = "center";
container.style.gap = 20;

let pageTitle = document.createElement("h1");
pageTitle.textContent = "Let's play Rock-Paper-Scissors";
container.appendChild(pageTitle);

let gameImage = document.createElement("img");
gameImage.src = "https://remptongames.com/wp-content/uploads/2018/02/rock-paper-scissor-ft.jpg";
gameImage.alt = "a crumpled piece of paper, a pair of scissors, and a rock on a wooden background";
gameImage.width = 400;
container.appendChild(gameImage);

let buttonDiv = document.createElement("div");
container.appendChild(buttonDiv);

let rockButton = document.createElement("button");
rockButton.textContent = "rock";
let paperButton = document.createElement("button");
paperButton.textContent = "paper";
let scissorsButton = document.createElement("button");
scissorsButton.textContent = "scissors";

buttonDiv.appendChild(rockButton);
buttonDiv.appendChild(paperButton);
buttonDiv.appendChild(scissorsButton);

let resultsDiv = document.createElement("div");
container.appendChild(resultsDiv);

let scoreboard = document.createElement("h2");
scoreboard.textContent = "Scoreboard";
resultsDiv.appendChild(scoreboard);

let rounds = document.createElement("ol");
resultsDiv.appendChild(rounds);

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let playerSelection = button.textContent;
        console.log(playerSelection);

        playRound(playerSelection, getComputerChoice());

        let result = document.createElement("li");
        result.textContent = `Human score: ${humanScore}, computer score: ${computerScore}, ties: ${ties}`;
        rounds.appendChild(result);

        let results = document.querySelectorAll("li");

        if (gamesPlayed === 5) {

            buttons.forEach(button => button.disabled = true)

            if (computerScore > humanScore) {
                alert("The computer wins!");
            }
            else if (computerScore < humanScore) {
                alert("You win!");
            }
            else { alert("Nobody won!") }

            let startOverButton = document.createElement("button");
            startOverButton.textContent = "Start over!";
            resultsDiv.appendChild(startOverButton);

            startOverButton.addEventListener("click", () => {
                humanScore = 0;
                computerScore = 0;
                ties = 0;
                gamesPlayed = 0;
                buttons.forEach(button => button.disabled = false)
                rounds.textContent = "";
                startOverButton.remove();
            });
        }

    });
});