const enemyComputer = require('../enemyComputer');
const Gameboard = require('../gameboard');

test('randomAttack is added to previousAttacks', () => {
  const enemy = enemyComputer();
  expect(enemy.randomAttack()).toEqual(enemy.previousAttacks[0]);
});

test('enemy is able to attack player gameboard', () => {
  const enemy = enemyComputer();
  const playerGameboard = new Gameboard();
  playerGameboard.generateGameboard();
  playerGameboard.generateShips();
  playerGameboard.placeShip('patrol boat', 1, 1, 'vertical');
  enemy.attackPlayerGameboard(playerGameboard, enemy.randomAttack());
  console.log(playerGameboard.gameboard);

  expect(playerGameboard.gameboard.some(row => row.some(col => col === 'X'))).toBeTruthy();
});
