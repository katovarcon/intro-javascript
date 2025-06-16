//Ejercicio 1 usando while
const prompt = require('prompt-sync')();

//Pedimos al usuario que introduzca un número

let suma = 0;
let numero = 0;

//El ciclo while se ejecuta mientras el número sea mayor o igual a 0
while (numero >= 0) {
    numero = parseInt(prompt('Ingresa un número (negativo para salir): '));

    if (numero >= 0) {
        suma += numero;
    }
}

//Si el numero ingresado es negativo, salimos del ciclo y mostramos la suma
console.log(`La suma de los números introducidos es: ${suma}`);