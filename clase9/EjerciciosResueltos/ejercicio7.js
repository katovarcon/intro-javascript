const prompt = require('prompt-sync')();

// Pedir al usuario su peso}
let peso = prompt("Ingresa tu peso en kilogramos: ");

// Convertir la entrada a número
peso = Number(peso);

// Verificar si la entrada es válida
if (isNaN(peso)) {
    console.log("Por favor, ingresa un número válido.");
  } else {

// Convertir la entrada a libras
let pesoEnLibras = peso * 2.20462;
  
// Mostrar el resultado
console.log("Tu peso en libras es: " + pesoEnLibras.toFixed(2) + " lbs");
}