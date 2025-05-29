const prompt = require('prompt-sync')();

// Solicita al usuario que ingrese el primer número
let numero1 = prompt("Ingresa el primer número:");

// Convierte la entrada a número
numero1 = parseFloat(numero1);

// Solicita al usuario que ingrese el segundo número
let numero2 = prompt("Ingresa el segundo número:");

// Convierte la entrada a número
numero2 = parseFloat(numero2);

// Compara los dos números
if (numero1 > numero2) {
  console.log("El número " + numero1 + " es mayor que " + numero2);
} else if (numero1 < numero2) {
  console.log("El número " + numero2 + " es mayor que " + numero1);
} else {
  console.log("Los números " + numero1 + " y " + numero2 + " son iguales.");
}