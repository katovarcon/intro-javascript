//Eejercicio 5: Verifica el origen de un auto

const prompt = require('prompt-sync')();

// Pedimos al usuario la marca del auto
let marca = prompt("¿Cuál es la marca de tu auto? 🚗").toLowerCase(); // Lo convertimos a minúsculas para comparar mejor

// Función flecha para verificar el origen del auto
const verificarOrigen = (marcaAuto) => {
  // Marcas nacionales conocidas (en minúsculas)
  const marcasNacionales = ["chevrolet", "ford", "fiat"];

  if (marcasNacionales.includes(marcaAuto)) {
    return "Tu auto es de origen 🇲🇽 NACIONAL. Qué orgullo! 🎉";
  } else {
    return "Tu auto es IMPORTADO 🌍. Qué estilo! 😎";
  }
};

// Mostramos el resultado en la consola
let mensaje = verificarOrigen(marca);
console.log(mensaje);
