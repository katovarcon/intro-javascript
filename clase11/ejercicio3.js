//Ejercicio 3: Sabes contar?

const prompt = require('prompt-sync')();

// Pedimos al usuario un número
let numero = prompt("Ingresa un número positivo:");

// Convertimos el valor a número
numero = Number(numero);

// Verificamos si el número es válido y positivo
if (numero > 0) {
  // Contamos desde 1 hasta el número ingresado
  for (let i = 1; i <= numero; i++) {
    console.log(i);
  }
} else {
  console.log("Ingresa un número positivo mayor que 0.");
}
