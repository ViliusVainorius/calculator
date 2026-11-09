let operandA = 0;
let operandB = 0;
let operator;
let isEqualPressed = false;

const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  // console.log(e.target.className);
  switch (e.target.className) {
    case "operandBtn":
      // console.log(e.target.textContent);
      if (!operator) {
        operandA == "0"
          ? (operandA = e.target.textContent)
          : (operandA += e.target.textContent);
        // operandA += e.target.textContent;
        updateResultScreen(operandA);
      } else {
        operandB == "0"
          ? (operandB = e.target.textContent)
          : (operandB += e.target.textContent);
        updateResultScreen(operandB);
      }
      break;

    case "operatorBtn":
      // console.log(e.target.textContent);
      if (operandA) {
        operator = e.target.textContent;
      } else {
        operandA = 0;
        operator = e.target.textContent;
      }
      updateOperationScreen();
      break;

    case "equalBtn":
      if (!operandB) {
        operandB = result.textContent;
      }
      isEqualPressed = true;
      updateOperationScreen();

      const answer = operate();
      updateResultScreen(answer);
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

const result = document.querySelector(".operationResult");
console.log(result);
function updateResultScreen(value) {
  result.textContent = value;

  let fontSize = 46;
  result.style.fontSize = `${fontSize}px`;

  while (result.scrollWidth > result.clientWidth && fontSize > 18) {
    fontSize -= 2;
    result.style.fontSize = `${fontSize}px`;
  }
}

const clearBtns = document.querySelectorAll(".clearBtn");
clearBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    operation.textContent = "";
    result.textContent = 0;
    operandA = 0;
    operandB = 0;
    operator = null;
    isEqualPressed = false;
  });
});

function operate() {
  const numA = Number(operandA);
  const numB = Number(operandB);

  switch (operator) {
    case "+":
      return add(numA, numB);
    case "-":
      return subtract(numA, numB);
    case "x":
      return multiply(numA, numB);
    case "÷":
      return divide(numA, numB);
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
