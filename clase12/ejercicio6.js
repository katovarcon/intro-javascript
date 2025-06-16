//Ejercicio 6: Iguales a 10 pero menores que 1000

const prompt = require('prompt-sync')();

//Definir una matriz con números
let numeros = [2, 10, 50, 1000, 999, 5, 750, 3, 15];

//Crear variable para guardar la suma
let suma = 0;

//Recorrer la matriz
for (let i = 0; i < numeros.length; i++) {
    // Paso 4: Verificar si el número está en el rango [10, 1000)
    if (numeros[i] >= 10 && numeros[i] < 1000) {
        // Paso 5: Sumar el número
        suma += numeros[i];
    }
}

//Mostrar el resultado en la consola
console.log("La suma de los números entre 10 y 999 es:", suma);

