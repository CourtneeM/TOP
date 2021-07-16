const Gameboard = require('../modules/gameboard');

// test('Expect gameboard to return an array with 10 subarrays with 10 elements each', () => {
//   const gameboard1 = new Gameboard();
//   gameboard1.generateGameboard();
//   expect(gameboard1.gameboard).toEqual([
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', '']
//   ]);
// });

// test('Expect ships to be a list of the player\'s ships', () => {
//   const playerGameboard = new Gameboard();
//   playerGameboard.generateShips();

//   expect(playerGameboard.ships).toEqual({ 
//     carrier: { name: 'carrier', length: 5, shipLayout: ['O', 'O', 'O', 'O', 'O'], numberOfHits: 0 },
//     battleship: { name: 'battleship', length: 4, shipLayout: ['O', 'O', 'O', 'O'], numberOfHits: 0 },
//     destroyer: { name: 'destroyer', length: 3, shipLayout: ['O', 'O', 'O'], numberOfHits: 0 },
//     submarine: { name: 'submarine', length: 3, shipLayout: ['O', 'O', 'O'], numberOfHits: 0 },
//     'patrol boat': { name: 'patrol boat', length: 2, shipLayout: ['O', 'O'], numberOfHits: 0 }
//   });
// });

// test('Expect gameboard to display a ship with a length of 5, horizontally, starting at 1, 1 through 1, 6', () => {
//   const playerGameboard = new Gameboard();
//   playerGameboard.generateGameboard();
//   playerGameboard.generateShips();
//   playerGameboard.placeShip('carrier', 1, 1, 'x');

//   expect(playerGameboard.gameboard).toEqual([
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', 'O', 'O', 'O', 'O', 'O', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', '']
//   ]);
// });

// test('Expect gameboard to display a ship with a length of 3, vertically, starting at 7, 8 through 9, 8', () => {
//   const playerGameboard = new Gameboard();
//   playerGameboard.generateGameboard();
//   playerGameboard.generateShips();
//   playerGameboard.placeShip('submarine', 7, 8, 'y');
//   playerGameboard.placeShip('patrol boat', 2, 2, 'y');

//   expect(playerGameboard.gameboard).toEqual([
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', 'O', '', '', '', '', '', '', ''],
//     ['', '', 'O', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', 'O', ''],
//     ['', '', '', '', '', '', '', '', 'O', ''],
//     ['', '', '', '', '', '', '', '', 'O', '']
//   ]);
// });

// test('Expect carrier to take 2 hits', () => {
//   const playerGameboard = new Gameboard();
//   playerGameboard.generateGameboard();
//   playerGameboard.generateShips();
//   playerGameboard.placeShip('carrier', 1, 1, 'x');
//   playerGameboard.receiveAttack(1, 2);
//   playerGameboard.receiveAttack(1, 4);

//   expect(playerGameboard.ships['carrier'].numberOfHits).toBe(2);
// });

// test('Expect patrol boat to be sunk', () => {
//   const playerGameboard = new Gameboard();
//   playerGameboard.generateGameboard();
//   playerGameboard.generateShips();
//   playerGameboard.placeShip('patrol boat', 2, 3, 'y');
//   playerGameboard.receiveAttack(2, 3);
//   playerGameboard.receiveAttack(3, 3);

//   expect(playerGameboard.ships['patrol boat'].isSunk()).toBeTruthy();
// });

// test('Missed shots are recorded', () => {
//   const playerGameboard = new Gameboard();
//   playerGameboard.generateGameboard();
//   playerGameboard.generateShips();
//   playerGameboard.placeShip('patrol boat', 2, 3, 'y');
//   playerGameboard.receiveAttack(1, 3);
//   playerGameboard.receiveAttack(4, 7);

//   expect(playerGameboard.missedShots).toEqual([[1, 3], [4, 7]]);
// });

test('Records if all player\'s ships are sunk', () => {
  const playerGameboard = new Gameboard();
  playerGameboard.generateGameboard();
  playerGameboard.generateShips();
  playerGameboard.placeShip('carrier', 1, 1, 'y');
  playerGameboard.placeShip('battleship', 1, 3, 'x');
  playerGameboard.placeShip('destroyer', 3, 3, 'x');
  playerGameboard.placeShip('submarine', 6, 7, 'y');
  playerGameboard.placeShip('patrol boat', 2, 3, 'y');
  // carrier
  playerGameboard.receiveAttack(1, 1);
  playerGameboard.receiveAttack(2, 1);
  playerGameboard.receiveAttack(3, 1);
  playerGameboard.receiveAttack(4, 1);
  playerGameboard.receiveAttack(5, 1);
  // battleship
  playerGameboard.receiveAttack(1, 3);
  playerGameboard.receiveAttack(1, 4);
  playerGameboard.receiveAttack(1, 5);
  playerGameboard.receiveAttack(1, 6);
  // destroyer
  playerGameboard.receiveAttack(3, 3);
  playerGameboard.receiveAttack(3, 4);
  playerGameboard.receiveAttack(3, 5);
  // submarine
  playerGameboard.receiveAttack(6, 7);
  playerGameboard.receiveAttack(7, 7);
  playerGameboard.receiveAttack(8, 7);
  // patrol boat
  playerGameboard.receiveAttack(2, 3);
  playerGameboard.receiveAttack(3, 3);

  expect(playerGameboard.allShipsSunk).toBeTruthy();
});
