//Ejercicio 2: Número mayor

// Creamos la función expresada
const encontrarMayor = function(numero1, numero2) {
    // Comparamos los dos números
    if (numero1 > numero2) {
      return numero1; // Si el primero es mayor, lo regresamos
    } else {
      return numero2; // Si no, regresamos el segundo
    }
  };
  
// Probamos la función con dos números
let mayor = encontrarMayor(8, 12);
console.log("El número mayor es: " + mayor);
  