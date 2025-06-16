// Ejercicio 3 ciclo for

const prompt = require('prompt-sync')();

// Pedimos al usuario que ingrese un número
let numero = parseInt(prompt('Ingresa un número: '));

// Iniciamos una variable para contar los números impares
let contadorImpares = 0;

// Usamos un ciclo for para contar los números desde cero hasta 100
for (let i = 0; i <= 100; i++) {
    // Verificamos si el número es impar
    if (i % 2 !== 0) {
        // Si es impar, incrementamos el contador
        contadorImpares++;
    }
}

// Mostramos el resultado
console.log(`La cantidad de números impares entre 0 y 100 es: ${contadorImpares}`);