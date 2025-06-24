//Ejercicio 3: Mensaje local y global

// Creamos ambas variables, una global y otra local dentro de una función
let saludoGlobal = "Hola desde el scope global";

function mostrarMensaje() {
  let saludoLocal = "Hola desde el scope local";

// Mostramos ambos mensajes en la consola
  console.log(saludoGlobal);  
  console.log(saludoLocal);   
}

// Llamamos a la función para que se ejecute
mostrarMensaje();
