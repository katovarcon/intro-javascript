//Ejercicio 4: Impar o Par

// Creamos una función declarada con una variable local
function esPar(numero) {
    let resultado;
  
    // Verificamos si el número es par o impar
    if (numero % 2 === 0) {
      resultado = "Es par";
    } else {
      resultado = "Es impar";
    }
    return resultado;
  }
  
// Probamos la función en la consola
  let mensaje = esPar(7);
  console.log(mensaje);