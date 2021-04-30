const display = document.querySelector('#calculator-display');
const buttons = document.querySelectorAll('.btn');
let expression = [];

function add (a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case 'x': return multiply(a, b);
    case '/': return divide(a, b);
  }
}

function calculate(expression) {
  let [firstOperand, operator, secondOperand] = expression.join('').split(' ');

  return String(operate(operator, Number(firstOperand), Number(secondOperand))).split('');
}

function storeValues(e) {
  let btnValue = e.target.textContent;

  if (Number(btnValue) || btnValue === '0' || btnValue === '.') {
    expression.push(btnValue);
  }

  if (expression.length > 0) {
    switch (btnValue) {
      case '+':
      case '-':
      case 'x':
      case '/':
        operator = btnValue;
        expression.push(' ', btnValue, ' ');
        break;
      case 'DEL':
        expression.pop();
        break;
      case 'C':
        expression = [];
        break;
    }

    if (btnValue === '=') {
      if (expression.some(el => ["+", "-", "x", "/"].includes(el)) && Number(expression[expression.length - 1])) {
        expression = calculate(expression);
      }
    }

    if (expression.length > 0) { 
      display.textContent = expression.join('');
    } else {
      display.textContent = '0';
    }
  }

  console.log(expression);

}

buttons.forEach(button => {
  button.addEventListener('click', e => {
    storeValues(e);
  });
});
