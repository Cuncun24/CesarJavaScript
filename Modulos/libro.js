export default class Libro {

    #paginas
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.#paginas = paginas;
    }
    getPaginas() {
        return this.#paginas;
    }
}
