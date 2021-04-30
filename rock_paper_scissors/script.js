const roundResultsContainer = document.querySelector('#round-results');
const scoreContainer = document.querySelector('#score');

const MOVES = ['rock', 'paper', 'scissors'];
const WIN_CONDITIONS = {
  rock: { beat: 'scissors' },
  paper: { beat: 'rock' },
  scissors: { beat: 'paper' }
}

const ROUNDS_TO_WIN = 5;

function computerPlay() {
  let randomMove = Math.floor(Math.random() * 3);
  return MOVES[randomMove]; 
}

function playRound(playerSelection, computerSelection, score) {
  if (WIN_CONDITIONS[playerSelection].beat === computerSelection) {
    score.player += 1;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else if (WIN_CONDITIONS[computerSelection].beat === playerSelection) {
    score.computer += 1;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  } else {
    return 'It\'s a tie!'; 
  }
}

let score = { player: 0, computer: 0 }
scoreContainer.textContent = `Player: ${score.player} | Computer: ${score.computer}`;
function game(playerMove) {
   if (score.player < ROUNDS_TO_WIN && score.computer < ROUNDS_TO_WIN) {
    let computerMove = computerPlay();
    
    roundResultsContainer.textContent = playRound(playerMove, computerMove, score);
    scoreContainer.textContent = `Player: ${score.player} | Computer: ${score.computer}`;
  }
  
  if (score.player === ROUNDS_TO_WIN) {
    roundResultsContainer.textContent = "Congrats! You won 5 rounds!";
  } else if (score.computer === ROUNDS_TO_WIN) {
    roundResultsContainer.textContent = "Sorry, you lost 5 rounds!"; 
  }
}

const choices = document.querySelectorAll('#choices-container > p');
choices.forEach(choice => {
  choice.addEventListener('click', e => game(e.target.textContent));
});
