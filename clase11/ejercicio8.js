//Ejercicio 4: Encuentra los multiplos

const prompt = require('prompt-sync')();

// Pedimos al usuario un número entero positivo
let numero = prompt("Elige un número entero positivo ");

// Convertimos a número
numero = Number(numero);

// Verificamos que sea un entero positivo válido
if (Number.isInteger(numero) && numero > 0) {
  console.log(`🎉 Aquí están los múltiplos de ${numero} entre 1 y 100:`);

  for (let i = 1; i <= 100; i++) {
    if (i % numero === 0) {
      console.log(`👉 ${i} es múltiplo de ${numero} ✅`);
    }
  }

  console.log("¡Ahí tienes todos los múltiplos. 😎✨");
} else {
  console.log("🚫 Oye, eso no es un número válido. Intenta de nuevo 🤔");
}
