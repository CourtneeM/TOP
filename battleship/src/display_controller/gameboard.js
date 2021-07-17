import player from '../modules/player';
import '../styles/gameboard/style.css';

const gameboard = (() => {
  const generateGameboardContainer = (name, gameboard) => {
    const gameboardContainer = document.createElement('div');
    const gameboardHeader = document.createElement('p');

    gameboardContainer.classList.add('gameboard-container');
    gameboardHeader.classList.add('gameboard-header');

    gameboardHeader.textContent = name;
    gameboardContainer.appendChild(gameboardHeader);

    gameboard.forEach(row => {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row-container');
      row.forEach(col => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-container');
        colDiv.textContent = col;
        rowDiv.appendChild(colDiv);
      });

      gameboardContainer.appendChild(rowDiv);
    });

    return gameboardContainer;
  };

  const renderGameboards = (gameboards) => {
    const names = ['Player', 'Enemy'];
    gameboards.forEach((gameboard, index) => {
      document.querySelector('body').appendChild(generateGameboardContainer(names[index], gameboard));
    });
  }

  const renderGameboardAttack = (col) => {
    if (col.textContent === 'X') return;

    col.textContent = 'X';
    col.classList.add('attacked');
  }

  const generatePlacePlayerShips = () => {
    const placePlayerShipsDiv = document.createElement('div');
    const placePlayerShipsP = document.createElement('p');
    const ships = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol Boat'];

    placePlayerShipsDiv.id = 'place-player-ships-container';
    placePlayerShipsP.textContent = 'Place your ships (select a ship and click a starting square on the board)';

    const shipElements = ships.map(ship => {
      const shipDiv = document.createElement('div');
      const shipP = document.createElement('p');
      const radioBtnsDiv = document.createElement('div');
      const radioOptions = ['x-axis', 'y-axis'];

      shipDiv.classList.add('current-placement-ship-container');
      shipP.classList.add('current-placement-ship-name');

      shipDiv.draggable = true;
      shipP.textContent = ship;

      radioOptions.forEach((option, i) => {
        const label = document.createElement('label');
        const radioBtn = document.createElement('input');

        label.classList.add(`${option}-option`);
        radioBtn.classList.add(`${option}-option-btn`);

        label.textContent = option;
        radioBtn.setAttribute('type', 'radio');
        radioBtn.setAttribute('value', option[0]);
        radioBtn.setAttribute('for', 'ship-placement');

        if (i === 0) radioBtn.checked = true;
        
        label.appendChild(radioBtn);
        radioBtnsDiv.appendChild(label);
      });

      [shipP, radioBtnsDiv].forEach(el => shipDiv.appendChild(el));

      return shipDiv;
    });

    placePlayerShipsDiv.appendChild(placePlayerShipsP);
    shipElements.forEach(el => placePlayerShipsDiv.appendChild(el));
    return placePlayerShipsDiv;
  }

  const renderPlacePlayerShips = () => {
    document.querySelectorAll('.gameboard-container')[0].appendChild(generatePlacePlayerShips());
  }

  const generateWinningMessage = winner => {
    const winningMessageDiv = document.createElement('div');
    const winningMessageP = document.createElement('p');

    winningMessageDiv.id = 'winning-message-div';
    winningMessageP.id = 'winning-message';

    winningMessageP.textContent = `${winner} is the winner!`;
    winningMessageDiv.appendChild(winningMessageP);

    return winningMessageDiv;
  }

  const renderWinningMessage = winner => {
    document.querySelector('body').appendChild(generateWinningMessage(winner));
  }

  return { renderGameboards, renderGameboardAttack, renderPlacePlayerShips, renderWinningMessage }
})();

export default gameboard;
