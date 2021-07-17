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
  gameboardDisplay.renderPlacePlayerShips();
})();

const eventHandlers = (() => {
  const placeShips = (() => {
    [...document.querySelectorAll('.current-placement-ship-container')].forEach(container => {
      container.addEventListener('dragend', (e) => {
        playerGameboardClick();
      });
    });
  })();

  const playerGameboardClick = () => {
    [...document.querySelectorAll('.gameboard-container')[0].querySelectorAll('.col-container')].forEach(col => {
      col.addEventListener('drop', e => {
        e.preventDefault();
        console.log('ayy');
      });
    });
    // on load display the first ship to place, below the gameboard
    // Place Ships:
    // Carrier [o]x []y

    // on player square click, take the value of the current ship to place and then
    // playerGameboard.placeShip(currentShip, clickedSquareRow, clickedSquareCol, orientationRadioValue)

    // after placing the first ship, change the first ship to place to the next ship to place and repeat

    // make sure each placement is a valid move
    // playerGameboard.isInvalidShipPlacement(clickedSquareRow, clickedSquareCol)

    // playerGameboard.placeShip('carrier', 0, 0, 'y');
    // playerGameboard.placeShip('battleship', 2, 4, 'x');
    // playerGameboard.placeShip('destroyer', 0, 7, 'x');
    // playerGameboard.placeShip('submarine', 7, 2, 'y');
    // playerGameboard.placeShip('patrol boat', 8, 6, 'x');
  };

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
