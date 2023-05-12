function add(a,b){
  return a+b;
}

function substract(a,b){
  return a-b;
}

function multiply(a,b){
  return a*b;
}

function divide(a,b){
  return a/b;
}

function operate(operation){
  let number1 = Number(prompt("Escribe el primer número"));
  let number2 = Number(prompt("Escribe el segundo número"));
  
  return operation(number1, number2);
}


const screen = document.querySelector('.screen');

const buttons = document.querySelectorAll('button');
const clicks = [];

buttons.forEach((botones) => {
	botones.addEventListener("click", (boton) => {
		//boton.value = boton.target.value;
		clicks.push(boton.target.value)
		//console.log(boton.value);
		console.log(clicks);
		screen.innerHTML = clicks;
	});
});