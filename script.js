// GAME

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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  let humanChoice;
  let computerChoice;

  function playRound(humanChoice, computerChoice, roundNumber) {
    let humanWins = true;
    let message;

    if (humanChoice === computerChoice) {
      message = `Round ${roundNumber} is a tie! You both played ${humanChoice}.`;
      console.log(message);
      return;
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
      message = `You win round ${roundNumber}! ${capitalizeFirstLetter(
        humanChoice
      )} beats ${computerChoice}.`;
    } else {
      computerScore += 1;
      message = `You lose round ${roundNumber}! ${capitalizeFirstLetter(
        computerChoice
      )} beats ${humanChoice}.`;
    }

    console.log(message);
  }

  for (let i = 0; i < 5; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice, i + 1);
  }

  reportWinner(humanScore, computerScore);
}

function reportWinner(humanScore, computerScore) {
  let message = `With a score of ${humanScore} to ${computerScore}, `;
  if (humanScore > computerScore) {
    message += `you win!`;
  } else if (computerScore > humanScore) {
    message += `you lose!`;
  } else {
    message += `it's a tie!`;
  }
  console.log(message);
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

playGame();

// UI

