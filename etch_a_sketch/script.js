const gridContainer = document.querySelector('#container');
const gridSize = 8;
const gridHeight = '100px';
const gridWidth = '100px';

for (let i = 0; i < gridSize; i++) {
  let rowContainer = document.createElement('div');
  for (let i = 0; i < gridSize; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add("grid-square");
    gridSquare.style.cssText = `border: 1px solid #000; height: ${gridHeight}; width: ${gridWidth};`;
    rowContainer.appendChild(gridSquare);
  }

  gridContainer.appendChild(rowContainer);
}
