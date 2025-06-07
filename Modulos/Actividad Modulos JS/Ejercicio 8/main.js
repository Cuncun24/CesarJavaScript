import Alcancia from './alcancia.js';

const miAlcancia = new Alcancia();
miAlcancia.agregarMoneda(200);
miAlcancia.agregarMoneda(500);
miAlcancia.agregarMoneda(1000);
console.log(miAlcancia.contarMonedas());
console.log(miAlcancia.calcularTotal());