// strings
// numbers
// boolean --> true y false

// undefined ---> indefinido
// null ---> no tiene valor
// NaN ---> Not a number

// object

let nombreTelefono = "motorola";
let precioTelefono = 100;
let descripcionTelefono = "dsadasdasdasd dasd asd asd dsa ";

// ANCHOR --->  objetos ---> Pares de clave : valor

let telefono = {
  precio: 100,
  nombre: "motorola",
  descripcion: "este es el mejor",
  aumentarPrecio: () => {
    return "el precio aumeneto";
  },
};

console.log(telefono.nombre);
console.log(telefono.descripcion);

console.log(telefono.precio);

let x = telefono.aumentarPrecio();
console.log(x);

// telefono = {
//   precio: 100,
//   nombre: "samsung",
//   descripcion: "este es el mejor",
//   aumentarPrecio: () => {
//     return "el precio aumeneto";
//   },
//   stock: 14
// };

console.log(telefono);

telefono.nombre = "samsung";
telefono.stock = 15;
delete telefono.precio;

console.log(telefono);

const perro = {
  nombre: "jack",
  edad: 3,
  ladrar: function () {
    return "wau wau";
  },
  hablar: function () {
    return "hola mi nombre es " + this.nombre;
  },
};

perro.color = "blanco y marron";

let retorno = perro.hablar();
console.log(retorno);

perro.nombre = "pepito";
let retornoDos = perro.hablar();
console.log(retornoDos);

perro.aumentarEdad = function () {
  // this.edad = this.edad + 1
  this.edad += 1;
  //   this.edad++;
};

perro.aumentarEdad();
console.log(perro.edad);

console.log(perro["edad"]);

let retornarPropiedad = (prop) => {
  return perro[prop];
};

let resultado = retornarPropiedad("nombre");
console.log(resultado);

class Telefono {
  constructor(nombre, precio, stock) {
    (this.nombre = nombre), (this.precio = precio), (this.stock = stock);
  }
}

let telefono1 = new Telefono("motorola", 100, 5);
let telefono2 = new Telefono("samsung", 120, 10);
let telefono3 = new Telefono("iphone", 220, 3);

console.log(telefono1);
console.log(telefono2);
console.log(telefono3);

class Producto {
  constructor(nombre, precio, stock, estaDisponible) {
    (this.nombre = nombre),
      (this.precio = precio),
      (this.stock = stock),
      (this.estaDisponible = estaDisponible);
  }
  actualizarDisponibilidad() {
    // this.estaDisponible = this.stock > 0 ? true : false
    this.estaDisponible = this.stock > 0;
  }
  vender(cantidad) {
    // this.stock = this.stock - cantidad;
    if (this.estaDisponible) {
      this.stock -= cantidad;
    } else {
      console.log("no hay stock");
    }
    this.actualizarDisponibilidad();
  }
}

let televisor = new Producto("tele", 100, 10, true);
let mochila = new Producto("mochila", 200, 50, true);

console.log(televisor.estaDisponible);

televisor.vender(2);

console.log(televisor.stock);

console.log(televisor.estaDisponible);
televisor.vender(2);
televisor.vender(6);
console.log(televisor.estaDisponible);

// mochila.vender(1)

// ANCHOR --->  Dot notation

// ANCHOR --->  propiedades

// ANCHOR --->  metodos

// ANCHOR --->  manipulacion

// ANCHOR --->  this

// ANCHOR --->  Bracket notation

// ANCHOR --->  class -constructor

// ANCHOR --->  for in
