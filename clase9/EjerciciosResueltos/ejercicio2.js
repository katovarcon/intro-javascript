const prompt = require('prompt-sync')();

// Define las constantes de rango
const RANGO_MINIMO = 10;  // Valor mínimo
const RANGO_MAXIMO = 50;  // Valor máximo

// Solicita al usuario que ingrese un número
let numero = prompt("Ingresa un número para verificar si está dentro del rango de " + RANGO_MINIMO + " a " + RANGO_MAXIMO);

// Convierte la entrada a número
numero = parseFloat(numero);

// Verifica si el número está dentro del rango
if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
  console.log("El número " + numero + " está dentro del rango.");
} else {
  console.log("El número " + numero + " está fuera del rango.");
}