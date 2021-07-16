const Ship = require('../modules/ship');

test('Recieve an object with name, length, shipLayout, and numberOfHits' , () => {
  const ship1 = new Ship('carrier');
  expect(ship1).toEqual({ name: 'carrier', length: 5, 
                          shipLayout: ['O', 'O', 'O', 'O' ,'O'], numberOfHits: 0 });
});

test('Recieve an object with numberOfHits equaling 5 and all element of shipLayout are "x"' , () => {
  const ship1 = new Ship('carrier');
  ship1.takeHit(2);
  ship1.takeHit(1);
  ship1.takeHit(0);
  ship1.takeHit(3);
  ship1.takeHit(4);
  expect(ship1).toEqual({ name: 'carrier', length: 5, 
                          shipLayout: ['X', 'X', 'X', 'X' ,'X'], numberOfHits: 5 });
});

test('Recieve an object that returns true when isSunk is called on it' , () => {
  const ship1 = new Ship('carrier');
  ship1.takeHit(2);
  ship1.takeHit(1);
  ship1.takeHit(0);
  ship1.takeHit(3);
  ship1.takeHit(4);
  expect(ship1.isSunk()).toBeTruthy();
});
