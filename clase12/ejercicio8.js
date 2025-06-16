//Ejercicio 8: Rojo y verde

const prompt = require('prompt-sync')();

// Definimos una matriz 10x10 con números del 1 al 100
let matriz = [];
let contador = 1;

for (let i = 0; i < 10; i++) {
    matriz[i] = [];
    for (let j = 0; j < 10; j++) {
        matriz[i][j] = contador;
        contador++;
    }
}

// Función para sumar los valores en la diagonal roja (diagonal principal)
function sumaDiagonalRoja(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][i]; // fila i, columna i
    }
    return suma;
}

// Función para marcar (guardar) los valores en la diagonal verde (diagonal secundaria)
function valoresDiagonalVerde(matriz) {
    let valores = [];
    let n = matriz.length;
    for (let i = 0; i < n; i++) {
        valores.push(matriz[i][n - 1 - i]); // fila i, columna inversa
    }
    return valores;
}

// Usamos las funciones
let sumaRoja = sumaDiagonalRoja(matriz);
let diagonalVerde = valoresDiagonalVerde(matriz);

// Sumamos los valores de la diagonal verde para comprobar
let sumaVerde = 0;
for (let i = 0; i < diagonalVerde.length; i++) {
    sumaVerde += diagonalVerde[i];
}

// Mostramos resultados
console.log("Suma diagonal roja:", sumaRoja);      // Debe dar 505
console.log("Valores diagonal verde:", diagonalVerde);
console.log("Suma diagonal verde:", sumaVerde);    // También debe dar 505