function player() {
  const attackEnemyGameboard = (enemyGameboard, row, col) => enemyGameboard.receiveAttack(row, col);

  return { attackEnemyGameboard }
}

export default player;

// module.exports = player;
