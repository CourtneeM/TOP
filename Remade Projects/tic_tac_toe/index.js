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
  const players = {};
  let roundNumber = 1;
  
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

  const generateInGameElements = () => {
    const preGameContainer = document.querySelector('#pre-game-container');
    const inputs = [...preGameContainer.querySelectorAll('input')];
    const startGameBtn = preGameContainer.querySelector('#start-game-btn');
    const namesP = document.createElement('p');
    const roundNumberP = document.createElement('p');

    inputs.forEach((input, index) => {
      index === 0 ? players[input.value] = 'X' : players[input.value] = 'O';
      preGameContainer.removeChild(input);
    });

    preGameContainer.removeChild(startGameBtn);

    namesP.textContent = `${Object.keys(players)[0]} vs. ${Object.keys(players)[1]}`
    roundNumberP.textContent = `Round #${roundNumber}`;

    preGameContainer.appendChild(namesP);
    preGameContainer.appendChild(roundNumberP);
  }

  const generatePostGameElements = () => {
    // append under InGameElements
    // display \\Winner//
    //         Player Name

    // Add reset button that clears the gameboard, but not names
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

  return { generateInGameElements, gameboard }
})();

const eventHandlers = (() => {
  document.querySelector('#start-game-btn').addEventListener('click', displayController.generateInGameElements);
})();
