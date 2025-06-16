//Ejercicio 1: Positivo o negativo

const prompt = require('prompt-sync')();

// Pedimos un número al usuario
let numero = prompt("Ingresa un número:");

// Convertimos el valor ingresado a número
numero = Number(numero);

// Validamos si es positivo, negativo o cero
if (numero > 0) {
  console.log("El número es positivo.");
} else if (numero < 0) {
  console.log("El número es negativo.");
} else if (numero === 0) {
  console.log("El número es cero.");
} else {
  console.log("Numero inválido, intenta de nuevo.");
}
