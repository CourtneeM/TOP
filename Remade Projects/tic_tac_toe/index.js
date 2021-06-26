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
  const generateGameboard = () => {

  }

  const updateGameboard = (index, marker) => {

  }

  const clearGameboard = () => {

  }
  
  return { generateGameboard, updateGameboard, clearGameboard }
})();

const eventHandlers = (() => {

})();
