class Battleship {
  constructor(name) {
    this.name = name;
    this.length = this.getLength();
    this.shipLayout = this.getShipLayout();
    this.numberOfHits = 0;
  }

  getLength() {
    const ships = { carrier: 5, battleship: 4, destroyer: 3, submarine: 3, 'patrol boat': 2 }
    return ships[this.name];
  }

  getShipLayout() {
    const ship = [];
    
    for (let i = 0; i < this.length; i++) {
      ship.push('');
    }

    return ship;
  }

  updateNumberOfHits() {
    this.numberOfHits = this.shipLayout.filter(spot => spot === 'x').length;
  }

  takeHit(index) {
    if (!index && index !== 0) return;
    if (this.shipLayout[index] === 'x') return;
    
    this.shipLayout[index] = 'x';
    this.updateNumberOfHits();
  }

  isSunk() {
    return this.length === this.numberOfHits;
  }
}

// export default Battleship;
module.exports = Battleship;

// carrier, 5
// battleship, 4
// destroyer, 3
// submarine, 3
// patrol boat, 2
