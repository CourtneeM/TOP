const createPlayer = (name, marker) => ({ name, marker });

const gameBoard = (() => {
  let board = ['', '', '',
               '', '', '',
               '', '', ''];

  const placeMarker = (index, marker) => {
    board[index] = marker;
  }

  const resetBoard = () => {
    for (let i = 0; i < board.length; i++) {
      board[i] = '';
    }
  }

  return { board, placeMarker, resetBoard };
})();

const displayController = (() => {
  const playerDetailsContainer = document.querySelector('#player-details-container');
  const gameBoardContainer = document.querySelector('#game-board-container');
  const resultsContainer = document.querySelector('#results-container');
  const gameControlsContainer = document.querySelector('#game-controls-container');

  const generateBoard = () => {
    gameBoard.board.forEach(square => {
      const boardSquare = document.createElement('div');

      boardSquare.classList.add('board-square');
      boardSquare.textContent = square;
      boardSquare.addEventListener('click', e => {
        let index = Array.from(e.target.parentNode.children).indexOf(e.target);
        playGame.takeTurn(index);
      });

      gameBoardContainer.appendChild(boardSquare);
    });
  }

  const updateBoard = (index, marker) => {
    Array.from(gameBoardContainer.children)[index].textContent = marker;
  }

  const clearBoard = () => {
    Array.from(gameBoardContainer.children).forEach(square => square.textContent = '');
    clearWinner();
  }

  const clearWinner = () => {
    resultsContainer.style.display = 'none';
  }

  const disableBoard = () => {
    gameBoardContainer.style['pointer-events'] = 'none';
  }

  const enableBoard = () => {
    gameBoardContainer.style['pointer-events'] = 'auto';
  }

  const players = players => {
    const div = document.createElement('div');

    for (let player of players) {
      let p = document.createElement('p');
      p.textContent = `Player ${player.marker}: ${player.name}`;
      div.appendChild(p);
    }

    playerDetailsContainer.appendChild(div);
  }

  const winner = player => {
    let p = resultsContainer.firstChild ? resultsContainer.firstChild : document.createElement('p');

    if (player) {
      p.textContent = `${player.name} is the winner!`;
    } else {
      p.textContent = "It's a tie!";
    }
    
    if (!resultsContainer.firstChild) {
      resultsContainer.appendChild(p);
    }

    resultsContainer.style.display = 'flex';
  }

  const gameControls = gameOver => {
    let button;

    if (!gameOver) {
      let div = document.createElement('div');
      button = document.createElement('button');
      button.textContent = 'Start Game';
      button.classList.add('controls-btn');
      div.appendChild(button);
      gameControlsContainer.appendChild(div);
    }

    if (gameOver) {
      button = document.querySelector('.controls-btn');
      button.textContent = 'Reset Game';
      button.style.display = 'block';
    }

    button.addEventListener('click', () => {
      button.style.display = 'none';

      if (!gameOver) playGame.startGame();
      if (gameOver) playGame.resetGame();
    });
  }

  const initialize = (player1, player2) => {
    generateBoard();
    gameControls();
    disableBoard();
    players([player1, player2]);
  }

  return { initialize, updateBoard, clearBoard, disableBoard, enableBoard, winner, gameControls };
})();

const playGame = (() => {
  const player1 = createPlayer(prompt('Player 1 name:'), 'X');
  const player2 = createPlayer(prompt('Player 2 name:'), 'O');
  let currentPlayer = player1;
  let gameOver = false;

  const startGame = () => {
    displayController.enableBoard();
  }

  const takeTurn = index => {
    if (gameBoard.board[index]) return;

    gameBoard.placeMarker(index, currentPlayer.marker);
    displayController.updateBoard(index, currentPlayer.marker);
    checkForWin();
    switchPlayer();
  }

  const switchPlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  }

  const checkForWin = () => {
    const winPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    winPositions.forEach(group => {
      if (group.every(position => gameBoard.board[position] === player1.marker)) {
        return endGame(player1);
      } else if (group.every(position => gameBoard.board[position] === player2.marker)) {
        return endGame(player2);
      }
    });

    if (gameBoard.board.every(square => square) && gameOver === false) {
      endGame();
    }
  }

  const endGame = player => {
    displayController.disableBoard();
    gameOver = true;

    displayController.winner(player);
    displayController.gameControls(gameOver);
  }

  const resetGame = () => {
    currentPlayer = player1;
    gameOver = false;
    gameBoard.resetBoard();
    displayController.clearBoard();
    displayController.enableBoard();
  }

  displayController.initialize(player1, player2);  

  return { startGame, takeTurn, resetGame };
  
})();
