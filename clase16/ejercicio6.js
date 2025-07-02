//Ejercicio 6: Agrega un prefijo y un sufijo 

//Lista de palabras
let palabras = ['hola', 'mundo', 'javascript'];

//Agregamos un prefijo y un sufijo a cada palabra
let palabrasConPrefijoSufijo = palabras.map(palabra => `¡${palabra}!`);

//Mostramos el nuevo array con prefijo y sufijo
console.log("Lista de palabras con prefijo y sufijo:");
console.log(palabrasConPrefijoSufijo);

