let operandA = 0;
let operandB = 0;
let operator;
let isEqualPressed = false;
const defaultResultFontSize = 46;

const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "operandBtn":
      if (isEqualPressed) {
        clear();
      }

      if (!operator) {
        operandA == "0" && e.target.id != "commaBtn"
          ? (operandA = e.target.textContent)
          : operandA.length < 16
            ? (operandA += e.target.textContent)
            : (operandA = operandA);
        updateResultScreen(operandA);
      } else {
        operandB == "0"
          ? (operandB = e.target.textContent)
          : operandB.length < 16
            ? (operandB += e.target.textContent)
            : (operandB = operandB);
        updateResultScreen(operandB);
      }
      break;

    case "operatorBtn":
      if (isEqualPressed) {
        operandA = result.textContent;
        operandB = 0;
        isEqualPressed = false;
      }

      if (operandA) {
        operator = e.target.textContent;
      } else {
        operandA = 0;
        operator = e.target.textContent;
      }
      updateOperationScreen();
      break;

    case "equalBtn":
      if (!operator) {
        break;
      }
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
function updateResultScreen(value) {
  result.textContent = visualize(value);

  let fontSize = defaultResultFontSize;
  result.style.fontSize = `${fontSize}px`;

  while (result.scrollWidth > result.clientWidth && fontSize > 18) {
    fontSize -= 2;
    result.style.fontSize = `${fontSize}px`;
  }
}

function visualize(value) {
  const [integerPart, decimalPart] = value.split(",");

  let formattedInteger = "";

  for (let i = integerPart.length; i > 0; i -= 3) {
    const start = Math.max(0, i - 3);
    const chunk = integerPart.slice(start, i);
    formattedInteger = chunk + (formattedInteger ? " " + formattedInteger : "");
  }

  if (decimalPart !== undefined) {
    return formattedInteger + "," + decimalPart;
  }

  return formattedInteger;
}

const clearBtns = document.querySelectorAll(".clearBtn");
clearBtns.forEach((btn) => {
  btn.addEventListener("click", () => clear());
});

function clear() {
  operation.textContent = "";
  result.textContent = 0;
  operandA = 0;
  operandB = 0;
  operator = null;
  isEqualPressed = false;
  result.style.fontSize = `${defaultResultFontSize}px`;
}

function operate() {
  const numA = Number(
    operandA.toString().replaceAll(" ", "").replace(",", "."),
  );
  const numB = Number(
    operandB.toString().replaceAll(" ", "").replace(",", "."),
  );

  let answer = 0;

  switch (operator) {
    case "+":
      answer = add(numA, numB);
      break;
    case "-":
      answer = subtract(numA, numB);
      break;
    case "x":
      answer = multiply(numA, numB);
      break;
    case "÷":
      answer = divide(numA, numB);
      break;
  }

  return Number(answer.toFixed(10)).toString().replace(".", ",");
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
