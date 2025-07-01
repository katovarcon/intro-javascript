//Ejercicio1: Agregar personajes a la lista

prompt = require('prompt-sync')();

// Lista inicial de personajes
let personajes = ["Link", "Zelda"];

// Agregamos a los demás personajes
personajes.push("Mario");
personajes.push("Luigi");

// Mostramos el array actualizado
console.log("Lista actualizada de personajes:");
console.log(personajes);
