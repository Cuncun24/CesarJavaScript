function calcular() {
  let valor1 = parseInt(document.getElementById("input1").value);
  let valor2 = parseInt(document.getElementById("input2").value);
  let resultado = valor1 + (valor1 * valor2) / 100;
  document.getElementById("resultado").innerHTML = resultado;
}
function calcularCuadrado() {
  let valor1 = parseInt(document.getElementById("ladoC").value);
  let perimetro = valor1 * 4;
  let area = valor1 * valor1;

  document.getElementById("resultadoCuadradoP").innerHTML =
    "El perimetro del cuadrado es: " + perimetro;
  document.getElementById("resultadoCuadradoA").innerHTML =
    " El area del cuadrado es: " + area;
}
function leerNombre() {
  let valor1 = document.getElementById("nombre").value;

  document.getElementById("nombreUsuario").innerHTML = "Hola " + valor1;
}
function calcularMedia() {
  let valor1 = parseInt(document.getElementById("entero1").value);
  let valor2 = parseInt(document.getElementById("entero2").value);
  let valor3 = parseInt(document.getElementById("entero3").value);
  let media = (valor1 + valor2 + valor3) / 3;
  document.getElementById("resultadoMedia").innerHTML = "La media es: " + media;
}
function calcularKm() {
  let valor1 = parseInt(document.getElementById("km1").value);
  let valor2 = parseInt(document.getElementById("km2").value);
  let km = valor1 / valor2;
  document.getElementById("resultadoKm").innerHTML = "Litros consumidos: " + km;
}
function convertir() {
  let horas = parseInt(document.getElementById("horas").value);
  let minutos = parseInt(document.getElementById("minutos").value);
  let segundosHoras = horas * 3600;
  let segundosMinutos = minutos * 60;
  document.getElementById("resultadoConvertir").innerHTML =
    "En Horas: " + segundosHoras;
  document.getElementById("resultadoConvertir").innerHTML +=
    " En Minutos:" + segundosMinutos;
}
function unidades() {
  let numero = parseInt(document.getElementById("numerosUnidades").value);
  let decenas = Math.floor(numero / 10);
  let unidades = numero % 10;
  document.getElementById("resultadoUnidades").innerHTML =
    "La unidad es: " + unidades;
  document.getElementById("resultadoDecenas").innerHTML =
    "La decena es: " + decenas;
}
function gramos() {
  let personas = parseInt(document.getElementById("numeroPersonas").value);
  let papa = personas * 200; // gramos
  let kilosPapa = papa / 1000;
  let huevos = kilosPapa * 5;
  let cebolla = kilosPapa * 300;
  document.getElementById("cantidadInredientes").innerHTML = "Papa: " + papa;
  document.getElementById("cantidadInredientes").innerHTML +=
    " Huevos: " + huevos;
  document.getElementById("cantidadInredientes").innerHTML +=
    " Cebolla: " + cebolla;
}
function intercambio() {
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  let temp = a;
  a = b;
  b = temp;
  document.getElementById("resultadoIntercambio").innerHTML =
    "El valor a ahora es valor b:= " + a;
  document.getElementById("resultadoIntercambio").innerHTML +=
    " El valor b ahora es valor a:= " + b;
}
function esPar() {
  let numero = parseInt(document.getElementById("numero").value);
  let esPar = numero % 2 === 0;
  document.getElementById("resultadoEsPar").innerHTML =
    "El número " + numero + " es par?: " + esPar;
}
