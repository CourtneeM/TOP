const createPlayer = (name, marker) => ({ name, marker });

const gameBoard = (() => {
  let board = ['', '', '',
               '', '', '',
               '', '', ''];

  const placeMarker = (index, marker) => {
    board[index] = marker;
  }

  return { board, placeMarker };
})();

const displayController = (() => {
  const gameBoardContainer = document.querySelector('#game-board-container');
  const playerDetailsContainer = document.querySelector('#player-details-container');
  const resultsContainer = document.querySelector('#results-container');

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
    while(gameBoardContainer.firstChild) {
      gameBoardContainer.removeChild(gameBoardContainer.firstChild);
    }
  }

  const disableBoard = () => {
    gameBoardContainer.style['pointer-events'] = 'none';
  }

  const displayPlayers = (players) => {
    const div = document.createElement('div');

    for (let player of players) {
      let p = document.createElement('p');
      p.textContent = `Player ${player.marker}: ${player.name}`;
      div.appendChild(p);
    }

    playerDetailsContainer.appendChild(div);
  }

  const displayWinner = (player) => {
    let p = document.createElement('p');

    if (player) {
      p.textContent = `${player.name} is the winner!`;
    } else {
      p.textContent = "It's a tie!";
    }
    
    resultsContainer.appendChild(p);
    resultsContainer.style.display = 'flex';
  }

  return { generateBoard, updateBoard, clearBoard, disableBoard, displayPlayers, displayWinner };
})();

const playGame = (() => {
  const player1 = createPlayer(prompt('Player 1 name:'), 'X');
  const player2 = createPlayer(prompt('Player 2 name:'), 'O');
  let currentPlayer = player1;
  let gameOver = false;

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

  const endGame = player => {
    displayController.disableBoard();
    gameOver = true;

    displayController.displayWinner(player);
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
  
  displayController.generateBoard();
  displayController.displayPlayers([player1, player2]);

  return { takeTurn };
  
})();
