//Ejercicio 9: Calcula el IMC

// Pide al usuario que introduzca su peso en kilogramos
const prompt = require('prompt-sync')();
let pesoTexto = prompt("Ingresa tu peso en kilogramos: ");
let peso = parseFloat(pesoTexto);

// Pide al usuario que introduzca su altura en metros
let alturaTexto = prompt("Ingresa tu altura en metros: ");
let altura = parseFloat(alturaTexto);

// Calcula el IMC usando la fórmula: IMC = peso / (altura * altura)
let imc = peso / (altura * altura);

// Muestra el resultado en la consola
console.log("Tu IMC es:", imc.toFixed(2));