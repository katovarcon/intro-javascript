//Ejercicio 4: Calcucla la suma total de los números 

// Lista de números inicial
let numeros = [1, 2, 3, 4];

// Usamos reduce para calcular la suma total
let sumaTotal = numeros.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);

// Mostramos la suma total
console.log("La suma total de los números es:", sumaTotal);
