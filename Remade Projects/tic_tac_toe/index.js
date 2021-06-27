const createPlayer = (name, marker) => ({ name, marker });
const players = {};

const gameboardController = (() => {
  let gameboard = [];

  const generate = () => {
    gameboard.push('', '', '', '', '', '', '', '', '');
  }

  const update = (index, marker) => {
    gameboard[index] = marker;
  }

  const clear = () => {
    while (gameboard.length > 0) {
      gameboard.pop();
    }
  }

  // add win conditions

  return { gameboard, generate, update, clear }
})();

const displayController = (() => {
  const body = document.querySelector('body');
  let roundNumber = 1;

  const preGameElements = (() => {
    const generate = () => {
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

    const remove = preGameContainer => {
      const inputs = [...preGameContainer.querySelectorAll('input')];
      const startGameBtn = preGameContainer.querySelector('#start-game-btn');
  
      inputs.forEach((input, index) => {
        index === 0 ? players[input.value] = 'X' : players[input.value] = 'O';
        preGameContainer.removeChild(input);
      });
  
      preGameContainer.removeChild(startGameBtn);
    }

    return { generate, remove }
  })();

  const inGameElements = (() => {
    const generate = () => {
      const preGameContainer = document.querySelector('#pre-game-container');
      const namesP = document.createElement('p');
      const roundNumberP = document.createElement('p');
  
      preGameElements.remove(preGameContainer);
      const [player1, player2] = Object.keys(players);

      namesP.textContent = `${player1}(${players[player1]}) vs. ${player2}(${players[player2]})`
      roundNumberP.textContent = `Round #${roundNumber}`;
  
      preGameContainer.appendChild(namesP);
      preGameContainer.appendChild(roundNumberP);
      preGameContainer.id = 'in-game-container';
    }

    return { generate }
  })();

  const postGameElements = (() => {
    const displayWinner = () => {
      const winnerP = document.createElement('p');
      // winnerP.textContent = // winnerName
      return winnerP;
    }

    const generate = () => {
      // append under InGameElements
      const postGameElements = document.createElement('div');
      const winnerH2 = document.createElement('h2');
      const winnerP = displayWinner();
      const resetGameBtn = document.createElement('button');

      postGameElements.id = 'post-game-elements';
      resetGameBtn.id = 'reset-game-btn';
      winnerH2.textContent = '~~Winner~~';

      [winnerH2, winnerP, resetGameBtn].forEach(el => postGameElements.appendChild(el));
      document.querySelector('body').insertBefore(postGameElements, document.querySelector('#gameboard-container'));
    }

    const remove = () => {
      const postGameElements = document.querySelector('#post-game-elements');
      document.querySelector('body').removeChild(postGameElements);
    }

    return { generate, remove }
  })();

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
    preGameElements.generate();
  })();

  const startGameRender = () => {
    inGameElements.generate();
    gameboard.generate();
  }

  const postGameRender = () => {
    postGameElements.generate();
    // lock board
  }

  const newGameRender = () => {
    postGameElements.remove();
    gameboard.clear();
  }

  return { gameboard, startGameRender, postGameRender, newGameRender }
})();

const eventHandlers = (() => {
  const startGameListener = () =>{
    document.querySelector('#start-game-btn').addEventListener('click', () => {
      gameboardController.generate();
      displayController.startGameRender();
    
      squaresListener();
    });
  }

  const squaresListener = () => {
    [...document.querySelectorAll('.square')].forEach((square, index) => {
      square.addEventListener('click', () => {
        const [player1, player2] = Object.keys(players);
        const marker = gameboardController.gameboard.filter(square => square === '').length % 2 !== 0 ? players[player1] : players[player2];

        gameboardController.update(index, marker);
        displayController.gameboard.update(index, marker);
      });
    });
  }

  const resetGameListener = () => {
    document.querySelector('#reset-game-btn').addEventListener('click', () => {
      gameboardController.clear();
      displayController.newGameRender();
    });
  }

  
  startGameListener();
  // resetGameListener();
})();
