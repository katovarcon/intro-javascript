//Ejercicio 3 – Constantes / Validación de Edad

const prompt = require('prompt-sync')();

// Declaramos las constantes para los límites de edad
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

// Pedimos al usuario que ingrese su edad
let entrada = prompt("Por favor, ingresa tu edad:");

// Convertimos la entrada a un número entero
let edad = parseInt(entrada);

/// Verifica si el número está dentro del rango
if (edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA) {
    console.log("Genial! Eres mayor de edad. Puedes continuar. ");
  } else {
    console.log("No es un numero valido. Por favor intenta de nuevo. ");
  }
