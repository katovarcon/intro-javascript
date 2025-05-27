const prompt = require('prompt-sync')();

// Solicita al usuario que ingrese un número entero
let numero = prompt("Ingresa un número entero:");

// Convierte la entrada a número entero
numero = parseInt(numero);

// Verifica si el número es par o impar utilizando el operador módulo (%)
if (numero % 2 === 0) {
  console.log("El número " + numero + " es par.");
} else {
  console.log("El número " + numero + " es impar.");
}