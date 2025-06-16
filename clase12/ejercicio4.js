//Ejercicio 4: Ciclo for - array

const prompt = require('prompt-sync')();

// Array vacío para almacenar las notas
let notas = [];

// Preguntamos cuántas notas se van a ingresar
let cantidad = parseInt(prompt("¿Cuántas notas deseas ingresar?"));

// Usamos un bucle for para pedir cada nota y guardarla en el array
for (let i = 0; i < cantidad; i++) {
    let nota = parseFloat(prompt("Ingresa la nota del estudiante #" + (i + 1)));
    notas[i] = nota; // Asignamos la nota a la posición i del array
}

// Usamos otro bucle for para mostrar las notas ingresadas en la consola
for (let i = 0; i < notas.length; i++) {
    console.log("Nota del estudiante #" + (i + 1) + ": " + notas[i]);
}
