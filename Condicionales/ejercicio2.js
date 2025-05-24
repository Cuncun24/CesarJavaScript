const prompt = require("prompt-sync")()

let edad = prompt("Ingrese su edad: ");
let tieneCedula = true;
let cedulaInscrita = true;

if (edad >= 18 && tieneCedula && cedulaInscrita) {
  console.log("Puede votar");
} else {
  console.log("No puede votar");
}