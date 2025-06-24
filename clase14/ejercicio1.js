//Ejercicio 1: Calcula el precio final con IVA

const prompt = require('prompt-sync')();

// Pedimos los datos al usuario
let precio = parseFloat(prompt("¿Cuál es el precio del producto?")); 
let iva = 16; 

// Usamos la función flecha para calcular el precio final con IVA
const calcularPrecioFinal = (precio, iva) => {
  return precio + (precio * iva / 100);
};

// Calculamos y mostramos el resultado en la consola
let precioFinal = calcularPrecioFinal(precio, iva);
console.log("El precio final con IVA del 16% es: $" + precioFinal.toFixed(2));
