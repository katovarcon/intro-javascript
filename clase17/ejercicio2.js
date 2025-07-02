//Ejercicio 2: Analisis y modificación de una cadena de texto

//Pedimos al usuario que escriba una oración
let oracionUsuario = "   Me encanta programar en JavaScript todos los días   ";

// Creamos una función para procesar la oración
function procesarOracion(texto) {
  //Quitar espacios al principio y final
  let oracionLimpia = texto.trim();

  //Dividir en palabras
  let palabras = oracionLimpia.split(" ");

  //Reemplazar todas las 'a' por '@'
  let conArrobas = oracionLimpia.replace(/a/g, "@");

  //Buscar la posición de la palabra "javascript" (sin importar mayúsculas)
  let posicion = oracionLimpia.toLowerCase().indexOf("javascript");

  //Convertir la oración a una cadena separada por guiones
  let conGuiones = palabras.join("-");

  //Devolver los resultados en un objeto
  return {
    oracionOriginal: texto,
    oracionLimpia: oracionLimpia,
    conArrobas: conArrobas,
    posicionJavascript: posicion,
    conGuiones: conGuiones
  };
}

//Ejecutamos la función con la oración del usuario
let resultado = procesarOracion(oracionUsuario);

//Mostramos los resultados
console.log("📊 Resultado del análisis:");
console.log(resultado);
