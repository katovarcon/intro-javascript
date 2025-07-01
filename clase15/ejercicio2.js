//Ejercicio 2: Eliminar invitados de una lista

// Lista de invitados inicial
let invitados = ["Ana", "Juan", "Carlos", "Sofía"];

//Sofía no va
let eliminado = invitados.pop(); // quita al último y lo guarda

//Mostramos quién fue eliminado
console.log("🚫 Invitado eliminado:", eliminado);

//Mostramos la lista actualizada
console.log("🎉 Lista actual de invitados:");
console.log(invitados);
