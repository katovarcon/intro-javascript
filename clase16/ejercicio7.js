//Ejercicio 7: Filtra nombres que empiezan con "A" 

// Lista de nombres inicial
let nombres = ['Ana', 'Luis', 'Andrea', 'Maria'];

// Creamos un nuevo array con los nombres que empiezan con "A"
let nombresConA = nombres.filter(nombre => nombre.startsWith('A'));

// Mostramos el array de nombres que empiezan con "A"
console.log("Lista de nombres que empiezan con 'A':");
console.log(nombresConA);
