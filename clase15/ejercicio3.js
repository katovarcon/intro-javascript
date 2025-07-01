//Ejercicio 3: Agregar y eliminar fila de mascotas

//Fila de mascotas inicial
let filaMascotas = ["Perro", "Gato", "Conejo"];

//Llega un Hámster con atención urgente
filaMascotas.unshift("Hámster"); // lo metemos al inicio 

//Atiendo al primero en la fila
let atendido = filaMascotas.shift(); // sacamos al primero y lo guardamos

// Mostramos quién fue atendido
console.log("✅ Mascota atendida:", atendido);

// Mostramos cómo quedó la fila
console.log("🐾 Fila actual de mascotas:");
console.log(filaMascotas);
