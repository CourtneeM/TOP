import Gameboard from './gameboard';
import gameboardDisplay from '../display_controller/gameboard';

const gameplay = (() => {
  let playerGameboard;
  let enemyGameboard;

  const initialSetup = (playerGameboard, enemyGameboard) => {
    playerGameboard.generateGameboard();
    playerGameboard.generateShips();
    enemyGameboard.generateGameboard();
    enemyGameboard.generateShips();

    playerGameboard.placeShip('carrier', 0, 0, 'y');
    playerGameboard.placeShip('battleship', 2, 4, 'x');
    playerGameboard.placeShip('destroyer', 0, 7, 'x');
    playerGameboard.placeShip('submarine', 7, 2, 'y');
    playerGameboard.placeShip('patrol boat', 8, 6, 'x');

    enemyGameboard.placeShip('carrier', 3, 4, 'y');
    enemyGameboard.placeShip('battleship', 1, 2, 'x');
    enemyGameboard.placeShip('destroyer', 4, 1, 'y');
    enemyGameboard.placeShip('submarine', 5, 6, 'x');
    enemyGameboard.placeShip('patrol boat', 9, 8, 'x');
  }

  const generateGameboards = () => {
    playerGameboard = new Gameboard();
    enemyGameboard = new Gameboard();

    return [playerGameboard, enemyGameboard];
  }

  const playGame = (player1Arr, enemyArr, col) => {
    const [player1, playerGameboard] = player1Arr;
    const [enemy, enemyGameboard] = enemyArr;
    const [playerGameboardContainer, enemyGameboardContainer] = document.querySelectorAll('.gameboard-container');
    const rowIndex = [...enemyGameboardContainer.querySelectorAll('.row-container')].indexOf(col.parentElement);
    const colIndex = [...col.parentElement.children].indexOf(col);

    if (enemyGameboard.gameboard[rowIndex][colIndex] === 'X') return;
    if (playerGameboard.allShipsSunk || enemyGameboard.allShipsSunk) return;

    player1.attackEnemyGameboard(enemyGameboard, rowIndex, colIndex);
    gameboardDisplay.renderGameboardAttack(col);
    enemyGameboardContainer.style.pointerEvents = 'none';

    if (enemyGameboard.allShipsSunk) {
      console.log('player')
      gameboardDisplay.renderWinningMessage('Player');
      return;
    }
    
    setTimeout(() => {
      const [enemyRow, enemyCol] = enemy.randomAttack()
      enemy.attackPlayerGameboard(playerGameboard, [enemyRow, enemyCol]);
      gameboardDisplay.renderGameboardAttack([...[...playerGameboardContainer.querySelectorAll('.row-container')][enemyRow].children][enemyCol]);
      enemyGameboardContainer.style.pointerEvents = 'auto';

      if (playerGameboard.allShipsSunk) {
        console.log('enemy')
        gameboardDisplay.renderWinningMessage('Enemy');
      }
    }, 1200);
  }

  return { initialSetup, generateGameboards, playGame }
})();

export default gameplay;

// Player Gameboard
// [
//   ['O', '', '', '', '', '', '', 'O', 'O', 'O'],
//   ['O', '', '', '', '', '', '', '', '', ''],
//   ['O', '', '', '', 'O', 'O', 'O', 'O', '', ''],
//   ['O', '', '', '', '', '', '', '', '', ''],
//   ['O', '', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', '', ''],
//   ['', '', 'O', '', '', '', '', '', '', ''],
//   ['', '', 'O', '', '', '', 'O', 'O', '', ''],
//   ['', '', 'O', '', '', '', '', '', '', ''],
// ]

// Enemy Gameboard
// [
//   ['', '', '', '', '', '', '', '', '', ''],
//   ['', '', 'O', 'O', 'O', 'O', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', 'O', '', '', '', '', ''],
//   ['', 'O', '', '', 'O', '', '', '', '', ''],
//   ['', 'O', '', '', 'O', '', 'O', 'O', 'O', ''],
//   ['', 'O', '', '', 'O', '', '', '', '', ''],
//   ['', '', '', '', 'O', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', 'O', 'O'],
// ]
