//Ejericio 4: Par o impar

const prompt = require('prompt-sync')();

// Le pedimos al usuario un número
let numero = prompt("Dime un número y te digo si es par o impar:");

// Lo convertimos a número (porque prompt devuelve texto)
numero = Number(numero);

// Verificamos si escribió algo que realmente sea un número
if (!isNaN(numero)) {
  // Revisamos si el número es par
  if (numero % 2 === 0) {
    console.log("¡Es par! Se puede dividir por 2 sin que sobre nada 😎");
  } else {
    console.log("Es impar. Si lo divides por 2, siempre sobra 1 🤓");
  }
} else {
  console.log("Ehh... eso no es un número. Intenta de nuevo con uno válido 🙃");
}
