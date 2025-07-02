//Ejercicio 9: Desfaío extra

// Lista desordenada
let lista = [12, 13, 5, 7, 1, 2, 47, 100];

// Bubble sort para ordenar la lista de menor a mayor
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Intercambiamos arr[j] y arr[j+1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Función de búsqueda binaria (igual que antes)
function busquedaBinaria(arr, target) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);
    
    if (arr[medio] === target) {
      return medio; // posición encontrada
    } else if (arr[medio] < target) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }

  return -1; // no encontrado
}

// Primero ordenamos la lista
let listaOrdenada = bubbleSort(lista.slice()); // Usamos slice para no modificar el original

console.log("Lista ordenada:", listaOrdenada);

// Números que queremos buscar
let numerosABuscar = [12, 5, 22, 100];

// Buscar y mostrar resultados
numerosABuscar.forEach(num => {
  let pos = busquedaBinaria(listaOrdenada, num);
  if (pos !== -1) {
    console.log(`El número ${num} está en la posición: ${pos}`);
  } else {
    console.log(`El número ${num} no está en la lista.`);
  }
});
