//Ejercicio5: Manipulación de arrays y cadenas

// Array inicial de frases
let frases = [
    "El clima está MALO hoy",
    "Este libro es muy MALO",
    "El servicio aquí es MALO",
  ];
  
  //Función para procesar las frases
  function procesarFrases(arrFrases) {
    // Creamos un nuevo array con las frases modificadas
    let frasesModificadas = arrFrases.map(frase => {
      //Convertir a minúsculas
      let fraseMinuscula = frase.toLowerCase();
  
      //Dividir en palabras
      let palabras = fraseMinuscula.split(" ");
  
      // Reemplazar "malo" por "bueno"
      let palabrasModificadas = palabras.map(palabra =>
        palabra === "malo" ? "bueno" : palabra
      );
  
      // Unir las palabras en una frase de nuevo
      let fraseFinal = palabrasModificadas.join(" ");
  
      return fraseFinal;
    });
  
    //Devolver el nuevo array con frases procesadas
    return frasesModificadas;
  }
  
  // Ejecutamos la función y guardamos el resultado
  let resultado = procesarFrases(frases);
  
  // Mostramos el resultado
  console.log("📝 Frases procesadas:");
  console.log(resultado);
  