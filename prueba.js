// class Usuario {
//     constructor(nombre, apellido, libros, mascotas){
//         this.nombre = nombre,
//         this.apellido = apellido,
//         this.libros = libros,
//         this.mascotas = mascotas
//     }

//     getFullName(){
//         return `${this.nombre} ${this.apellido}`;
//     }

//     addMascota(mascota){
//         this.mascotas.push(mascota);
//     }

//     getMascotas(){
//         return this.mascotas.length;
//     }

//     addBook(book, autor){
//         this.libros.push({nombre: book, autor: autor});
//     }

//     getBooks(){
//         const nombres = this.books.map(e => e.nombre);
//         return nombres;
//     }

// }

function Usuario(nombre, apellido, libros, mascotas){  
    this.nombre = nombre
    this.apellido = apellido
    this.libros = libros
    this.mascotas = mascotas
}

Usuario.prototype.getFullName = function(){
    return this.name + this.apellido;
}

Usuario.prototype.addMascota = function(mascota){
    this.mascotas.push(mascota);
}

Usuario.prototype.getMascotas = function(){
    return this.mascotas.length;
}

Usuario.prototype.addBook = function(book, autor){
    this.libros.push({nombre: book, autor: autor});
}

Usuario.prototype.getBooks = function() {
        let arrayNombres = []
    for (let i = 1; i < this.libros.length; i++) {
    arrayNombres.push(this.libros[i].nombre)
    }
    return arrayNombres
}

let nombre = 'Dario', apellido = "Santillan", libros = [], mascotas = [];

let usuario = new Usuario(nombre, apellido, libros, mascotas);
usuario.addMascota('Firulais');
usuario.addMascota('Michi');
usuario.addBook('Rambo', 'Stalonne');
usuario.addBook('IT', 'Stephen King');

console.log(usuario.getMascotas())
console.log(usuario.getBooks())
console.log(usuario.getFullName())
