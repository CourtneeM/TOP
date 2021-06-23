const displayController = (() => {
  let gridSize = 16;
  
  const generateGrid = () => {
    const gridContainer = document.querySelector('#grid-container');
    const mainContainer = document.querySelector('main');
    const mainContainerSize = mainContainer.offsetWidth;
    const gridSquareSize = mainContainerSize / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
      const gridSquare = document.createElement('div');
      gridSquare.style.width = `${gridSquareSize}px`;
      gridSquare.style.height = `${gridSquareSize}px`;
      gridContainer.appendChild(gridSquare);
    }
    
    mainContainer.insertBefore(gridContainer, document.querySelector('#controls'));
  }

  const changeGridSize = newSize => {
    gridSize = newsize;
  }

  (function initialRender() {
    generateGrid();
  })();

  return { generateGrid, changeGridSize }
})();
