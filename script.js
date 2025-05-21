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
  // while (
  //   humanChoice !== "rock" &&
  //   humanChoice !== "paper" &&
  //   humanChoice !== "scissors"
  // ) {
  //   humanChoice = prompt(
  //     "You must choose either 'rock' 'paper' or 'scissors' (case-sensitve)"
  //   );
  // }
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;


const log = console.log;
// log("Hello World");
// log(getComputerChoice());
// log(getHumanChoice());
