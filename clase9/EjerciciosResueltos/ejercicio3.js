const prompt = require('prompt-sync')();

// Solicita al usuario que ingrese dos valores booleanos (true o false)
let condicion1 = prompt("Ingresa el valor para la primera condición (true o false):");
let condicion2 = prompt("Ingresa el valor para la segunda condición (true o false):");

// Convierte las entradas de texto a booleanos
condicion1 = (condicion1.toLowerCase() === "true");
condicion2 = (condicion2.toLowerCase() === "true");

// Muestra los resultados de las combinaciones lógicas
console.log("condicion1 AND condicion2: " + (condicion1 && condicion2));
console.log("condicion1 OR condicion2: " + (condicion1 || condicion2));
console.log("NOT condicion1: " + !condicion1);
console.log("NOT condicion2: " + !condicion2);