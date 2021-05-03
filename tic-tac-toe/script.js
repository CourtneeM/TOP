const gameBoard = (() => {
  let board = ['', '', '',
               '', '', '',
               '', '', ''];

  return { board };
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
        playGame.placeMarker(index);
      });

      gameBoardContainer.appendChild(boardSquare);
    });
  }

  const clearBoard = () => {
    while(gameBoardContainer.firstChild) {
      gameBoardContainer.removeChild(gameBoardContainer.firstChild);
    }
  }

  return { generateBoard, clearBoard };
})();

const createPlayer = (name, marker) => ({ name, marker });

const player1 = createPlayer('mark', 'X');
const player2 = createPlayer('sally', 'O');

const playGame = (() => {  
  let marker = player1.marker;

  const placeMarker = (index)=> {
    if (gameBoard.board[index]) return;
    gameBoard.board[index] = marker;
    displayController.clearBoard();
    displayController.generateBoard();
    marker === player1.marker ? marker = player2.marker : marker = player1.marker;
    checkForWin();
  }

  const endGame = player => {
    alert(`${player.name} is the winner!`);
    document.querySelector('#game-board-container').style['pointer-events'] = 'none';
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

  return { placeMarker };
  
})();

// check for win, win conditions
