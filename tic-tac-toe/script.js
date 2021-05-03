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


const playGame = (() => {  
  const createPlayer = (name, marker) => ({ name, marker });

  const player1 = createPlayer('mark', 'X');
  const player2 = createPlayer('sally', 'O');
  let marker = player1.marker;

  const placeMarker = (index)=> {
    if (gameBoard.board[index]) return;
    gameBoard.board[index] = marker;
    displayController.clearBoard();
    displayController.generateBoard();
    marker === player1.marker ? marker = player2.marker : marker = player1.marker;
  }

  displayController.generateBoard();

  return { placeMarker };
  
})();
