//Ejercicio 1: Manipulación completa de un objeto literal y arrays

//Creamos el objeto estudiante
let estudiante = {
    nombre: "Juan",
    edad: 18,
    notas: [7, 8, 6, 9, 10] // 5 notas
  };
  
  //Creamos una función para procesar al estudiante
  function procesarEstudiante(est) {
    //Agregar nueva nota 
    est.notas.push(8);
  
    //Eliminar la primera nota
    est.notas.shift();
  
    //Calcular el promedio de las notas restantes
    let suma = 0;
    est.notas.forEach(nota => {
      suma += nota;
    });
    let promedio = suma / est.notas.length;
  
    //Convertir nombre a mayúsculas
    let nombreMayus = est.nombre.toUpperCase();
  
    //Devolver nuevo objeto con nombre y promedio
    return {
      nombre: nombreMayus,
      promedio: promedio
    };
  }
  
  //Ejecutamos la función y mostramos el resultado
  let resultado = procesarEstudiante(estudiante);
  console.log("📝 Resultado procesado:");
  console.log(resultado);
  