//Ejercicio 10: Calculo de descuento

// Pide al usuario que introduzca el precio original del producto
const prompt = require('prompt-sync')();
let precioOriginalTexto = prompt("Ingresa el precio original del producto: ");
let precioOriginal = parseFloat(precioOriginalTexto);

// Pide al usuario que introduzca el porcentaje de descuento
let descuentoTexto = prompt("Ingresa el porcentaje de descuento: ");
let descuento = parseFloat(descuentoTexto);

// Calcula el precio final aplicando el descuento
let precioFinal = precioOriginal - (precioOriginal * (descuento / 100));

// Muestra el resultado en la consola
console.log("El precio final con descuento es:", precioFinal.toFixed(2));