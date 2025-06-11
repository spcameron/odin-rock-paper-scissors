// GAME

let humanScore = 0;
let computerScore = 0;
let roundWinner = "";

function getComputerChoice() {
  const randomValue = Math.floor(Math.random() * 3) + 1;
  switch (randomValue) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    roundWinner = "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    roundWinner = "computer";
  } else {
    humanScore++;
    roundWinner = "human";
  }
}

function isGameOver() {
  return humanScore === 5 || computerScore === 5;
}

// UI

const buttons = document.querySelectorAll(".rps-button");
const roundHeader = document.querySelector("#roundHeader");
const roundSubheader = document.querySelector("#roundSubheader");
const humanSign = document.querySelector("#humanSign");
const humanScoreboard = document.querySelector("#humanScore");
const computerSign = document.querySelector("#cpuSign");
const computerScoreboard = document.querySelector("#cpuScore");
const endgameModal = document.querySelector("#endgameModal");
const endgameMessage = document.querySelector("#endgameMessage");
const newGameButton = document.querySelector("#newGameButton");
const overlay = document.querySelector(".overlay");

const rockEmoji = "✊";
const paperEmoji = "✋";
const scissorsEmoji = "✌";

newGameButton.addEventListener("click", newGame);
overlay.addEventListener("click", closeModal);
for (const button of buttons) {
  button.addEventListener("click", (e) => handleClick(e.target.id));
}

function handleClick(playerChoice) {
  if (isGameOver()) {
    reportWinner();
    openModal();
    return;
  }

  const computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  updateChoices(playerChoice, computerChoice);
  updateScoreboard(playerChoice, computerChoice);

  if (isGameOver()) {
    reportWinner();
    openModal();
  }
}

function updateChoices(playerChoice, computerChoice) {
  switch (playerChoice) {
    case "rock":
      humanSign.textContent = rockEmoji;
      break;
    case "paper":
      humanSign.textContent = paperEmoji;
      break;
    case "scissors":
      humanSign.textContent = scissorsEmoji;
      break;
  }

  switch (computerChoice) {
    case "rock":
      computerSign.textContent = rockEmoji;
      break;
    case "paper":
      computerSign.textContent = paperEmoji;
      break;
    case "scissors":
      computerSign.textContent = scissorsEmoji;
      break;
  }
}

function updateScoreboard(playerChoice, computerChoice) {
  let header = "";
  let subheader = "";

  switch (roundWinner) {
    case "tie":
      header = "It's a tie!";
      subheader = `${capitalizeFirstLetter(
        playerChoice
      )} ties with ${computerChoice}`;
      break;
    case "human":
      header = "You win this round!";
      subheader = `${capitalizeFirstLetter(
        playerChoice
      )} beats ${computerChoice}`;
      break;
    case "computer":
      header = "You lose this round!";
      subheader = `${capitalizeFirstLetter(
        playerChoice
      )} loses to ${computerChoice}`;
      break;
  }

  roundHeader.textContent = header;
  roundSubheader.textContent = subheader;
  humanScoreboard.textContent = `PLAYER: ${humanScore}`;
  computerScoreboard.textContent = `COMPUTER: ${computerScore}`;
}

function reportWinner() {
  let message = "";
  if (humanScore > computerScore) {
    message = "You won!";
  } else {
    message = "You lost!";
  }
  endgameMessage.textContent = message;
}

function openModal() {
  endgameModal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal() {
  endgameModal.classList.remove("active");
  overlay.classList.remove("active");
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function newGame() {
  humanScore = 0;
  computerScore = 0;
  roundHeader.textContent = "Click below to play!";
  roundSubheader.textContent = "First to five points wins";
  humanScoreboard.textContent = `PLAYER: ${humanScore}`;
  computerScoreboard.textContent = `COMPUTER: ${computerScore}`;
  humanSign.textContent = "?";
  computerSign.textContent = "?";
  closeModal();
}
