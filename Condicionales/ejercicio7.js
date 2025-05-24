let numero = 17;
let esPrimo = numero > 1;

for (let i = 2; i < numero; i++) {
  if (numero % i === 0) {
    esPrimo = false;
    break;
  }
}

console.log(esPrimo ? "Es primo" : "No es primo");