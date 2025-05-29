const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese el radio de un círculo
let radio = prompt("Por favor, ingresa el radio del círculo: ");

// Calcular el área del círculo
let area = Math.PI * Math.pow(Number(radio), 2);

//Calcular el perímetro del círculo
let perimetro = 2 * Math.PI * Number(radio);

// Mostrar el resultado
console.log("El área del círculo es: " + area.toFixed(2));
console.log("El perímetro del círculo es: " + perimetro.toFixed(2));
