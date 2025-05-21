function getComputerChoice() {
  let computerChoice;
  const randomValue = Math.floor(Math.random() * 3) + 1;
  if (randomValue === 1) {
    computerChoice = "rock";
  } else if (randomValue === 2) {
    computerChoice = "paper";
  } else if (randomValue === 3) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Make your choice: rock, paper, scissors");
  return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  let humanWins = true;

  if (humanChoice === computerChoice) {
    return `It's a tie! You both played ${humanChoice}.`;
  }

  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    humanWins = false;
  }

  if (humanWins) {
    humanScore += 1;
    return `You win! ${capitalizeFirstLetter(
      humanChoice
    )} beats ${computerChoice}.`;
  } else {
    computerScore += 1;
    return `You lose! ${capitalizeFirstLetter(
      computerChoice
    )} beats ${humanChoice}.`;
  }
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

let humanScore = 0;
let computerScore = 0;

const log = console.log;
// log("Hello World");
// log(getComputerChoice());
// log(getHumanChoice());

// const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();
// log(playRound(humanChoice, computerChoice));
