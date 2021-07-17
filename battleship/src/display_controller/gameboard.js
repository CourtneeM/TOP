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

  return { renderGameboards, renderGameboardAttack, renderWinningMessage }
})();

export default gameboard;
