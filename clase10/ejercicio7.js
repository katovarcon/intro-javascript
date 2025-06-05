//Ejercicio 7: Intercambio de valores

//Declara dos variables con valores iniciales
let variableA = 5;
let variableB = 10;

//Muestra los valores iniciales en la consola
console.log("Valores iniciales:");
console.log("Variable A:", variableA);
console.log("Variable B:", variableB);

//Intercambia los valores de las variables usando una variable temporal
let temporal = variableA;
variableA = variableB;
variableB = temporal;

//Muestra los valores intercambiados en la consola
console.log("Valores intercambiados:");
console.log("Variable A:", variableA);
console.log("Variable B:", variableB);