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

  return { generateBoard, updateBoard, clearBoard, disableBoard };
})();

const playGame = (() => {  
  const player1 = createPlayer('mark', 'X');
  const player2 = createPlayer('sally', 'O');
  let currentPlayer = player1;

  const takeTurn = index => {
    if (gameBoard.board[index]) return;

    gameBoard.placeMarker(index, currentPlayer.marker);
    displayController.updateBoard(index, currentPlayer.marker);
    checkForWin();

    currentPlayer = currentPlayer === player1 ? player2 : player1;
  }

  const endGame = player => {
    alert(`${player.name} is the winner!`);
    displayController.disableBoard();
  }

  const checkForWin = () => {
    const board = gameBoard.board;
    const winConditions = [[...board.slice(0, 3)], [...board.slice(3, 6)], [...board.slice(6, 9)],
                           [board[0], board[3], board[6]], [board[1], board[4], board[7]], [board[2], board[5], board[8]],
                           [board[0], board[4], board[8]], [board[2], board[4], board[6]]];
    
    winConditions.filter(condition => {
      if (condition.every(marker => marker === player1.marker)) {
        return endGame(player1);
      } else if (condition.every(marker => marker === player2.marker)) {
        return endGame(player2);
      }
    });

    if (board.every(square => square)) {
      alert("It's a tie!");
    }
  }
  
  displayController.generateBoard();

  return { takeTurn };
  
})();
