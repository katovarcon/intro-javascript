//Ejercicio 2: Usando las variables

//Pide al usuario que introduzca su nombre 
const prompt = require('prompt-sync')();
let nombre = prompt("¿Cual es tu nombre?: ");

//Pide al usuario que introduzca su edad
let edad = prompt("Introduce tu edad: ");

//Pide al usuario que introduzca su peso
let peso = prompt("Introduce tu peso: ");

//Muestra un mensaje en la consola con el nombre, la edad y el peso del usuario
console.log(`Hello ${nombre}, tienes ${edad} años y pesas ${peso} kg.`);