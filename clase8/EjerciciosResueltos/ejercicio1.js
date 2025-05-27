const prompt = require('prompt-sync')();

// Solicita al usuario que ingrese un número
let numero = prompt("Ingresa un número: ");

// Convierte el valor ingresado a número
numero = Number(numero);

// Calcula el doble
let doble = numero * 2;

// Muestra el resultado en consola
console.log("El doble de " + numero + " es " + doble);