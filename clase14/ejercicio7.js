// Ejercicio7 : Libros

// Primero definimos los dos objetos libro1 y libro2 con sus propiedades
const libro1 = {
    título: "El Principito 🌟",
    autor: "Antoine de Saint-Exupéry",
    anioPublicacion: 1943
  };
  
  const libro2 = {
    título: "Cien Años de Soledad 📖",
    autor: "Gabriel García Márquez",
    anioPublicacion: 1967
  };
  
  // Ahora creamos la función mostrarLibro que recibe un arreglo de libros
  function mostrarLibro(libros) {
    // Recorremos cada libro con un ciclo for
    for (let libro of libros) {
      // Mostramos la info en consola con un formato bonito y emojis
      console.log(`📚 Título: ${libro.título}`);
      console.log(`✍️ Autor: ${libro.autor}`);
      console.log(`📅 Año de publicación: ${libro.anioPublicacion}`);
      console.log('//////////////////////'); // para separar cada libro
    }
  }
  
  // Finalmente llamamos a la función pasando un arreglo con libro1 y libro2
  mostrarLibro([libro1, libro2]);
  