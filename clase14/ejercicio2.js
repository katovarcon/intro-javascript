//  Ejercicio 2: Calcular promedio de notas

const prompt = require('prompt-sync')();

// Pedimos las 5 calificaciones al usuario y las convertimos a número
let nota1 = parseFloat(prompt("Ingresa la calificación 1:"));
let nota2 = parseFloat(prompt("Ingresa la calificación 2:"));
let nota3 = parseFloat(prompt("Ingresa la calificación 3:"));
let nota4 = parseFloat(prompt("Ingresa la calificación 4:"));
let nota5 = parseFloat(prompt("Ingresa la calificación 5:"));

// Creamos la función flecha para calcular el promedio
const calcularPromedio = (n1, n2, n3, n4, n5) => {
  return (n1 + n2 + n3 + n4 + n5) / 5;
};

// Usamos la función para sacar el promedio
let promedio = calcularPromedio(nota1, nota2, nota3, nota4, nota5);

// Mostramos el resultado
console.log("El promedio de tus calificaciones es: " + promedio);
