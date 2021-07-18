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
  gameboardDisplay.renderPlaceShipContainer('Carrier');
})();

const eventHandlers = (() => {
  const playerGameboardClick = (() => {
    const shipsToPlace = ['Battleship', 'Destroyer', 'Submarine', 'Patrol Boat'];
    const playerGameboardCols = [...document.querySelectorAll('.gameboard-container')[0].querySelectorAll('.col-container')];

    playerGameboardCols.forEach(col => {
      col.addEventListener('click', e => {
        if (Object.keys(playerGameboard.shipCoordinates).length === 5) return;

        let shipName = document.querySelector('.current-placement-ship-name').textContent.toLowerCase();
        let clickedRow = [...col.parentElement.parentElement.children].indexOf(col.parentElement) - 1;
        let clickedCol = [...col.parentElement.children].indexOf(col);
        let [xAxisBtn, yAxisBtn] = [...document.querySelectorAll('#orientation-btns-container input')];
        let orientation = xAxisBtn.checked ? xAxisBtn.value : yAxisBtn.value;

console.log(clickedRow, clickedCol);
        let currentShipCoordinates = [];
        if (orientation === 'x') {
          for (let i = clickedCol; i < clickedCol + playerGameboard.ships[shipName].length; i++) {
            currentShipCoordinates.push([clickedRow, i]);
          }
        } else if (orientation === 'y') {
          for (let i = clickedRow; i < clickedRow + playerGameboard.ships[shipName].length; i++) {
            currentShipCoordinates.push([i, clickedCol]);
          } 
        }

        if (document.querySelector('#ship-placement-error-msg')) gameboardDisplay.removeShipPlacementError();
      
        if (playerGameboard.isInvalidShipPlacement(currentShipCoordinates, orientation, playerGameboard, shipName)) {
          gameboardDisplay.renderShipPlacementError();
          return;
        }

        playerGameboard.placeShip(shipName, clickedRow, clickedCol, orientation);
        gameboardDisplay.renderShip(playerGameboard, shipName);

        shipName = shipsToPlace.shift();
        
        gameboardDisplay.removePlaceShipContainer();

        if (Object.keys(playerGameboard.shipCoordinates).length < 5) gameboardDisplay.renderPlaceShipContainer(shipName);
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
  })();

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
