//Ejercicio 8: Función backend

function backEnd(num1, num2) {
    // Recorremos del 1 al 100
    for (let i = 1; i <= 100; i++) {
      // Primero checamos si es múltiplo de ambos
      if (i % num1 === 0 && i % num2 === 0) {
        console.log("🔄 Back End");
      }
      else if (i % num1 === 0) {
        console.log("🔙 Back");
      }
      else if (i % num2 === 0) {
        console.log("🏁 End");
      }
      else {
        console.log(i);
      }
    }
  }
  
  // Ejemplo usando 3 y 5 como parámetros (¡el clásico!)
  backEnd(3, 5);
  