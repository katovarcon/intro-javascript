//Pide al usuario que ingrese las longitudes de los tres lados de un triángulo

const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese las longitudes de los tres lados del triángulo
let lado1 = prompt("Ingresa la longitud del primer lado de tu triangulo: ");
let lado2 = prompt("Ingresa la longitud del segundo lado de tu triangulo: ");
let lado3 = prompt("Ingresa la longitud del tercer lado de tu triangulo: ");

// Convertir las entradas a números
lado1 = Number(lado1);
lado2 = Number(lado2);
lado3 = Number(lado3);

// Verificar si las entradas son válidas
if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
    console.log("Por favor, ingresa números válidos.");
}
else {
    // Verificar si los lados forman un triángulo
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        console.log("Excelente! Los datos ingresados forman un triangulo.");
        
        // Determinar el tipo de triángulo
        if (lado1 === lado2 && lado2 === lado3) {
            console.log("El triángulo es equilátero.");
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            console.log("El triángulo es isósceles.");
        } else {
            console.log("El triángulo es escaleno.");
        }
    } else {
        console.log("Lo siento, los lados ingresados no forman un triángulo.");
    }
}

