const player = require('../player');
const Gameboard = require('../gameboard');

test('Expect enemy \'carrier\' ship numberOfHits to equal 1 after player attack', () => {
  const player1 = player();
  const enemyGameboard = new Gameboard();
  enemyGameboard.generateGameboard();
  enemyGameboard.generateShips();
  enemyGameboard.placeShip('carrier', 1, 1, 'horizontal');
  player1.attackEnemyGameboard(enemyGameboard, 1, 3);

  expect(enemyGameboard.ships['carrier'].numberOfHits).toBe(1);
});

test('Expect enemy gameboard missed shots to equal a length of 3', () => {
  const player1 = player();
  const enemyGameboard = new Gameboard();
  enemyGameboard.generateGameboard();
  enemyGameboard.generateShips();
  enemyGameboard.placeShip('carrier', 1, 1, 'horizontal');
  player1.attackEnemyGameboard(enemyGameboard, 3, 3);
  player1.attackEnemyGameboard(enemyGameboard, 1, 9);
  player1.attackEnemyGameboard(enemyGameboard, 8, 3);

  expect(enemyGameboard.missedShots.length).toBe(3);
});

test('Expect enemy gameboard to record hits and misses', () => {
  const player1 = player();
  const enemyGameboard = new Gameboard();
  enemyGameboard.generateGameboard();
  enemyGameboard.generateShips();
  enemyGameboard.placeShip('carrier', 1, 1, 'horizontal');
  player1.attackEnemyGameboard(enemyGameboard, 1, 1);
  player1.attackEnemyGameboard(enemyGameboard, 3, 3);
  player1.attackEnemyGameboard(enemyGameboard, 1, 9);
  player1.attackEnemyGameboard(enemyGameboard, 8, 3);

  expect(enemyGameboard.gameboard).toEqual([
    ['', '', '', '', '', '', '', '', '', ''],
    ['', 'X', 'O', 'O', 'O', 'O', '', '', '', 'X'],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', 'X', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', 'X', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
  ]);
});
