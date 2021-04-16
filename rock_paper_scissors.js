const MOVES = ['rock', 'paper', 'scissors'];
const WIN_CONDITIONS = {
  rock: { beat: 'scissors' },
  paper: { beat: 'rock' },
  scissors: { beat: 'paper' }
}

function playerPlay() {
  let randomMove = Math.floor(Math.random() * 3);
  return MOVES[randomMove];
}

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

function game() {
  let score = { player: 0, computer: 0 }

   while (score.player < 5 && score.computer < 5) {
    let playerMove = playerPlay();
    let computerMove = computerPlay();
    
    console.log(playRound(playerMove, computerMove, score));
    console.log(score);
  }
  
  if (score.player === 5) {
    return "Congrats! You won 5 rounds!"
  } else {
    return "Sorry, you lost 5 rounds!" 
  }
}

console.log(game());
