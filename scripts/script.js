let operandA;
let operandB;
let operator;

const buttons = document.querySelector(".buttons");

function operate(operandA, operator, operandB) {
  switch (operator) {
    case "add":
      return add(operandA, operandB);
    case "subtract":
      return subtract(operandA, operandB);
    case "multiply":
      return multiply(operandA, operandB);
    case "divide":
      return divide(operandA, operandB);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Error";
  return a / b;
}
