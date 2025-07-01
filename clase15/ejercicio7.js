//Ejercicio 7: Verificar si una lista contiene un elemento

// Lista de comidas
let comidas = ["Pizza", "Hamburguesa", "Tacos"];

//Verificamos si "Sushi" está en la lista
let tieneSushi = comidas.includes("Sushi");

//Mostramos el resultado
if (tieneSushi) {
    console.log("🍣 Sí, la lista tiene Sushi!");
  } else {
    console.log("❌ No, la lista NO tiene Sushi");
  }
  
