const prompt = require("prompt-sync")()
const numeros =[] //1-10

/*for (let i = 0; i < 10; i++) {
    numeros.push(i+1);
}
console.log(numeros);

const persona = [];

/*let nombre = prompt("Ingrese su nombre: ");
persona.push(nombre);
let apellido = prompt("Ingrese su apellido: ");
persona.push(apellido);
let correo = prompt("Ingrese su correo: ");
persona.push(correo);

console.log(persona);
console.log(persona[1]);*/

const ciudades = ['POPAYAN', 'NEIVA', 'BOGOTA', 'CALI', 'MEDELLIN']

const ciudad = prompt("Ingrese la ciudad: ");

let existe = ciudades.includes(ciudad.toUpperCase());
//larga

/*let existe = false;
for (let i = 0; i < ciudades.length; i++) {
    if (ciudad.toUpperCase() === ciudades[i]) {
        existe = true; 
        break;
    }
}*/
if (existe) {
    console.log("La ciudad existe");
} else {
    console.log("La ciudad no existe");
    ciudades.push(ciudad.toUpperCase());
}
console.log(ciudades);

//corta

