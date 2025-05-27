const prompt = require('prompt-sync')();

// Solicita al usuario que ingrese el primer número
let numero1 = prompt("Ingresa el primer número:");

// Convierte la entrada a número flotante
numero1 = parseFloat(numero1);

// Solicita al usuario que ingrese el segundo número
let numero2 = prompt("Ingresa el segundo número:");

// Convierte la entrada a número flotante
numero2 = parseFloat(numero2);

// Suma los dos números
let suma = numero1 + numero2;

// Muestra el resultado de la suma
console.log("La suma de " + numero1 + " y " + numero2 + " es " + suma);
