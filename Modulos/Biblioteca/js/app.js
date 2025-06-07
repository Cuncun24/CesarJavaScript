import Libro from "./libro.js";

let libros = [];
let tabla = document.getElementById("datosLibros");

let btnCrearLibro = document.getElementById("btnCrearLibro");
btnCrearLibro.addEventListener("click", function() {
    //validar los campos que no esten vacios
    
    //crear un objeto de tipo Libro
    let titulo = document.getElementById("txtTitulo").value;
    let autor = document.getElementById("txtAutor").value;
    let editorial = document.getElementById("txtEditorial").value;
    let idioma = document.getElementById("txtIdioma").value;

    let libro = new Libro(titulo, autor, editorial, idioma);

    //agregar el objeto creado al arreglo libros
    libros.push(libro);

    //agregar a la tabla el nuevo libro}
    console.log(libros);
    tabla.innerHTML += `
        <tr class="text-center">
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>${libro.editorial}</td>
            <td>${libro.idioma}</td>
        </tr>
    `;
   


})