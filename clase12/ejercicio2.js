//Ejercicio 2 usando do while

const prompt = require('prompt-sync')();

//Pedimos al usuario que ingrese su contraseña
let contrasena = '';

do {
    contrasena = prompt('Ingresa tu contraseña: ');
} while (contrasena !== '1234'); //La contraseña correcta es '1234'

//Si la contraseña es incorrecta, se le pide que la ingrese de nuevo hasta que sea correcta
console.log('Contraseña correcta. Acceso concedido. Bienvenido!');