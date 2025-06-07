

// 1 ejercicio
function mejorValor(min, max) {
    let zMejor = 0, xMayor = 0, yMayor = 0
    for (let index = 0; index < 100; index++) {
        let x = Math.floor(Math.random() * (max - min + 1)) + min;
        let y = Math.floor(Math.random() * (max - min + 1)) + min;
        let z = (x * x + y * y);
        if (z > zMejor){
            zMejor = z
            xMayor = x
            yMayor = y
        }
    }
    return (`Z = X² + Y² = ${zMejor} = ${xMayor}² + ${yMayor}²`)
}

// 2 ejercicio
function generadorContrasena() {
    let mayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let minus = 'abcdefghijklmnopqrstuvwxyz';
    let digitos = '0123456789';
    let simbolos = '@#$%&()=?¿*+[]{}';   
    let array = [mayus, minus, digitos, simbolos]
    let password = ""
    for (let i = 0; i < array.length; i ++){
        let pAleatorio = array[i][Math.floor(Math.random() * array[i].length)];
        let sAleatorio = array[i][Math.floor(Math.random() * array[i].length)];
        password += pAleatorio + sAleatorio
    }
    return password
    
}
console.log(generadorContrasena())

// 3 ejercicio
function areaCirculo(r) {
    return (Math.PI * Math.pow(r, 2)).toFixed(2)
}
console.log(areaCirculo(2))

// 4 ejercicio
function cantidadVocales(str) {
    let vocalesEncontradas = 0
    let vocales = ["a", "e", "i", "o", "u"]

    for (let i = 0; i < str.length; i ++){
        for (let j = 0; j < vocales.length; j ++){
            if (str[i].toLowerCase() == vocales[j]) {
                vocalesEncontradas ++
            }
        }
    }
    
    return vocalesEncontradas
}
console.log(cantidadVocales("Jaider"))

// 5 ejercicio
function numerosPares(arr) {
    let numerosParesCant = 0

    for (let i = 0; i < arr.length; i ++){
        if (arr[i] % 2 == 0){
            numerosParesCant ++
        }
    }
    
    return `hay ${numerosParesCant} numeros pares`
}
console.log(numerosPares([2,3,6,8,9,10,23]))

// 6 ejercicio
function sumaArreglo(arr) {
    let sumaValores = 0

    for (let i = 0; i < arr.length; i ++){
        sumaValores += arr[i]
    }
    
    return sumaValores
}
console.log(sumaArreglo([2,3,6,8,9,10,23]))

// 7 ejercicio
function sumaArreglo(arr) {
    let mayor = -Infinity

    for (let i = 0; i < arr.length; i ++){
        if (arr[i] > mayor){
            mayor = arr[i]
        }
    }
    
    return mayor
}
console.log(sumaArreglo([2,3,6,8,9,10,23]))

// 8 ejercicio
function cantidadPalabras(str) {
    let palabras = 1

    for (let i = 0; i < str.length; i ++){
        if (str[i] == " "){
            palabras ++
        }
    }
    
    return palabras
}
console.log(cantidadPalabras("Jhoel Ipia hola mundo"))

// 9 ejercicio
function invertidoArr(arr) {
    let invertido = []

    for (let i = arr.length -1; i >= 0; i--) {
        invertido.push(arr[i])
    }
    return invertido
}
console.log(invertidoArr([1,2,3,4,5,6,7,8,9]))

// 10 ejercicio
function duplicados(arr) {
    let sinDuplicar = [arr[0]]
    for (let i = 0; i < arr.length; i++) {
      let existe = true
        for (let j = 0; j < sinDuplicar.length; j++) {
            if (arr[i] == sinDuplicar[j]) {
                existe = false
            }
        }
        if (existe){
          sinDuplicar.push(arr[i])
        }
    }
    return sinDuplicar
}
console.log(duplicados([1,2,2,4,5,6,1,6,9,3]))

// 11 ejercicio
function nombresMayusculas(arr) {
    let arrMayuscula = []
    for (let i = 0; i < arr.length; i++) {
        arrMayuscula.push(arr[i].toUpperCase())
    }
    return arrMayuscula
}
console.log(nombresMayusculas(["ipia", "sneider", "piolin", "indio"]))

// 12 ejercicio
function valorIndex(arr, valor) {
    let posicion = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valor) {
            posicion = i
        }
    }
    return posicion
}
console.log(valorIndex(["sneider", "piolin", "salinas", "ipia"], "salinas"))

// 13 ejercicio
function valorIndex(arr, valor, remplazo) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valor) {
            arr[i] = remplazo
        }
    }
    return arr
}
console.log(valorIndex(["sneider", "piolin", "salinas", "ipia"], "salinas", "sneider"))

// 14 ejercicio
function promedioArr(arr) {
    let promedio = 0
    let suma = 0
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i]
    }
    promedio = suma / arr.length 
    return promedio 
}
console.log(promedioArr([1,2,3,4,5,6,7,8,9]))

console.log("\n=== RESULTADOS FINALES ===");
console.log(`Personas que votaron: ${votosTotales}`);
console.log(`Candidato Uno: ${votosUno} votos`);
console.log(`Candidato Dos: ${votosDos} votos`);
console.log(`Candidato Tres: ${votosTres} votos`);
console.log(`Votos en Blanco: ${votosBlanco}`);

// 15 ejercicio 
const prompt = require('prompt-sync')(); 

let votosTotales = 0;
let votosUno = 0;
let votosDos = 0;
let votosTres = 0;
let votosBlanco = 0;

const maxVotantes = 50;
const clavePresidente = "8245"; 

console.log("=== MENU ELECCIONES 2025 ===");

while (votosTotales < maxVotantes) {
    console.log(`
1. Candidato Uno
2. Candidato Dos
3. Candidato Tres
4. Voto en Blanco
5. Cerrar elecciones (clave)
    `);

    let opcion = prompt("Seleccione una opci�n: ");

    if (opcion === "1") {
        votosUno++;
        votosTotales++;
    } else if (opcion === "2") {
        votosDos++;
        votosTotales++;
    } else if (opcion === "3") {
        votosTres++;
        votosTotales++;
    } else if (opcion === "4") {
        votosBlanco++;
        votosTotales++;
    } else if (opcion === "5") {
        let clave = prompt("Ingrese la clave para cerrar elecciones: ");
        if (clave === clavePresidente) {
            console.log("? Elecciones cerradas por el presidente de mesa.");
            break;
        } else {
            console.log("? Clave incorrecta. Contin�an las votaciones.");
        }
    } else {
        console.log("?? Opci�n no v�lida. Intente de nuevo.");
    }

    console.log(`Votos registrados: ${votosTotales}/${maxVotantes}`);
}
let cuentas = [];

let continuar = true;

while (continuar) {
    console.log("========================")
    console.log(`=== MENÚ BANCO ADSO ===`);
    console.log(`1. Crear Cuenta`)
    console.log(`2. Consignar Cuenta`)
    console.log(`3. Retirar Cuenta`)
    console.log(`4. Consultar Cuenta por Código`)
    console.log(`6. Listar Cuentas`)
    console.log(`7. Salir`)
    console.log("========================")

    let opcion = prompt("Opción: ");

    switch (opcion) {
        case "1":
            crearCuenta();
            break;
        case "2":
            consignarCuenta();
            break;
        case "3":
            retirarCuenta();
            break;
        case "4":
            consultarCuentaPorCodigo();
            break;
        case "6":
            listarCuentas();
            break;
        case "7":
            continuar = false;
            break;
        default:
            console.log("Opción no válida");
            break;
    }
}

function crearCuenta() {
    let nombre = prompt("Nombre: ");
    let codigo = prompt("Código: ");
    let saldo = parseInt(prompt("Saldo: "));

    cuentas.push({
        nombre: nombre,
        codigo: codigo,
        saldo: saldo
    });
    console.log("========================")
    console.log("Cuenta creada con éxito");
    console.log(`Nombre: ${nombre}`);
    console.log(`Código: ${codigo}`);
    console.log(`Saldo: ${saldo}`);
    console.log("========================")
}

function consignarCuenta() {
    let codigo = prompt("Código de la cuenta a consignar: ");
    let cantidad = parseInt(prompt("Cantidad a consignar: "));

    let cuenta = buscarCuentaPorCodigo(codigo);

    if (cuenta) {
        cuenta.saldo += cantidad;

        console.log("========================")
        console.log("Cuenta consignada con éxito");
        console.log(`Nombre: ${cuenta.nombre}`);
        console.log(`Código: ${cuenta.codigo}`);
        console.log(`Saldo: ${cuenta.saldo}`);
        console.log("========================")
    } else {
        console.log("Cuenta no encontrada");
    }
}

function retirarCuenta() {
    let codigo = prompt("Código de la cuenta a retirar: ");
    let cantidad = parseInt(prompt("Cantidad a retirar: "));

    let cuenta = buscarCuentaPorCodigo(codigo);

    if (cuenta) {
        cuenta.saldo -= cantidad;

        console.log("========================")
        console.log("Cuenta retirada con éxito");
        console.log(`Nombre: ${cuenta.nombre}`);
        console.log(`Código: ${cuenta.codigo}`);
        console.log(`Saldo: ${cuenta.saldo}`);
        console.log("========================")
    } else {
        console.log("Cuenta no encontrada");
    }
}

function consultarCuentaPorCodigo() {
    let codigo = prompt("Código de la cuenta a consultar: ");

    let cuenta = buscarCuentaPorCodigo(codigo);

    if (cuenta) {
        console.log("========================")
        console.log("Cuenta consultada con éxito");
        console.log(`Nombre: ${cuenta.nombre}`);
        console.log(`Código: ${cuenta.codigo}`);
        console.log(`Saldo: ${cuenta.saldo}`);
        console.log("========================")
    } else {
        console.log("Cuenta no encontrada");
    }
}

function listarCuentas() {
    console.log("========================")
    console.log("Cuentas listadas:");

    cuentas.forEach(cuenta => {
        console.log(`Nombre: ${cuenta.nombre}`)
        console.log(`Código: ${cuenta.codigo}`)
        console.log(`Saldo: ${cuenta.saldo}`)
    });
    console.log("========================")
}

function buscarCuentaPorCodigo(codigo) {
    let cuenta = cuentas.find(cuenta => cuenta.codigo === codigo);
    return cuenta;
}

