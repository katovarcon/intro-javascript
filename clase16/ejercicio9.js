//Ejercicio 9: Cuenta la cantidad total de letras en una lista de palabras

// Lista de palabras
let palabras = ["Sol", "Luna", "Estrella"];

// Inicializamos el contador de letras
let totalLetras = 0;

// Recorremos la lista y sumamos la cantidad de letras de cada palabra
palabras.forEach(palabra => {
    totalLetras += palabra.length;
    }
);

// Mostramos el total de letras en consola
console.log("Total de letras en la lista de palabras:", totalLetras);
