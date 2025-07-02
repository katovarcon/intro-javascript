//Ejercicio 7: La Florería

// Lista predefinida con nombres de flores con espacios extra
let flores = [" Rosa ", " Tulipán ", " Orquídea ", " Lírio "];

function gestionarFloreria(listaFlores) {
  // Quitar espacios en blanco con .map() y .trim()
  let floresLimpias = listaFlores.map(flor => flor.trim());

  // Verificar si existe "Margarita" (ojo con tildes!)
  // Mejor normalizamos para comparar sin tildes
  const normalizar = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let existeMargarita = floresLimpias.some(flor => normalizar(flor.toLowerCase()) === "margarita");

  if (existeMargarita) {
    floresLimpias.push("Azucena");
  }

  // Reemplazar todas las "Orquídea" por "Clavel"
  let floresReemplazadas = floresLimpias.map(flor =>
    normalizar(flor.toLowerCase()) === "orquidea" ? "Clavel" : flor
  );

  // Encontrar índice de "Girasol"
  let indiceGirasol = floresReemplazadas.findIndex(flor => normalizar(flor.toLowerCase()) === "girasol");

  // Si no está, agregar "Girasol" al inicio
  if (indiceGirasol === -1) {
    floresReemplazadas.unshift("Girasol");
  }

  // Ordenar alfabéticamente y unir con puntos
  let resultadoFinal = floresReemplazadas.slice().sort().join(".");

  return resultadoFinal;
}

// Ejecutamos la función y mostramos resultado
let resultado = gestionarFloreria(flores);
console.log("🌸 Flores procesadas:");
console.log(resultado);
