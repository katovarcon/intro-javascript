// Simular un sistema de ingreso a una nave espacial donde los tripulantes deben pasar filtros de validación usando variables, coerción, y operadores lógicos.

//El sistema solicita el nombre, edad y especie del tripulante.
const prompt = require('prompt-sync')();

let nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Cuál es tu edad terrestre?"));
let especie = prompt("Cual es tu especie? (humano, alien, cyborg)");

let tienePermiso = (edad >= 18 && especie!=="") || nombre === "Capitana";

//El sistema verifica si el tripulante tiene permiso para ingresar a la nave.
const mensaje = tienePermiso
    ? "Bienvenido a bordo" + (nombre || "tripulante") + "!"
    : "Acceso denegado, no podes ingresar a la nave";
console.log(mensaje);