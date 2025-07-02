//Ejercicio 4: Transformar lista de cadenas

//Pedimos al usuario que ingrese una lista de nombres separados por comas
let entradaUsuario = "Julian, Maria, Malena, Andrea, Pablo, Pedro";

//Función para transformar y analizar nombres
function transformarYAnalizarNombres(cadena) {
  //Convertir la cadena en array y quitar espacios
  let nombres = cadena.split(",").map(nombre => nombre.trim());

  //Verificar si existe el nombre "Juan"
  let contieneJuan = nombres.includes("Juan");

  //Reemplazar "Maria" por "Ana"
  let nombresReemplazados = nombres.map(nombre =>
    nombre === "Maria" ? "Ana" : nombre
  );

  //Buscar índice de "Pedro"
  let indicePedro = nombresReemplazados.indexOf("Pedro");

  //Ordenar alfabéticamente y unir con puntos
  let nombresOrdenados = nombresReemplazados.slice().sort().join(".");

  //Devolver resultados
  return {
    contieneJuan: contieneJuan,
    indicePedro: indicePedro,
    nombresFinales: nombresOrdenados
  };
}

//Ejecutamos la función
let resultado = transformarYAnalizarNombres(entradaUsuario);

//Mostramos el resultado
console.log("📊 Resultado final:");
console.log(resultado);
