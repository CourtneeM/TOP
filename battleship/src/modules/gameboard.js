import Ship from './ship';

class Gameboard {
  constructor() {
    this.size = 10;
    this.gameboard = this.generateGameboard();
    this.shipsNotPlaced = ['carrier', 'battleship', 'destroyer', 'submarine', 'patrol boat'];
    this.ships = {};
    this.shipCoordinates = {};
    this.missedShots = [];
    this.allShipsSunk = false;
  }

  generateShips() {
    this.shipsNotPlaced.forEach(shipName => {
      this.ships[shipName] = new Ship(shipName);
    });
  }

  generateGameboard() {
    const gameboard = [];
    for (let i = 0; i < 10; i++) {
      const row = [];
      
      for (let j = 0; j < 10; j++) {
        row.push('');
      }

      gameboard.push(row);
    }

    this.gameboard = gameboard;
  }

  // resetGameboard() {

  // }

  placeShip(shipName, initialRow, initialCol, axis) {
    if (!this.shipsNotPlaced.includes(shipName)) return;
    
    this.shipsNotPlaced.splice(this.shipsNotPlaced.indexOf(shipName), 1);

    if (axis === 'x') {
      for (let i = initialCol; i < initialCol + this.ships[shipName].length; i++) {
        this.gameboard[initialRow].splice(i, 1, shipName[0]);
        this.shipCoordinates[shipName] ? this.shipCoordinates[shipName].push([initialRow, i]) : this.shipCoordinates[shipName] = [[initialRow, i]];
      }
    } else if (axis === 'y') {
      for (let i = initialRow; i < initialRow + this.ships[shipName].length; i++) {
        this.gameboard[i].splice(initialCol, 1, shipName[0]);
        this.shipCoordinates[shipName] ? this.shipCoordinates[shipName].push([i, initialCol]) : this.shipCoordinates[shipName] = [[i, initialCol]];
      }
    }
  }

  receiveAttack(row, col) {
    let hitShip = false;

    if (this.gameboard[row][col] !== '' || this.gameboard[row][col] !== 'X') {
      for (let ship in this.shipCoordinates) {
        this.shipCoordinates[ship].forEach((coordinate, index) => {
          const [shipRow, shipCol] = coordinate;
          if (shipRow === row && shipCol === col) {
            this.ships[ship].takeHit(index);
            hitShip = ship;
          }
        });
      }
    }

    if (!hitShip) {
      if (this.missedShots.length > 0) {
        if (this.missedShots.filter(coordinate => row === coordinate[0] && col === coordinate[1]).length > 0) return;
      }
      
      this.missedShots.push([row, col]);
    }
    
    this.gameboard[row][col] = 'X';
    this.checkIfAllShipsSunk();
  }

  checkIfAllShipsSunk() {
    const shipNames = Object.keys(this.ships);

    if (shipNames.every(shipName => this.ships[shipName].isSunk())) this.allShipsSunk = true;
  }
}

export default Gameboard;

// module.exports = Gameboard;
