//Ejercicio 10: flores favoritas

prompt = require('prompt-sync')();

//Creamos un array vacío para las flores favoritas
let floresFavoritas = [];

// Preguntamos por las tres flores favoritas al usuario
let flor1 = prompt("🌸 Ingresa tu primera flor favorita:");
let flor2 = prompt("🌻 Ingresa tu segunda flor favorita:");
let flor3 = prompt("🌷 Ingresa tu tercera flor favorita:");

//No usamos push, así que agregamos manualmente
floresFavoritas[0] = flor1;
floresFavoritas[1] = flor2;
floresFavoritas[2] = flor3;

//Mostramos el array en consola
console.log("💐 Tus flores favoritas son:");
console.log(floresFavoritas);

//Preguntamos por una flor específica
let florBuscada = prompt("🔎 Ingresa una flor para ver si está entre tus favoritas:");

//Contamos manualmente cuántas veces se mencionó
let contador = 0;

if (floresFavoritas[0] === florBuscada) {
  contador++;
}
if (floresFavoritas[1] === florBuscada) {
  contador++;
}
if (floresFavoritas[2] === florBuscada) {
  contador++;
}

//Mostramos el resultado
if (contador > 0) {
  console.log(`✅ La flor "${florBuscada}" está en tus favoritas 🌼`);
} else {
  console.log(`❌ La flor "${florBuscada}" no está en tu lista de favoritas 😢.`);
}
