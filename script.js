function getComputerChoice() {
  let computerChoice;
  const randomValue = Math.floor(Math.random() * 3) + 1
  if (randomValue === 1) {
    computerChoice = "rock";
  } else if (randomValue === 2) {
    computerChoice = "paper";
  } else if (randomValue === 3) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

const log = console.log;
// log("Hello World");
// log(getComputerChoice());
