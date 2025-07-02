//Ejercicio 8: Busca un nombre específico en una lista

// Lista de nombres
let nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];

// Buscamos el nombre de Laura
let nombreBuscado = 'Laura';

// Verificamos si el nombre está en la lista
let tieneLaura = nombres.includes(nombreBuscado);

// Mostramos el resultado
if (tieneLaura) {
    console.log(`✅ Sí, la lista tiene el nombre "${nombreBuscado}"!`);
}