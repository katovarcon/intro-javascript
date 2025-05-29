
const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese un número del 1 al 7
let dia = prompt("Por favor, ingresa un número del 1 al 7: ");
// Convertir la entrada a dia de la semana
dia = Number(dia);
// Determinar el día de la semana
if (isNaN(dia) || dia < 1 || dia > 7) {
    console.log("Por favor, ingresa un número válido entre 1 y 7.");
}
else {
    switch (dia) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log("ERROR.Este número no es válido.");
    }
}