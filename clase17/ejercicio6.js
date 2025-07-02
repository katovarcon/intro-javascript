//Ejercicio 6: Autos y más autos

// Lista predefinida de marcas con espacios extra
let marcas = [" Toyota ", " Honda ", " Chevrolet ", " Ford ", " Nissan "];

function gestionarAutos(listaMarcas) {
  // Quitamos espacios en blanco con .map() y .trim()
  let marcasLimpias = listaMarcas.map(marca => marca.trim());

  // Verificamos si existe "Tesla"
  let existeTesla = marcasLimpias.includes("Tesla");

  // Reemplazamos todas las marcas "Ford" por "BMW"
  let marcasReemplazadas = marcasLimpias.map(marca =>
    marca === "Ford" ? "BMW" : marca
  );

  // Encontramos el índice de "Chevrolet"
  let indiceChevrolet = marcasReemplazadas.indexOf("Chevrolet");

  // Ordenamos alfabéticamente y unimos con puntos
  let resultadoFinal = marcasReemplazadas.slice().sort().join(".");

  // Devolvemos un objeto con todo lo pedido
  return {
    existeTesla,
    indiceChevrolet,
    resultadoFinal
  };
}

// Ejecutamos y mostramos resultado
let resultado = gestionarAutos(marcas);
console.log("🚘 Resultado:", resultado);
