let gridSquareColor = '#000';

const displayController = (() => {
  const gridContainer = document.querySelector('#grid-container');
  let gridSize = 16;
  
  const generateGrid = () => {
    const mainContainer = document.querySelector('main');
    const mainContainerSize = mainContainer.offsetWidth;
    const gridSquareSize = mainContainerSize / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
      const gridSquare = document.createElement('div');

      gridSquare.classList.add('grid-square');
      gridSquare.style.width = `${gridSquareSize}px`;
      gridSquare.style.height = `${gridSquareSize}px`;

      gridContainer.appendChild(gridSquare);
    }
  }

  const resetGrid = () => {
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }

    generateGrid();
  }

  const clearGrid = () => {
    [...gridContainer.children].forEach(child => child.style.background = 'none');
  };

  const changeGridSize = newSize => {
    gridSize = newSize;
  }

  const changeGridSquareColor = newColor => {
    gridSquareColor = newColor;
  }

  (function initialRender() {
    generateGrid();
  })();

  return { generateGrid, changeGridSize, resetGrid, clearGrid, changeGridSize, changeGridSquareColor }
})();

const eventHandlers = (() => {
  const gridSquareMouseover = () => {
    [...document.querySelectorAll('.grid-square')].forEach(gridSquare => {
      gridSquare.addEventListener('mouseenter', () => {
        gridSquare.style.background = gridSquareColor;
      });
    });
  }

  document.querySelector('#clear-btn').addEventListener('click', displayController.clearGrid);
  
  document.querySelector('#reset-btn').addEventListener('click', () => {
    displayController.changeGridSize(16);
    displayController.resetGrid();
    gridSquareMouseover();
  });
  
  document.querySelector('#size-btn').addEventListener('click', () => {
    let newSize = prompt('Enter a grid size between 2 and 64. (Sizes over 64 may freeze.)');
    displayController.changeGridSize(newSize);
    displayController.resetGrid();
    gridSquareMouseover();
  });

  gridSquareMouseover();
})();
