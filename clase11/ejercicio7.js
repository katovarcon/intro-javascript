//Ejercicio 7: Calculadora

const prompt = require('prompt-sync')();

// Pedimos al usuario dos números y la operación
let num1 = prompt("Dame el primer número:");
let num2 = prompt("Ahora dame el segundo número:");
let operacion = prompt("¿Qué operación quieres hacer? (suma, resta, multiplicación, división)");

// Convertimos los números a tipo Number
num1 = Number(num1);
num2 = Number(num2);

// Verificamos que los números sean válidos
if (isNaN(num1) || isNaN(num2)) {
  console.log("🚫 Uy, uno de esos no es un número válido. Inténtalo de nuevo.");
} else {
  let resultado;

  switch (operacion.toLowerCase()) {
    case "suma":
      resultado = num1 + num2;
      console.log(`✨ ¡Listo! La suma de ${num1} + ${num2} es ${resultado} 😊`);
      break;
    case "resta":
      resultado = num1 - num2;
      console.log(`✨ Cool, la resta de ${num1} - ${num2} es ${resultado} 😉`);
      break;
    case "multiplicación":
      resultado = num1 * num2;
      console.log(`✨ Perfecto, ${num1} por ${num2} da ${resultado} 😄`);
      break;
    case "division":
    case "división":
      if (num2 === 0) {
        console.log("⚠️ No se puede dividir entre cero 🤨");
      } else {
        resultado = num1 / num2;
        console.log(`✨ ¡Super!, ${num1} dividido entre ${num2} es ${resultado} 😎`);
      }
      break;
    default:
      console.log("❌ Esa operación no la conozco. Elige  suma, resta, multiplicación o división.");
  }
}
