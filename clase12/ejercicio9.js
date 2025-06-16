//Ejercicio 9: Gastos

const prompt = require('prompt-sync')();

let gastos = [
    [1135, 2500,  900, 1600, 2800, 3650, 1100], // Semana 1
    [1750, 1890, 1900, 1300,  898, 1750, 2800], // Semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560], // Semana 3
    [ 800, 1250, 1430, 2100, 1980, 1270,  950]  // Semana 4
  ];
  
  // Variables para resultados
  let totalSemana2 = 0;
  let totalDia3 = 0;
  let totalMes = 0;
  
  let maxGastosSemana = 0;
  let semanaMax = 1;
  
  let maxGastosDia = 0;
  let diaMax = 1;
  
  // Sumar gastos y buscar máximos
  for (let i = 0; i < gastos.length; i++) {
    let sumaSemana = 0; // suma de la semana i
    for (let j = 0; j < gastos[i].length; j++) {
      let gasto = gastos[i][j];
      totalMes += gasto;
      sumaSemana += gasto;
  
      // Sumar día 3 (columna 2)
      if (j === 2) {
        totalDia3 += gasto;
      }
    }
  
    // Guardar total semana 2 (fila 1)
    if (i === 1) {
      totalSemana2 = sumaSemana;
    }
  
    // Buscar semana con más gastos
    if (sumaSemana > maxGastosSemana) {
      maxGastosSemana = sumaSemana;
      semanaMax = i + 1; // para mostrar desde 1
    }
  }
  
  // Buscar día con más gastos
  for (let j = 0; j < gastos[0].length; j++) {
    let sumaDia = 0;
    for (let i = 0; i < gastos.length; i++) {
      sumaDia += gastos[i][j];
    }
    if (sumaDia > maxGastosDia) {
      maxGastosDia = sumaDia;
      diaMax = j + 1;
    }
  }
  
  // Mostrar resultados
  console.log("Total gastos semana 2:", totalSemana2);
  console.log("Total gastos día 3:", totalDia3);
  console.log("Total gastos mes:", totalMes);
  console.log("Semana con más gastos:", semanaMax);
  console.log("Día con más gastos:", diaMax);
  