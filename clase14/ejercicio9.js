//Ejercicio 9: Ultimo modelo de auto

// 🎯 Aquí tenemos nuestro array con modelos de autos (algunos repetidos)
const modelosAutos = [
    "Toyota Corolla",
    "Ford Mustang",
    "Honda Civic",
    "Toyota Corolla",
    "Chevrolet Camaro",
    "Honda Civic",
    "Tesla Model 3",
    "Ford Mustang",
  ];
  
  // Creamos una función para encontrar la última aparición de un modelo en el array
  function ultimaAparicionModeloAuto(modelo) {
    let ultimaPos = -1;
  
    // Recorremos el array desde el inicio hasta el final
    for (let i = 0; i < modelosAutos.length; i++) {
      if (modelosAutos[i] === modelo) {
        ultimaPos = i; 
      }
    }
  
    //Ahora verificamos si lo encontramos o no
    if (ultimaPos !== -1) {
      console.log(`🚘 El modelo "${modelo}" aparece por última vez en la posición ${ultimaPos + 1}.`);
    } else {
      console.log(`❌ El modelo "${modelo}" no está presente en la lista.`);
    }
  }
  
  // Probamos la función con diferentes modelos     
  ultimaAparicionModeloAuto("Honda Civic");

