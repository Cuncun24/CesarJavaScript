import libros from './libros.json' assert { type: 'json' };

export function enRango(numero) {
  if (numero >= 10 && numero <= 50) {
    return "Está en el rango";
  } else {
    return "Fuera del rango";
  }
}

export function calcularDescuento(precio) {
  let descuento = 0;
  if (precio > 1000) descuento = 0.2;
  else if (precio >= 500) descuento = 0.1;
  return precio - (precio * descuento);
}

export function categoriaIMC(imc) {
  if (imc < 18.5) return "Bajo peso";
  else if (imc < 25) return "Normal";
  else if (imc < 30) return "Sobrepeso";
  else return "Obesidad";
}

export function nivelRiesgo(edad, tieneEnfermedades) {
  if (edad > 60 || tieneEnfermedades) return "Alto riesgo";
  else if (edad >= 40 && tieneEnfermedades) return "Riesgo moderado";
  else return "Bajo riesgo";
}

export function esBisiesto(anio) {
  if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
    return "Es bisiesto";
  } else {
    return "No es bisiesto";
  }
}

export function esElegibleParaPrestamo(salario, puntaje) {
  if (salario > 3000000 && puntaje > 650) {
    return "Elegible para préstamo";
  } else {
    return "No elegible para préstamo";
  }
}

export function consultarLibrosPorPalabraClaveTitulo(palabra) {
  return libros.filter(libro => libro.titulo.toLowerCase().includes(palabra.toLowerCase()));
}

export function consultarLibrosPaginas() {
  return libros.map(libro => ({ titulo: libro.titulo, numeroPaginas: libro.numeroPaginas }));
}
