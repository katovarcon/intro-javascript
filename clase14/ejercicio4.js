//Ejercicio 4: Calcular descuentos 

const prompt = require('prompt-sync')();

// Pedimos la cantidad y el precio al usuario
let cantidad = parseInt(prompt("¿Cuántos productos compraste? 🛍️"));
let precioUnitario = parseFloat(prompt("¿Cuál es el precio de un producto? 💵"));

// Función flecha para calcular el total con descuento
const calcularTotalConDescuento = (cant, precio) => {
  let total = cant * precio;
  let descuento = 0;

  if (cant >= 10) {
    descuento = 0.20; // 20% de descuento
  } else if (cant >= 5) {
    descuento = 0.10; // 10% de descuento
  } else {
    descuento = 0; // Sin descuento
  }

  // Calculamos el total restando el descuento
  let totalConDescuento = total - (total * descuento);
  return totalConDescuento;
};

// Calculamos el total con descuento
let totalFinal = calcularTotalConDescuento(cantidad, precioUnitario);

// Mostramos el resultado con dos decimales y un mensaje amigable
console.log(`El total a pagar es: $${totalFinal.toFixed(2)} 🤑`);
