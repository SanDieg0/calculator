const Operations = {};

Operations.add = function add(a,b){
  return a+b;
}

Operations.substract = function substract(a,b){
  return a-b;
}

Operations.multiply = function multiply(a,b){
  return a*b;
}

Operations.divide = function divide(a,b){
  return a/b;
}

function operate(operation){
  let number1 = Number(prompt("Escribe el primer número"));
  let number2 = Number(prompt("Escribe el segundo número"));
  
  return operation(number1, number2);
}



const screen = document.getElementsByClassName('screen');
const 