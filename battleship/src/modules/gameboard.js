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

  randomShipPlacement(shipName) {
    let invalidPlacement = true;
    let initialRow;
    let initialCol;
    let axis;

    while (invalidPlacement) {
      initialRow = Math.floor(Math.random() * 10);
      initialCol = Math.floor(Math.random() * 10);
      axis = ['x', 'y'][Math.floor(Math.random() * 2)];

      while (initialRow > 10 - this.ships[shipName].length && axis === 'y') {
        initialRow = Math.floor(Math.random() * 10);
      }
      
      while (initialCol > 10 - this.ships[shipName].length && axis === 'x') {
        initialCol = Math.floor(Math.random() * 10);
      }
      
      let currentShipCoordinates = [];
      if (axis === 'x') {
        for (let i = initialCol; i < initialCol + this.ships[shipName].length; i++) {
          currentShipCoordinates.push([initialRow, i]);
        }
      } else if (axis === 'y') {
        for (let i = initialRow; i < initialRow + this.ships[shipName].length; i++) {
          currentShipCoordinates.push([i, initialCol]);
        } 
      }
      
      invalidPlacement = this.isInvalidShipPlacement(currentShipCoordinates);
    }
    
    this.placeShip(shipName, initialRow, initialCol, axis);
  }

  isInvalidShipPlacement(currentShipCoordinates, orientation, gameboard = undefined, shipName = undefined ) {
    let takenSpots;
    if (gameboard) {
      let [initialRow, initialCol] = currentShipCoordinates[0];

      takenSpots = [...Object.values(gameboard.shipCoordinates)];

      if (initialRow > 10 - gameboard.ships[shipName].length && orientation === 'y') return true;
      if (initialCol > 10 - gameboard.ships[shipName].length && orientation === 'x') return true;
    } else {
      takenSpots = [...Object.values(this.shipCoordinates)];
    }

    return takenSpots.filter(shipCoordinates => {
      let overlapCoordinates =  shipCoordinates.filter(coordinates => {
        let matches = currentShipCoordinates.filter(currentCoordinates => {
          const [currentRow, currentCol] = currentCoordinates;
          const [takenRow, takenCol] = coordinates;
          
          return currentRow === takenRow && currentCol === takenCol;
        });

        return matches.length > 0;
      });
      return overlapCoordinates.length > 0;
    }).length > 0;
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
