const gameControls = (() => {
  const startGame = playerChoice => {
    let computerChoice = gamePlay.computerMove();
    let winnerMessage = gamePlay.declareWinner(gamePlay.checkForWinner(playerChoice, computerChoice));

    displayController.displayMoves(playerChoice, computerChoice);
    displayController.displayWinner(winnerMessage);
  }
  
  const resetGame = () => {
    displayController.clearWinner();
  }

  return { startGame, resetGame }
})();

const gamePlay = (() => {
  const MOVES = {
    'Rock': { win: 'Scissors', lose: 'Paper' },
    'Paper': { win: 'Rock', lose: 'Scissors' },
    'Scissors': { win: 'Paper', lose: 'Rock' }
  }
  let moveChoices = Object.keys(MOVES);

  const computerMove = () => {
    let computerChoice = moveChoices[Math.floor(Math.random() * moveChoices.length)];
    return computerChoice;
  }

  const checkForWinner = (playerChoice, computerChoice) => {
    if (MOVES[playerChoice].win === computerChoice) return 'player';
    if (MOVES[computerChoice].win === playerChoice) return 'computer';
  }

  const declareWinner = (winner) => {
    switch (winner) {
      case 'player': return 'Player wins!';
      case 'computer': return 'Computer wins!';
      default: return "It's a tie!";
    }
  }

  return { computerMove, checkForWinner, declareWinner }
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

  const displayMoves = (playerChoice, computerChoice) => {
    const gameContainer = document.querySelector('#game-container');
    const resultsContainer = document.createElement('div');
    const matchMovesP = document.createElement('p');

    resultsContainer.id = 'results-container';
    matchMovesP.textContent = `${playerChoice} vs. ${computerChoice}`;

    resultsContainer.appendChild(matchMovesP);
    gameContainer.appendChild(resultsContainer);
  }

  const displayWinner = winnerMessage => {
    const resultsContainer = document.querySelector('#results-container');
    const winnerP = document.createElement('p');

    winnerP.textContent = winnerMessage;

    resultsContainer.appendChild(winnerP);

    generateResetBtn();
  }
  
  const clearWinner = () => {
    const gameContainer = document.querySelector('#game-container');
    const resultsContainer = document.querySelector('#results-container');
    const resetBtn = document.querySelector('#reset-btn');

    [resultsContainer, resetBtn].forEach(el => gameContainer.removeChild(el));
  }

  const disableChoiceButtons = () => {
    const choiceButtons = [...document.querySelectorAll('button')];
    choiceButtons.forEach(btn => btn.disabled = true);
  }

  const enableChoiceButtons = () => {
    const choiceButtons = [...document.querySelectorAll('button')];
    choiceButtons.forEach(btn => btn.disabled = false);
  }

  return { displayWinner, displayMoves, clearWinner, disableChoiceButtons, enableChoiceButtons }
})();

const eventHandlers = (() => {
  const choiceButtons = [...document.querySelectorAll('button')];
  
  choiceButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      displayController.disableChoiceButtons();
      gameControls.startGame(e.target.textContent);

      document.querySelector('#reset-btn').addEventListener('click', () => {
        displayController.enableChoiceButtons();
        gameControls.resetGame();
      });
    });
  });
})();
