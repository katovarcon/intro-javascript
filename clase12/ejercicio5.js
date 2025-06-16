// Ejercicio 5: Manejo de Arrays y Condicionales

prompt = require('prompt-sync')();

// Creamos un array vacío para los nombres
let nombres = [];

// Paso 2: Solicitar al usuario 5 nombres (sin usar for)
nombres[0] = prompt("Ingresa el nombre 1:");
nombres[1] = prompt("Ingresa el nombre 2:");
nombres[2] = prompt("Ingresa el nombre 3:");
nombres[3] = prompt("Ingresa el nombre 4:");
nombres[4] = prompt("Ingresa el nombre 5:");

// Pedimos al usuario un nombre para buscar
let nombreBuscado = prompt("Ingresa el nombre que deseas buscar:");

// Verificamos si el nombre está en el array usando condicionales
if (
    nombreBuscado === nombres[0] ||
    nombreBuscado === nombres[1] ||
    nombreBuscado === nombres[2] ||
    nombreBuscado === nombres[3] ||
    nombreBuscado === nombres[4]
  ) {
    console.log("El nombre SÍ se encuentra en la lista.");
  } else {
    console.log("El nombre NO se encuentra en la lista.");
  }
;