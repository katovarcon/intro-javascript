const prompt = require('prompt-sync')();

// Pedir la edad al usuario su edad
let edad = prompt("Por favor, ingresa tu edad:");

// Convertir la entrada a número
edad = Number(edad);

// Verificar si es válido
if (isNaN(edad)) {
  console.log("Por favor, ingresa un número válido.");
} else {
  // Verificar si es mayor o menor de edad
  if (edad >= 18) {
    console.log("Eres mayor de edad. ¡Bienvenido!");
  } else {
    console.log("Eres menor de edad. Debes tener al menos 18 años.");
  }
}