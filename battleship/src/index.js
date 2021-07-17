import player from './modules/player';
import enemyComputer from './modules/enemyComputer';
import gameplay from './modules/gameplay';
import gameboardDisplay from './display_controller/gameboard';

const player1 = player();
const enemy = enemyComputer();

const [playerGameboard, enemyGameboard] = gameplay.generateGameboards();

const initialSetup = (() => {
  gameplay.initialSetup(playerGameboard, enemyGameboard);
  gameboardDisplay.renderGameboards([playerGameboard.gameboard, enemyGameboard.gameboard]);
})();

const eventHandlers = (() => {
  const enemyGameboardClick = (() => {
    const enemyGameboardListener = () => {
      const enemyGameboardContainer = [...document.querySelectorAll('.gameboard-container')][1];
      const enemyGameboardCols = [...enemyGameboardContainer.querySelectorAll('.col-container')];
      enemyGameboardCols.forEach(col => {
        col.addEventListener('click', () => {
          gameplay.playGame([player1, playerGameboard], [enemy, enemyGameboard], col);
        });
      });
    }

    return { enemyGameboardListener }
  })();
  
  const initialHandlers = (() => {
    enemyGameboardClick.enemyGameboardListener();
  })();
})();

// only make enemy gameboard squares clickable

// carrier, 5
// battleship, 4
// destroyer, 3
// submarine, 3
// patrol boat, 2
