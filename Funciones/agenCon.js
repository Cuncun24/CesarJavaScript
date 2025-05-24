const prompt = require("prompt-sync")();

let contactos = [];

function agregarContacto() {
  console.clear();
  let identificacion = prompt("Ingrese identificacion: ");
  let nombre = prompt("Ingrese nombre: ");
  let telefono = prompt("Ingrese telefono: ");
  let email = prompt("Ingrese email: ");
  let contacto = {
    identificacion: identificacion,
    nombre: nombre,
    telefono: telefono,
    email: email,
  };
  contactos.push(contacto);
  console.log("contacto agregado");
}

function indeti() {
  console.clear();
  let identificacion = prompt("Ingrese identificacion que desea consultar: ");
  contactos.forEach((contacto) => {
    if (contacto.identificacion == identificacion) {
      console.log("identificacion: " + contacto.identificacion);
      console.log("nombre: " + contacto.nombre);
      console.log("telefono: " + contacto.telefono);
      console.log("email: " + contacto.email);
      console.log("------------------------");
    }
  });
}

function listarContactos() {
    console.clear();
    console.log("Listado de contactos");
    contactos.forEach((contacto) => {
        console.log("Identificacion: " + contacto.identificacion);
        console.log("nombre: " + contacto.nombre);
        console.log("telefono: " + contacto.telefono);
        console.log("email: " + contacto.email);
        console.log("------------------------");
  });
}

function eliminarContacto() {
  console.clear();
  let identificacion = prompt("Ingrese identificacion que desea eliminar: ");
  contactos.forEach((contacto, index) => {
    if (contacto.identificacion == identificacion) {
      console.log("Identificacion: " + contacto.identificacion);
      console.log("nombre: " + contacto.nombre);
      console.log("telefono: " + contacto.telefono);
      console.log("email: " + contacto.email);
      console.log("------------------------");
      contactos.splice(index, 1);
    }
  });
  console.log("Contacto eliminado");
}

function menu() {
  let opcion = 0;
  do {
    console.log("Menu contactos");
    console.log("1. Agregar contacto");
    console.log("2. consultar contacto");
    console.log("3. listar contactos");
    console.log("4. Eliminar contacto");
    console.log("5. Salir");
    opcion = prompt("Opcion: ");
    if (opcion == 1) {
      opcion = parseInt(prompt("Ingrese opcion: [1-5]: "));
      switch (opcion) {
        case 1:
          agregarContacto();
          break;
        case 2:
          console.log("consultar");
          indeti();
          break;
        case 3:
          console.log("listar");
          listarContactos();
          break;
        case 4:
          console.log("eliminar");
          eliminarContacto();
          break;
        case 5:
          console.log("Saliendo...");
        default:
          console.log("Opcion incorrecta");
          break;
      }
    }
    prompt("Pulsa enter para continuar...");
  } while (opcion != 5);
}
menu();
