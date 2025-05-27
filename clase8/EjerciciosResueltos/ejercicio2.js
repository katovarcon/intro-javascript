const prompt = require('prompt-sync')();

// Solicita al usuario que ingrese un número
let numero = prompt("Ingresa un número:");

// Convierte la entrada a un número decimal
numero = parseFloat(numero);

// Verifica si el número es positivo, negativo o cero
if (numero > 0) {
  console.log("El número " + numero + " es positivo.");
} else if (numero < 0) {
  console.log("El número " + numero + " es negativo.");
} else if (numero === 0) {
  console.log("El número es cero.");
} else {
  console.log("La entrada no es un número válido.");
}