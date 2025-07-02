//Ejercicio 8: Lugar y números

// Lista ordenada de números
let lista = [1,2,3,4,5,6,7,8,9,10,11];

// Función búsqueda binaria
function busquedaBinaria(arr, target) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);
    
    if (arr[medio] === target) {
      return medio; // posición encontrada
    } else if (arr[medio] < target) {
      inicio = medio + 1; // buscamos a la derecha
    } else {
      fin = medio - 1; // buscamos a la izquierda
    }
  }

  return -1; // no encontrado
}

// Números a buscar
let numerosABuscar = [1, 5, 6, 9, 11];

// Buscar y mostrar posición de cada uno
numerosABuscar.forEach(num => {
  let pos = busquedaBinaria(lista, num);
  console.log(`El número ${num} está en la posición: ${pos}`);
});
