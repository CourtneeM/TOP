let gridSquareColor = '#000';

const displayController = (() => {
  const gridContainer = document.querySelector('#grid-container');
  const defaultGridSize = 16;
  let gridSize = defaultGridSize;
  
  const generateGrid = () => {
    const gridContainerSize = window.getComputedStyle(gridContainer).getPropertyValue('width').split('px')[0];
    const gridSquareSize = gridContainerSize / gridSize;

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

  const resetGridSize = () => {
    gridSize = defaultGridSize;
  }

  const changeGridSize = () => {
    gridSize = prompt('Enter a grid size between 2 and 100. (Sizes over 100 may freeze.)');
  }

  const changeGridSquareColor = newColor => {
    gridSquareColor = newColor;
  }

  (function initialRender() {
    generateGrid();
  })();

  return { generateGrid, resetGrid, clearGrid, resetGridSize, changeGridSize, changeGridSquareColor }
})();

const eventHandlers = (() => {
  const gridSquareMouseenter = () => {
    [...document.querySelectorAll('.grid-square')].forEach(gridSquare => {
      gridSquare.addEventListener('mouseenter', () => {
        gridSquare.style.background = gridSquareColor;
      });
    });
  }

  document.querySelector('#clear-btn').addEventListener('click', displayController.clearGrid);

  document.querySelector('#reset-btn').addEventListener('click', () => {
    displayController.resetGridSize();
    displayController.resetGrid();
    gridSquareMouseenter();
  });
  
  document.querySelector('#size-btn').addEventListener('click', () => {
    displayController.changeGridSize();
    displayController.resetGrid();
    gridSquareMouseenter();
  });

  document.querySelector('#color-picker').addEventListener('change', e => {
    displayController.changeGridSquareColor(e.target.value);
  });

  const mediaQueryLists = (() => {
    const mediaQueryListSizes = [
                                  window.matchMedia("(max-width: 524px)"),
                                  window.matchMedia("(min-width: 525px)"),
                                  window.matchMedia("(max-width: 767px)"),
                                  window.matchMedia("(min-width: 768px)"),
                                  window.matchMedia("(max-width: 959px)"),
                                  window.matchMedia("(min-width: 960px)")
                                ];

    mediaQueryListSizes.forEach(mql => {
      mql.addEventListener('change', e => {
        if (e.matches) {
          displayController.resetGrid();
          gridSquareMouseenter();
        }
      });
    });
  })();


  gridSquareMouseenter();
})();
