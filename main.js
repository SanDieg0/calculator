
let result = null,
  operator = null,
  firstOperand = null,
  secondOperand = null

// Calculator functions
const clearInput = () => {
  let input = document.getElementById("input");
  console.log(input.value);
  input.value = "0";
  result = null;
  operator = null;
  firstOperand = null;
  secondOperand = null;
};

// Number buttons
const addNumber = (btn) => {
  let input = document.getElementById("input");
  if (operator === null) {
    if (btn !== "+" && btn !== "-" && btn !== "*" && btn !== "/") {
      if (firstOperand === null) {
        firstOperand = btn === "0" ? "0" : btn.toString();
      } else if (firstOperand === "0") {
        firstOperand = btn === "0" ? "0" : btn.toString();
      } else {
        firstOperand += btn.toString();
      }
      input.value = firstOperand;
    } else {
      operator = btn;
      input.value += operator;
    }
  } else {
    if (btn !== "+" && btn !== "-" && btn !== "*" && btn !== "/") {
      if (secondOperand === null) {
        secondOperand = btn === "0" ? "0" : btn.toString();
      } else if (secondOperand === "0") {
        secondOperand = btn === "0" ? "0" : btn.toString();
      } else {
        secondOperand += btn.toString();
      }
      input.value = firstOperand + operator + secondOperand;
    } else {
      equalTo();
      operator = btn;
      input.value = firstOperand + operator;
    }
  }
};

function addDecimal() {
  let input = document.getElementById("input");
  if (operator === null) {
    if (firstOperand === null) {
      firstOperand = "0.";
    } else if (firstOperand.indexOf(".") === -1) {
      firstOperand += ".";
    }
    input.value = firstOperand;
  } else {
    if (secondOperand === null) {
      secondOperand = "0.";
    } else if (secondOperand.indexOf(".") === -1) {
      secondOperand += ".";
    }
    input.value = firstOperand + operator + secondOperand;
  }
}


function equalTo() {
  let input = document.getElementById("input");
  let result;

  let num1 = Number(firstOperand);
  let num2 = Number(secondOperand);

  if (operator === '/' && num2 === 0) {
    input.value = "∞";
    return;
  }

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }

  if (Number.isInteger(result)) {
    result = result.toFixed(0);
  } else {
    result = result.toFixed(6);
  }

  input.value = result;

  firstOperand = result.toString();
  secondOperand = null;
  operator = null;
}

// Operator buttons
function addOperator(value) {
  operator = value;
  input.value += operator;
}

// Keyboard support
document.addEventListener("keydown", function (event) {
  const key = event.key;
  switch(key) {
    case '0':
      addNumber(0);
      break;
    case '1':
      addNumber(1);
      break;
    case '2':
      addNumber(2);
      break;
    case '3':
      addNumber(3);
      break;
    case '4':
      addNumber(4);
      break;
    case '5':
      addNumber(5);
      break;
    case '6':
      addNumber(6);
      break;
    case '7':
      addNumber(7);
      break;
    case '8':
      addNumber(8);
      break;
    case '9':
      addNumber(9);
      break;
    case '.':
      addDecimal('.');
      break;
    case '+':
      addOperator('+');
      break;
    case '-':
      addOperator('-');
      break;
    case '*':
      addOperator('*');
      break;
    case '/':
      addOperator('/');
      break;
    case '=':
      equalTo();
      break;
    case 'Enter':
      equalTo();
      break;
    case 'Backspace':
      clearInput();
      break;
  }
});

