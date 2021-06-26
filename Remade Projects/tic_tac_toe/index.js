const createPlayer = (name, marker) => ({ name, marker });

const gameboardController = (() => {
  let gameboard = [];

  const generateGameboard = () => {
    gameboard.push('', '', '', '', '', '', '', '', '');
  }

  const updateGameboard = (index, marker) => {
    gameboard[index] = marker;
  }

  const clearGameboard = () => {
    while (gameboard.length > 0) {
      gameboard.pop();
    }
  }

  return { gameboard, generateGameboard,updateGameboard, clearGameboard }
})();

const displayController = (() => {
  const body = document.querySelector('body');
  
  const generatePreGameElements = () => {
    const preGameContainer = document.createElement('div');
    const h1 = document.createElement('h1');
    const player1NameInput = document.createElement('input');
    const player2NameInput = document.createElement('input');
    const startGameBtn = document.createElement('button');

    preGameContainer.id = 'pre-game-container';
    player1NameInput.id = 'player1-name-input';
    player2NameInput.id = 'player2-name-input';
    startGameBtn.id = 'start-game-btn';

    h1.textContent = 'Tic-Tac-Toe';
    player1NameInput.value = 'Player 1';
    player2NameInput.value = 'Computer';
    startGameBtn.textContent = 'Start Game';

    [h1, player1NameInput, player2NameInput, startGameBtn].forEach(el => preGameContainer.appendChild(el));
    body.appendChild(preGameContainer);
  }

  const generatePostGameElements = () => {
    
  }

  const gameboard = (() => {
    const generate = () => {
      const gameboardSquares = 9;
      const gameboardContainer = document.createElement('div');
      gameboardContainer.id = 'gameboard-container';
  
      for (let i = 0; i < gameboardSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        gameboardContainer.appendChild(square);
      }
  
      body.appendChild(gameboardContainer);
    }

    const update = (index, marker) => {
      const squares = [...document.querySelectorAll('.square')];
      squares[index].textContent = marker;
    }
  
    const clear = () => {
      const squares = [...document.querySelectorAll('.square')];
      squares.forEach(square => square.textContent = '');
    }

    return { generate, update, clear }
  })();

  (function initialRender() {
    generatePreGameElements();
    gameboard.generate();
  })();

  return { gameboard }
})();

const eventHandlers = (() => {

})();
