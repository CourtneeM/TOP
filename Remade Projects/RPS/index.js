const gameControls = (() => {
  const startGame = playerChoice => {
    let winnerMessage = gamePlay.declareWinner(gamePlay.checkForWinner(playerChoice));
    displayController.displayWinner(winnerMessage);
  }
  
  const resetGame = () => {

  }

  return { startGame, resetGame }
})();

const gamePlay = (() => {
  const MOVES = {
    'rock': { win: 'scissors', lose: 'paper' },
    'paper': { win: 'rock', lose: 'scissors' },
    'scissors': { win: 'paper', lose: 'rock' }
  }
  let moveChoices = Object.keys(MOVES);

  const computerMove = () => {
    let computerChoice = moveChoices[Math.floor(Math.random() * moveChoices.length)];
    return computerChoice;
  }

  const checkForWinner = playerChoice => {
    let computerChoice = computerMove();

    if (MOVES[playerChoice.toLowerCase()].win === computerChoice) return 'player';
    if (MOVES[computerChoice].win === playerChoice.toLowerCase()) return 'computer';
  }

  const declareWinner = (winner) => {
    switch (winner) {
      case 'player': return 'Player wins!';
      case 'computer': return 'Computer wins!';
      default: return "It's a tie!";
    }
  }

  return { checkForWinner, declareWinner }
})();

const displayController = (() => {
  (function generateGameElements() {
    const gameContainer = document.createElement('div');
    const rockBtn = document.createElement('button');
    const paperBtn = document.createElement('button');
    const scissorsBtn = document.createElement('button');

    gameContainer.id = 'game-container';
    rockBtn.id = 'rock-btn';
    paperBtn.id = 'paper-btn';
    scissorsBtn.id = 'scissors-btn';

    rockBtn.textContent = 'Rock';
    paperBtn.textContent = 'Paper';
    scissorsBtn.textContent = 'Scissors';

    [rockBtn, paperBtn, scissorsBtn].forEach(btn => gameContainer.appendChild(btn));
    document.querySelector('body').appendChild(gameContainer);
  })();

  const generateResetBtn = () => {
    const gameContainer = document.querySelector('#game-container');
    const resetBtn = document.createElement('button');

    resetBtn.id = 'reset-btn';
    resetBtn.textContent = 'Reset';

    gameContainer.appendChild(resetBtn);
  }

  const displayWinner = winnerMessage => {
    const winnerP = document.createElement('p');
    let gameContainer = document.querySelector('#game-container');

    winnerP.id = 'winner-container';
    winnerP.textContent = winnerMessage;
    gameContainer.appendChild(winnerP);

    generateResetBtn();
  }
  
  const clearWinner = () => {
    const gameContainer = document.querySelector('#game-container');
    const winnerP = document.querySelector('#winner-container');
    const resetBtn = document.querySelector('#reset-btn');

    [winnerP, resetBtn].forEach(el => gameContainer.removeChild(el));
  }

  return { displayWinner, clearWinner }
})();

const eventHandlers = (() => {
  const choiceButtons = [...document.querySelectorAll('button')];
  
  choiceButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      gameControls.startGame(e.target.textContent);

      document.querySelector('#reset-btn').addEventListener('click', () => {
        gameControls.resetGame();
      });
    });
  });
})();