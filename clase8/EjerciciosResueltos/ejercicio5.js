const prompt = require('prompt-sync')();

// Solicita al usuario que ingrese su nombre
let nombre = prompt("¿Cuál es tu nombre?");

// Muestra un saludo personalizado utilizando concatenación de cadenas
console.log("¡Hola, " + nombre + "! ¡Bienvenido!");