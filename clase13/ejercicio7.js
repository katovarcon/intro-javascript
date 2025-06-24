//Ejercicio 7: Mensaje según la hora

//Declaramos una variable global 
let horaActual = 15;

//Creamos una función declarada
function mostrarSaludo() {
    // Verificamos la hora y mostramos el mensaje correspondiente
    if (horaActual < 12) {
        console.log("¡Buenos días!☀️");
    } else if (horaActual < 18) {
        console.log("¡Buenas tardes!🌅");
    } else {
        console.log("¡Buenas noches!🌙");
    }
}

// Probamos la función en la consola
mostrarSaludo(); 