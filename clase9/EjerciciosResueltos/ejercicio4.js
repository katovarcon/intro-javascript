const prompt = require('prompt-sync')();

// Declara la variable nombre con tu nombre
const miNombre = "Karli"; // Cambia "Karli" por tu nombre si lo deseas

// Solicita al usuario que ingrese su nombre
let nombreUsuario = prompt("¿Cuál es tu nombre?");

// Verifica si el nombre ingresado es igual al mío
if (nombreUsuario === miNombre) {
  console.log("¡Hola, " + miNombre + "! OMG, me llamo igual.");
} else {
  console.log("Hola, " + nombreUsuario + ". Tu nombre no es el mismo que el mío.");
}