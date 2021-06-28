const createPlayer = (name, marker) => { 
  return { name, marker }
};
const players = {};
let numPlayers;

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

  const checkForEmptySquare = index => gameboardController.gameboard[index] === '';

  const checkForWinner = marker => {
    const winningMoves = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    const currentGameboard = winningMoves.map(move => [gameboard[move[0]], gameboard[move[1]], gameboard[move[2]]])
    let winner = false;
    currentGameboard.forEach(winningCombination => {
      if (winningCombination.every(combo => combo === marker)) winner = true;
    });

    return winner;
  }

  return { gameboard, generate, update, clear, checkForEmptySquare, checkForWinner }
})();

const playerTurn = (index, marker) => {
  gameboardController.update(index, marker);
  displayController.gameboard.update(index, marker);
}

const computerTurn = () => {

}

const displayController = (() => {
  const body = document.querySelector('body');

  const preGameElements = (() => {
    const generate = () => {
      const generateNumPlayersElements = () => {
        const numPlayersContainer = document.createElement('div');
        const onePlayerLabel = document.createElement('label');
        const onePlayerRadio = document.createElement('input');
        const twoPlayersLabel = document.createElement('label');
        const twoPlayersRadio = document.createElement('input');

        numPlayersContainer.id = 'num-players-container';
        onePlayerRadio.id = 'one-player-radio';
        twoPlayersRadio.id = 'two-players-radio';

        onePlayerRadio.setAttribute('type', 'radio');
        onePlayerRadio.setAttribute('name', 'num-players');
        onePlayerRadio.setAttribute('value', '1 Player');
        onePlayerRadio.setAttribute('checked', true);

        twoPlayersRadio.setAttribute('type', 'radio');
        twoPlayersRadio.setAttribute('name', 'num-players');
        twoPlayersRadio.setAttribute('value', '2 Players');

        onePlayerLabel.textContent = '1 Player';
        twoPlayersLabel.textContent = '2 Players';

        onePlayerLabel.appendChild(onePlayerRadio);
        twoPlayersLabel.appendChild(twoPlayersRadio);
        [onePlayerLabel, twoPlayersLabel].forEach(el => numPlayersContainer.appendChild(el));

        return numPlayersContainer;
      }

      const generateInputElements = () => {
        const inputsContainer = document.createElement('div');
        const player1NameInput = document.createElement('input');
        const player2NameInput = document.createElement('input');

        inputsContainer.id = 'inputs-container';
        player1NameInput.id = 'player1-name-input';
        player2NameInput.id = 'player2-name-input';

        player1NameInput.value = 'Player 1';
        player2NameInput.value = 'Computer';

        player2NameInput.disabled = true;

        [player1NameInput, player2NameInput].forEach(el => inputsContainer.appendChild(el));

        return inputsContainer;
      }

      const preGameContainer = document.createElement('div');
      const h1 = document.createElement('h1');
      const numPlayersContainer = generateNumPlayersElements();
      const inputsContainer = generateInputElements();
      const startGameBtn = document.createElement('button');
  
      preGameContainer.id = 'pre-game-container';
      startGameBtn.id = 'start-game-btn';
      
      h1.textContent = 'Tic-Tac-Toe';
      startGameBtn.textContent = 'Start Game';

      [h1, numPlayersContainer, inputsContainer, startGameBtn].forEach(el => preGameContainer.appendChild(el));
      body.appendChild(preGameContainer);
    }

    const remove = preGameContainer => {
      const numPlayerRadios = [...document.querySelector('#num-players-container').querySelectorAll('input')];
      const nameInputs = [...document.querySelector('#inputs-container').querySelectorAll('input')];
      const startGameBtn = preGameContainer.querySelector('#start-game-btn');

      numPlayers = numPlayerRadios.filter(radio => radio.checked)[0].value;

      nameInputs.forEach((input, index) => {
        const marker = index === 0 ? 'X' : 'O';
        const player = createPlayer(input.value, marker);
        players[player.name] = player.marker;
      });

      preGameContainer.removeChild(document.querySelector('#num-players-container'));
      preGameContainer.removeChild(document.querySelector('#inputs-container'));
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

      roundNumberP.id = 'round-number';

      namesP.textContent = `${player1}(${players[player1]}) vs. ${player2}(${players[player2]})`
      roundNumberP.textContent = `Round #1`;
  
      preGameContainer.appendChild(namesP);
      preGameContainer.appendChild(roundNumberP);
      preGameContainer.id = 'in-game-container';
    }

    return { generate }
  })();

  const postGameElements = (() => {
    const displayWinner = (winner) => {
      const winnerP = document.createElement('p');
      winnerP.textContent = winner
      return winnerP;
    }

    const generate = winner => {
      // append under InGameElements
      const postGameElements = document.createElement('div');
      const winnerH2 = document.createElement('h2');
      const winnerP = displayWinner(winner);
      const newGameBtn = document.createElement('button');

      postGameElements.id = 'post-game-elements';
      newGameBtn.id = 'new-game-btn';
      winnerH2.textContent = '~~Winner~~';
      newGameBtn.textContent = 'New Game';

      [winnerH2, winnerP, newGameBtn].forEach(el => postGameElements.appendChild(el));
      document.querySelector('body').insertBefore(postGameElements, document.querySelector('#gameboard-container'));
    }

    const remove = () => {
      const postGameElements = document.querySelector('#post-game-elements');
      document.querySelector('body').removeChild(postGameElements);
    }

    const disableBoard = () => document.querySelector('#gameboard-container').style.pointerEvents = 'none';

    const enableBoard = () => document.querySelector('#gameboard-container').style.pointerEvents = 'auto';

    return { generate, remove, disableBoard, enableBoard }
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

  const roundNumberHandler = (() => {
    let roundNumber = 1;
    
    const increment = () => {
      const roundNumberP = document.querySelector('#round-number');
      roundNumber += 1;
      roundNumberP.textContent = `Round #${roundNumber}`;
    }

    const resetRoundNumber = () => {
      const roundNumberP = document.querySelector('#round-number');
      roundNumber = 1;
      roundNumberP.textContent = `Round #${roundNumber}`;
    }

    return { increment, resetRoundNumber }
  })();

  (function initialRender() {
    preGameElements.generate();
  })();

  const startGameRender = () => {
    inGameElements.generate();
    gameboard.generate();
  }

  const postGameRender = (winner) => {
    postGameElements.generate(winner);
    postGameElements.disableBoard();
  }

  const newGameRender = () => {
    postGameElements.remove();
    postGameElements.enableBoard();
    gameboard.clear();
    roundNumberHandler.resetRoundNumber();
  }

  return { gameboard, startGameRender, postGameRender, newGameRender, roundNumberHandler }
})();

const eventHandlers = (() => {
  const numPlayersListener = (() => {
    const radioBtns = [...document.querySelector('#num-players-container').querySelectorAll('input')];
    const nameInputs = [...document.querySelector('#inputs-container').querySelectorAll('input')];

    radioBtns.forEach(radio => {
      radio.addEventListener('click', () => {
        if (radio.value === '1 Player') {
          nameInputs[1].disabled =  true;
          nameInputs[1].value = 'Computer';
        } else {
          nameInputs[1].disabled = false
          nameInputs[1].value = 'Player 2';
        }
      });
    });
  })();

  const startGameListener = () =>{
    document.querySelector('#start-game-btn').addEventListener('click', () => {
      gameboardController.generate();
      displayController.startGameRender();
    
      squaresListener();
    });
  }

  const squaresListener = () => {
    const winEvent =  marker => {
      const winner = `${Object.keys(players)[Object.values(players).indexOf(marker)]}(${marker})`;
      displayController.postGameRender(winner);
      newGameListener();
    }
    
    [...document.querySelectorAll('.square')].forEach((square, index) => {
      square.addEventListener('click', () => {
        const [player1, player2] = Object.keys(players);        
        if (numPlayers === '2 Players') { 
          const marker = gameboardController.gameboard.filter(square => square === '').length % 2 !== 0 ? players[player1] : players[player2];
        
          if (!gameboardController.checkForEmptySquare(index)) return;
          playerTurn(index, marker);
          displayController.roundNumberHandler.increment();
          if (gameboardController.checkForWinner(marker)) return winEvent(marker);
        }

        if (numPlayers === '1 Player') {
          playerTurn(index, players[player1])
          displayController.roundNumberHandler.increment();
          if (gameboardController.checkForWinner(players[player1])) return winEvent(players[player1]);

          computerTurn(players[player2]) // calculate index within function
          displayController.roundNumberHandler.increment();
          if (gameboardController.checkForWinner(players[player2])) return winEvent(players[player2]);
        }
      });
    });
  }

  const newGameListener = () => {
    document.querySelector('#new-game-btn').addEventListener('click', () => {
      gameboardController.clear();
      gameboardController.generate();
      displayController.newGameRender();
    });
  }

  
  startGameListener();
})();
