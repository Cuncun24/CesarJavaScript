import Triangulo from "./triangulo.js";

let botonArea= document.getElementById("btnCalcular");
let base, altura;
botonArea.addEventListener("click", () => {
    if (validarDatos()) {
        let unTriangulo = new Triangulo(base, altura);
        let area = unTriangulo.calcularAreaTriangulo();
        alert(`La área del triangulo es de ${area} metros cuadrados`);
    }
})



function validarDatos() {
    base = document.getElementById("txtBase").value;
    altura = document.getElementById("txtAltura").value;

    if (base === "" || altura === "") {
        alert("Debes ingresar los datos");
        return false;
    }

    return true;
}

