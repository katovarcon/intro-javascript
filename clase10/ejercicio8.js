//Ejercicio 8: Conversion de temperatura

prompt = require('prompt-sync')();

// Inghgresa la temperatura en grados Celsius 
let celsiusTexto = prompt("Ingrese la temperatura en grados Celsius:");

// Convierte el texto ingresado a un número
let celsius = parseFloat(celsiusTexto);

//Aplicamos la fórmula para convertir Celsius a Fahrenheit
let fahrenheit = (celsius * 9/5) + 32;

// Muestra el resultado en la consola
console.log(`${celsius}°C es igual a ${fahrenheit}°F`);