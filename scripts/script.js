let operandA;
let operandB;
let operator;
let isEqualPressed = false;

const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  console.log(e.target.className);
  switch (e.target.className) {
    case "operandBtn":
      // console.log(e.target.textContent);
      if (!operator) {
        operandA = e.target.textContent;
      } else {
        operandB = e.target.textContent;
      }
      break;

    case "operatorBtn":
      console.log(e.target.textContent);
      if (operandA) {
        operator = e.target.textContent;
      } else {
        operandA = 0;
        operator = e.target.textContent;
      }
      updateOperationScreen();
      break;

    case "equalBtn":
      isEqualPressed = true;
      updateOperationScreen();
      // call operate and calculate
      break;
    default:
      break;
  }
});

const operation = document.querySelector(".operation");

function updateOperationScreen() {
  if (!isEqualPressed) {
    operation.textContent = `${operandA} ${operator}`;
  } else {
    operation.textContent = `${operandA} ${operator} ${operandB} =`;
  }
}

const clearBtns = document.querySelectorAll(".clearBtn");
clearBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    operation.textContent = "";
    operandA = null;
    operandB = null;
    operator = null;
    isEqualPressed = false;
  });
});

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
