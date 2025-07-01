//Ejercicio 6: Busca la ultima posición de un elemento repetido

//Lista de números inicial 
let numeros = [2, 5, 7, 2, 8, 7];

//Buscar la última posición del número 7
let ultimaPosicion = numeros.lastIndexOf(7);

//Verificamos si se encontró el número
if (ultimaPosicion !== -1) {
    console.log(`📍 El color "Azul" se encuentra en la posición: ${ultimaPosicion}`);
}