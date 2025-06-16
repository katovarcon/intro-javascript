//Ejercicio 10; Adivina el numero

const prompt = require('prompt-sync')();

// La compu escoge un número al azar del 1 al 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let adivinado = false;

console.log("🎲 ¡Vamos a jugar! Tienes 3 intentos para adivinar el número entre 1 y 10.");

for (let intento = 1; intento <= 3; intento++) {
  let respuesta = prompt(`Intento ${intento}: ¿Qué número crees que es?`);

  // Convertimos la respuesta a número
  respuesta = Number(respuesta);

  if (respuesta === numeroSecreto) {
    console.log(`🎉 ¡Felicidades! Adivinaste el número ${numeroSecreto} en el intento ${intento}.🚀`);
    adivinado = true;
    break; // Salimos del ciclo porque ya ganaste
  } else if (respuesta < numeroSecreto) {
    console.log("🤔 Nah, el número es más grande. Intenta otra vez.");
  } else if (respuesta > numeroSecreto) {
    console.log("🤔 Nah, el número es más chiquito. Tienes otra oportunidad.");
  } else {
    console.log("⚠️ Número inválido, intenta de nuevo.");
  }
}

if (!adivinado) {
  console.log(`😞 Se acabaron tus intentos. El número correcto era ${numeroSecreto}.`);
}
