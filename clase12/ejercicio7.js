//Ejercicio 7 - Matriz 5x5

const prompt = require('prompt-sync')();

//Declarar una matriz 5x5 con números enteros positivos
let matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ];
  
  //Crear una variable para guardar la suma total
  let sumaTotal = 0;
  
  //Recorrer la matriz con dos bucles for
  for (let fila = 0; fila < matriz.length; fila++) {
    for (let columna = 0; columna < matriz[fila].length; columna++) {
      sumaTotal += matriz[fila][columna];  // Sumar el resultado de cada elemento
    }
  }
  
  //Mostrar el resultado en consola
  console.log("La suma de todos los números en la matriz es:", sumaTotal);
  