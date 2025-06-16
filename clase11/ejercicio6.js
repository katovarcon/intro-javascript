//Ejercicio 6: Las tablas de multiplicar

const prompt = require('prompt-sync')();

// Pedimos un número al usuario
let numero = prompt("¿Qué número quieres para la tabla de multiplicar?");

// Convertimos a número
numero = Number(numero);

// Verificamos que sea válido
if (!isNaN(numero)) {
  console.log(`¡Perfecto! Aquí tienes la tabla del ${numero}:`);

  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }

  console.log("Listo, lo logramos.👊");
} else {
  console.log("Ups, eso no parece un número válido. Inténtalo de nuevo 😅");
}
