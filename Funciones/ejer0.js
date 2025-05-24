const prompt = require("prompt-sync")()


function areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}
console.log(areaCirculo(5));


let arreglo = [1,3,5,7,9];
let arr =[];

function cuadrados(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        arr.push(arreglo[i] * arreglo[i]);
    }
    return arr;
}
cuadrados(arreglo);
console.log(arreglo);
console.log(arr);
