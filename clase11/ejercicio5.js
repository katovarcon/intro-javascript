//Ejercicio 5: Encuentra los pares

const prompt = require('prompt-sync')();

// Le pedimos al usuario los dos números
let inicio = prompt("Dime el número de inicio:");
let fin = prompt("Ahora dime el número de fin:");

// Convertimos a números
inicio = Number(inicio);
fin = Number(fin);

// Verificamos si son números válidos
if (isNaN(inicio) || isNaN(fin)) {
  console.log("Oye, ese número no es válido. Prueba otra vez 🙃");
} else if (inicio > fin) {
  console.log("El número de inicio no puede ser más grande que el final 😅");
} else {
  console.log(`Te muestro todos los pares desde ${inicio} hasta ${fin}:`);
  
  // Recorremos los números desde inicio hasta fin
  for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
      console.log(`${i} es par 💡`);
    }
  }
}
