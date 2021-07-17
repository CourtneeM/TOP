function enemyComputer() {
  const previousAttacks = [];

  const randomAttack = () => {
    if (previousAttacks.length === 100) return;

    let checkForPreviousAttack = true;
    let row;
    let col;
    
    while (checkForPreviousAttack) {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);

      if (previousAttacks.length === 0) {
        checkForPreviousAttack = false;
      } else { 
        checkForPreviousAttack = previousAttacks.some(coordinate => {
          let [previousRow, previousCol] = coordinate;
          if (previousRow === row && previousCol === col) return coordinate;
        });
      }
    }

    previousAttacks.push([row, col]);
    return [row, col];
  }
  
  const attackPlayerGameboard = ((playerGameboard, attackCoordinates) => {
    playerGameboard.receiveAttack(...attackCoordinates)
  });

  return { randomAttack, attackPlayerGameboard, previousAttacks }
}

export default enemyComputer;

// module.exports = enemyComputer;
