let currentInput = '';
let calculation = [];
let expression = '';

// Function to update display with current expression
function updateDisplay(value) {
  document.getElementById('display').value = value;
}

// Function to handle number input
function appendNumber(num) {
  currentInput += num;
  expression += num;
  updateDisplay(expression);
}

// Function to handle operator input
function operate(operator) {
  if (currentInput !== '') {
    calculation.push(parseFloat(currentInput), operator);
    expression += ' ' + operator + ' ';
    currentInput = '';
  } else if (calculation.length > 0) {
    calculation[calculation.length - 1] = operator;
    expression = expression.slice(0, -2) + operator + ' ';
  }
  updateDisplay(expression);
}

// Function to clear the display and reset calculations
function clearDisplay() {
  currentInput = '';
  calculation = [];
  expression = '';
  updateDisplay('');
}

// Function to calculate the result
function calculate() {
  if (currentInput !== '') {
    calculation.push(parseFloat(currentInput));
    currentInput = '';
  }

  if (calculation.length < 2) return;

  let result = calculation[0];
  for (let i = 1; i < calculation.length; i += 2) {
    const operator = calculation[i];
    const operand = calculation[i + 1];

    switch (operator) {
      case '+':
        result += operand;
        break;
      case '-':
        result -= operand;
        break;
      case '*':
        result *= operand;
        break;
      case '/':
        result /= operand;
        break;
    }
  }

  expression += ' = ' + result;
  updateDisplay(expression);
  calculation = [];
}

// Event listeners for keyboard input
document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (/[0-9]/.test(key)) {
    appendNumber(key);
  } else if (['+', '-', '*', '/'].includes(key)) {
    operate(key);
  } else if (key === 'Enter' || key === '=') {
    calculate();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
