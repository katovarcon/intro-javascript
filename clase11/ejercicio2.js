//Ejercicio 2: semaforo

const prompt = require('prompt-sync')();

// Pedimos al usuario que ingrese un color
let color = prompt("Elige un color del semáforo: rojo, amarillo o verde");

// Convertimos el texto a minúsculas para evitar errores por mayúsculas
color = color.toLowerCase();

// Usamos switch para decidir qué hacer según el color
switch (color) {
  case "rojo":
    console.log("Alto, no puedes avanzar.");
    break;
  case "amarillo":
    console.log("Precaución, prepárate para avanzar.");
    break;
  case "verde":
    console.log("Avanza con seguridad.");
    break;
  default:
    console.log("Color no reconocido, ingresa rojo, amarillo o verde.");
}
