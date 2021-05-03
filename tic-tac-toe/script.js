const gameBoard = (() => {
  let board = [0, 1, 2,
               3, 4, 5,
               6, 7, 8];

  return { board };
})();

const displayController = (() => {
  const gameBoardContainer = document.querySelector('#game-board-container');

  const initializeBoard = () => {
    gameBoard.board.forEach(square => {
      const boardSquare = document.createElement('div');
      boardSquare.classList.add('board-square');
      boardSquare.textContent = square;
      gameBoardContainer.appendChild(boardSquare);
    });
  }

  return { initializeBoard };
})();

const createPlayer = (name, marker) => {
  return {
    name,
    marker
  }
}

let player1 = createPlayer('mark', 'X');
let player2 = createPlayer('sally', 'O');

const playGame = (() => {
  displayController.initializeBoard();
})();
