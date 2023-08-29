function adivinanzaNumerica() {
 
  var numeroSecreto = Math.floor(Math.random() * 100) + 1;
  var intentos = 0;

  alert("Bienvenido a la adivinanza numérica. Intenta adivinar el número secreto entre 1 y 100.");

  while (true) {
      var intento = parseInt(prompt("Ingresa tu intento:"));
      intentos++;

      if (isNaN(intento)) {
          alert("Por favor, ingresa un valor numérico válido.");
          continue; 
      }
      if (intento === numeroSecreto) {
          alert("¡Felicidades! Adivinaste el número secreto " + numeroSecreto + " en " + intentos + " intentos.");
          break; 
      } else if (intento < numeroSecreto) {
          alert("El número es mayor. Intenta nuevamente.");
      } else {
          alert("El número es menor. Intenta nuevamente.");
      }
  }
}

// Llamar a la función para iniciar el simulador
adivinanzaNumerica();
