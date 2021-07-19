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

    enemyGameboard.randomShipPlacement('carrier');
    enemyGameboard.randomShipPlacement('battleship');
    enemyGameboard.randomShipPlacement('destroyer');
    enemyGameboard.randomShipPlacement('submarine');
    enemyGameboard.randomShipPlacement('patrol boat');
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
      gameboardDisplay.renderWinningMessage('Player');
      return;
    }
    
    setTimeout(() => {
      const [enemyRow, enemyCol] = enemy.randomAttack()
      enemy.attackPlayerGameboard(playerGameboard, [enemyRow, enemyCol]);
      gameboardDisplay.renderGameboardAttack([...[...playerGameboardContainer.querySelectorAll('.row-container')][enemyRow].children][enemyCol]);
      enemyGameboardContainer.style.pointerEvents = 'auto';

      if (playerGameboard.allShipsSunk) {
        gameboardDisplay.renderWinningMessage('Enemy');
      }
    }, 1200);
  }

  return { initialSetup, generateGameboards, playGame }
})();

export default gameplay;
