let playerScore = 0;
let computerScore = 0;
const rps = ["rock", "paper", "scissors"];

function getComputerChoice() {
	let choice = Math.random() * 100;

	if (choice >= 67) return rps[2];
	else if (choice >= 33) return rps[1];
	else return rps[0];
}

function getPlayerChoice() {
	let i = -1;
	let choice = prompt("What do you pick? Rock, paper or scissors?");
	while (++i < rps.length) {
		if (choice.toLowerCase() === rps[i]) return rps[i];
	}
	return getPlayerChoice();
}

function rpsLogic(playerChoice, computerChoice) {
	if (
		(playerChoice === "scissors" && computerChoice === "paper") ||
		(playerChoice === "rock" && computerChoice === "scissors") ||
		(playerChoice === "paper" && computerChoice === "rock")
	)
		return true;
	else return false;
}

function playRound(playerChoice, computerChoice) {
	pChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
	cChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
	if (playerChoice === computerChoice) {
		console.log("It's a stalemate. Go again!");
	} else if (rpsLogic(playerChoice, computerChoice)) {
		console.log(
			`You won this round. Your ${pChoice} beat the computer's ${cChoice}.`
		);
		playerScore++;
	} else {
		console.log(
			`The computer won this round. Its ${cChoice} beat your ${pChoice}.`
		);
		computerScore++;
	}
}

function playBestOfFive() {
	while (playerScore < 3 && computerScore < 3)
		playRound(getPlayerChoice(), getComputerChoice());
	if (playerScore === 3)
		return console.log(`You won this game ${playerScore} to ${computerScore}.`);
	if (computerScore === 3)
		return console.log(
			`The computer won this game ${computerScore} to ${playerScore}.`
		);
}

/* function getPlayerChoice() {
	const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	let choice = "";
	rl.question('What do you pick? Rock, Paper or Scissors? ', (answer) => {
		choice = answer;
  		console.log(`You've picked ${answer}`);
  	rl.close();
});
} */

// playBestOfFive();
