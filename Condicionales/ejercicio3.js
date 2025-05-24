const prompt = require("prompt-sync")()

let diaNumero = prompt("Ingrese el número del día: ");
const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

if (diaNumero >= 1 && diaNumero <= 7) {
  console.log(dias[diaNumero - 1]);
} else {
  console.log("Número fuera de rango");
}