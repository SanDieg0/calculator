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

function operate(number1, number2, operation){
  let numer1 = prompt("Escribe el primer número");
  let numer2 = prompt("Escribe el segundo número");
  
  operation(numer1, number2);
}
