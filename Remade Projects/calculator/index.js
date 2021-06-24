const calculator = (() => {
  let currentCalculation = [];

  const addToCalculation = input => {

    if (currentCalculation.length === 0 || ['+', '-', 'X', '/'].includes(input) || ['+', '-', 'X', '/'].includes(currentCalculation[currentCalculation.length - 1])) {
      currentCalculation.push(input);
    } else {
      if (currentCalculation[currentCalculation.length - 1][0] === '0') {
        currentCalculation[currentCalculation.length - 1] = input;
      } else {
        currentCalculation[currentCalculation.length - 1] += input;
      }
    }
  }

  const clearCalculation = () => {
    while (currentCalculation.length > 0) {
      currentCalculation.pop();
    }
  }

  const deleteLastInput = () => {
    if (currentCalculation.length === 0) return;

    if (String(currentCalculation[currentCalculation.length - 1]).split('').length > 1) {
      currentCalculation[currentCalculation.length - 1] = String(currentCalculation[currentCalculation.length - 1]).slice(0, -1);
    } else {
      currentCalculation.pop();
    }
  }

  const calculate = () => {
    let [operand1, operator, operand2] = currentCalculation;
    operand1 = Number(operand1);
    operand2 = Number(operand2);

    switch (operator) {
      case '+': return add(operand1, operand2);
      case '-': return subtract(operand1, operand2);
      case 'X': return multiply(operand1, operand2);
      case '/': return divide(operand1, operand2);
    }
  }

  const add = (a, b) => a + b; 
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  return { currentCalculation, addToCalculation, clearCalculation, deleteLastInput, calculate }
})();

const displayController = (() => {
  const calculatorDisplay = document.querySelector('#display-container p');

  const updateDisplay = currentCalculation => {
    if (currentCalculation.length === 0) {
      calculatorDisplay.textContent = 0;
    } else { 
      calculatorDisplay.textContent = currentCalculation.join(' ');
    }
  }

  const infinityMessage = () => {
    calculatorDisplay.textContent = 'Cannot divide by 0';
  }

  return { updateDisplay, infinityMessage }
})();

const eventHandlers = (() => {
  const buttons = [...document.querySelectorAll('.btn')];

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if ([...btn.classList].includes('numbers')) {
        calculator.addToCalculation(btn.textContent);
      }

      if ([...btn.classList].includes('operator') || btn.id === 'btn-equal') {
        if ([...btn.classList].includes('operator')) {
          if (calculator.currentCalculation.length === 0) return;
          if (['+', '-', 'X', '/'].includes(calculator.currentCalculation[calculator.currentCalculation.length - 1])) return;
        }

        if (calculator.currentCalculation.length === 3) {
          let currentCalculation = calculator.calculate();
          calculator.clearCalculation();
          calculator.addToCalculation(currentCalculation);
        }

        if (calculator.currentCalculation[0] === Infinity) {
          displayController.infinityMessage();
          calculator.clearCalculation();
          return;
        }

        if ([...btn.classList].includes('operator')) calculator.addToCalculation(btn.textContent);
      }

      if (btn.id === 'clear-btn') {
        calculator.clearCalculation();
      }

      if (btn.id === 'delete-btn') {
        calculator.deleteLastInput();
      }
      
      displayController.updateDisplay(calculator.currentCalculation);
    });
  });
})();
