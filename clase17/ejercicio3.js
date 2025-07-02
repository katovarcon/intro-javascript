//Ejercicio 3: Gestión completa de arrays

//Array de productos (cada uno con nombre y precio)
let productos = [
    { nombre: "Camisa", precio: 30 },
    { nombre: "Pantalón", precio: 45 },
    { nombre: "Zapatos", precio: 60 }
  ];
  
//Creamos una función que gestiona productos
  function gestionarProductos(lista) {
    //Añadimos un nuevo producto
    lista.push({ nombre: "Gorra", precio: 20 });
  
    //Eliminamos el último producto
    lista.pop();
  
    //Encontramos el índice del producto "Pantalón"
    let indicePantalon = lista.findIndex(p => p.nombre === "Pantalón");
  
    //Verificamos si existe un producto con precio > 50
    let hayCaro = lista.some(p => p.precio > 50);
  
    //Devolvemos los nombres de productos separados por comas
    let nombresProductos = lista.map(p => p.nombre).join(", ");
  
    //Devolvemos todo junto en un objeto
    return {
      indicePantalon: indicePantalon,
      productoCaro: hayCaro,
      nombres: nombresProductos
    };
  }
  
  //Ejecutamos la función con el array de productos
  let resultado = gestionarProductos(productos);
  
  //Mostramos el resultado final
  console.log("📊 Resultado:");
  console.log(resultado);
  