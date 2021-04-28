const mainContainer = document.querySelector('#etch-a-sketch-container');
const gridContainer = document.querySelector('#grid-container');
const gridContainerWidth = gridContainer.offsetHeight;
let gridSize = 16;
let userSelectedColor = '#000';

(function initialLoad() {
  generateNav();
  generateGrid();
})();

function generateGrid() {
  const squareDimensions = `${Math.ceil(gridContainerWidth / gridSize)}px`;

  for (let i = 0; i < gridSize; i++) {
    let rowContainer = document.createElement('div');
    for (let i = 0; i < gridSize; i++) {
      const gridSquare = document.createElement('div');
      gridSquare.classList.add("grid-square");
      gridSquare.style.cssText = `border: 1px solid #000; height: ${squareDimensions}; width: ${squareDimensions};`;
      rowContainer.appendChild(gridSquare);

    }

    gridContainer.appendChild(rowContainer);
  }

  changeSquareColor();
  mainContainer.appendChild(gridContainer);
};

function generateNav() {
  const nav = document.createElement('nav');
  const resetBtn = document.createElement('button');
  resetBtn.textContent = "Reset";
  resetBtn.classList.add("reset-btn");
  resetBtn.addEventListener('click', resetGrid);
  
  nav.appendChild(resetBtn);
  mainContainer.appendChild(nav);
}

function resetGrid() {
  let newGridSize = 0;
  while (newGridSize < 1 || newGridSize > 99) {
    newGridSize = prompt("How large would you like the grid to be? Enter any number between 1 and 99.");
  }

  gridSize = newGridSize;

  clearGrid();
  generateNav();
  generateGrid();
};

function clearGrid() {
  const nav = document.querySelector("nav");

  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  mainContainer.removeChild(nav);
}

function changeSquareColor() {
  const gridSquaresNodeList = document.querySelectorAll('.grid-square');
  gridSquaresNodeList.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.style.background = userSelectedColor;
    });
  });
}
