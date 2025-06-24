//Ejercicio 3: Clasificación de edades

const prompt = require('prompt-sync')();

// Pedimos la edad al usuario
let edad = parseInt(prompt("¿Cuántos años tienes? 🧠"));

// Creamos una función flecha para clasificar la edad
const clasificarEdad = (edad) => {
  if (edad >= 0 && edad <= 12) {
    return "Eres un 👶 niño.";
  } else if (edad >= 13 && edad <= 17) {
    return "Eres un 🧒 adolescente.";
  } else if (edad >= 18 && edad <= 59) {
    return "Eres un 🧑 adulto.";
  } else if (edad >= 60) {
    return "Eres un 👴 adulto mayor.";
  } else {
    return "Edad no válida ❌";
  }
};

// Mostramos el resultado en la consola
let mensaje = clasificarEdad(edad);
console.log(mensaje);
