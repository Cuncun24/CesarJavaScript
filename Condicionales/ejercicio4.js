const prompt = require("prompt-sync")()
let edad = prompt("Ingrese su edad: ");

if (edad < 5) {
  precio = 0;
} else if (edad <= 18) {
  precio = 5000;
} else {
  precio = 10000;
}

console.log(`Precio de entrada: ${precio} pesos`);