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

/*const ciudades = ['POPAYAN', 'NEIVA', 'BOGOTA', 'CALI', 'MEDELLIN']

const ciudad = prompt("Ingrese la ciudad: ");

let existe = ciudades.includes(ciudad.toUpperCase());/*
//larga

/*let existe = false;
for (let i = 0; i < ciudades.length; i++) {
    if (ciudad.toUpperCase() === ciudades[i]) {
        existe = true; 
        break;
    }
}
if (existe) {
    console.log("La ciudad existe");
} else {
    console.log("La ciudad no existe");
    ciudades.push(ciudad.toUpperCase());
}
console.log(ciudades);*/

/*metodos
pop elimina el ultimo elemrnto
push agrega un elemento al final
shift elimina el primer elemento
unshift agrega un elemento al principio
splice elimina un rango de elementos
reverse inverte el orden de los elementos
sort ordena los elementos


let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros2.pop();
console.log(numeros2);
numeros2.push(11);
console.log(numeros2);
numeros2.shift();
console.log(numeros2);
numeros2.unshift(0);
console.log(numeros2);
numeros2.splice(3, 2);
console.log(numeros2);
numeros2.reverse();
console.log(numeros2);
numeros2.sort();    
console.log(numeros2);*/


let num = Math.floor(Math.random() * 100) + 1;

let intentos = 1;

while (intentos <= 5) {
    let numero = parseInt(prompt("Ingrese un numero entre 1 y 100: "));
    if (numero === num) {
        console.log("acertaste en " + intentos + " intentos");
        break
    } else if (numero > num){
        console.log("el numero es menor")
    } else {
        console.log("el numero es mayor")
    }
    if (intentos === 5) {
        console.log("intentos restantes: " + (5 - intentos));
        break;
    }else {
        console.log("intentos restantes: " + (5 - intentos));
        intentos++;
    }
}
if (intentos === 5) {
    console.log("no has acertado el numero en 5 intentos, el numero es: " + num);
}











