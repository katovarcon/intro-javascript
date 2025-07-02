//Ejercicio 2: Filtra los números pares de un array

// Lista de números inicial
let numeros = [1, 2, 3, 4, 5, 6];

// Creamos un nuevo array con los números pares
let numerosPares = numeros.filter(num => num % 2 === 0);

// Mostramos el array de números pares
console.log("Lista de números pares:");
console.log(numerosPares);
