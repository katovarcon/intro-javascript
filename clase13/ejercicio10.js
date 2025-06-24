//Ejercicio 10: Factorial de un número

// Creamos una función expresada
const calcularFactorial = function(numero) {
    let resultado = 1;

//Usamos un bucle for para calcular el factorial
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}

// Probamos la función en la consola
console.log(calcularFactorial(5));  