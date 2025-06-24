// Ejercicio 6: El deportista

// Creamos el objeto deportista
const deportista = {
    nombre: "Carlos",
    energia: 100,
    experiencia: 0,
  
    // Función para entrenar horas
    entrenarHoras: function(horas) {
      this.energia -= horas * 5;       // Resta energía
      this.experiencia += horas * 2;   // Suma experiencia
  
      // Mostramos cómo queda el deportista
      console.log(`🏃‍♂️ ${this.nombre} ha entrenado ${horas} horas.`);
      console.log(`⚡ Energía restante: ${this.energia}`);
      console.log(`🎯 Experiencia ganada: ${this.experiencia}`);
      console.log("-------------------------------");
    }
  };
  
  // Probamos que el deportista entrene
  deportista.entrenarHoras(3);  
  deportista.entrenarHoras(2);  

  
  