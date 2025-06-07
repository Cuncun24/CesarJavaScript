import { magicNumber, number } from "./opereciones.js";
import Libro from "./libro.js";
import carros from "./carros.json" with { type: "json" };

console.log(magicNumber);
console.log(number);

let libro = new Libro("El libro de la vida", "Jhoel", 100);
console.log(libro.getPaginas());


carros.forEach(carro => {
    console.log("placa: " + carro.placa);
    console.log("marca: " + carro.marca);
    console.log("color: " + carro.color);
    console.log("*****************************");
});