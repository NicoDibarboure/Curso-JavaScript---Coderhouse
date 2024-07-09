// copia por valor vs copia por referencia

let a = 1;
let b = a;

console.log(a);
console.log(b);

a += 7;

console.log(a);
console.log(b);

let persona = {
  nombre: "pepe",
  edad: 22,
};

let persona2 = persona; // {} - []

console.log(persona);
console.log(persona2);

persona.nombre = "juancito";

console.log(persona);
console.log(persona2);

persona2.edad = 55;

console.log(persona);
console.log(persona2);

const productos = [
  // tablas - registros
  { id: 1, nombre: "manzanas", stock: 10 },
  { id: 2, nombre: "peras", stock: 5 },
  { id: 3, nombre: "bananas", stock: 15 },
  { id: 4, nombre: "uvas", stock: 8 },
  { id: 5, nombre: "naranjas", stock: 2 },
  { id: 6, nombre: "kiwis", stock: 4 },
  { id: 7, nombre: "frutillas", stock: 7 },
];

// Encontrar un producto en base al id y retornarlo
// si no lo encuentra retornar false

const encontrar = (identificador) => {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].id === identificador) {
      return productos[i];
    }
  }

  return false;
};

let productoEncontrado = encontrar(4);
console.log(productoEncontrado);

// encontrar un elemento por id y sumarle 10 unidades

const encontrarYsumar = (iden) => {
  let miProducto = encontrar(iden);
  miProducto.stock += 10;
};

encontrarYsumar(4);

console.log(productos);

// encontrar(5)
// encontrar(3)
// encontrar(1)

// filtrar productos que tengan stock mayor que 5 y devolver
// un array con esos productos

// [ ] ---> los elementos que cumplan la condicion

const filtrador = (miArray) => {
  let nuevoArray = [];
  for (let i = 0; i < miArray.length; i++) {
    if (miArray[i].stock > 5) {
      //  {}.stock > 5
      nuevoArray.push(miArray[i]);
    }
  }

  return nuevoArray;
};

let x = filtrador(productos);
console.log(x);
// funcional o declarativa

// let y = productos.filter((elemento) => elemento.stock > 5);
// console.log(y);

let suma = (a, b) => {
  return a + b;
};

suma(2, 5);

const push = (a) => {
  a;
};
// productos.push("pepe");
// productos.includes("juan");
// productos.indexOf(12);

// callbacks
// productos.filter(() => {});
// productos.map(() => {});
// productos.find(() => {});

// funciones que retornan una funcion
// funcion que reciba como argumento otra funcion

const saludar = (nombre, otraFuncion) => {
  console.log("hola " + nombre);
  otraFuncion();
};

const terminarSaludo = () => {
  console.log("adios");
};

saludar("pepe", terminarSaludo);

// un callback es una funcion que se pasa como argumento a otra funcion
const items = [
  // tablas - registros
  { id: 1, nombre: "manzanas", stock: 10 }, // 0
  { id: 2, nombre: "peras", stock: 5 },
  { id: 3, nombre: "bananas", stock: 15 },
  { id: 4, nombre: "uvas", stock: 8 },
  { id: 5, nombre: "naranjas", stock: 2 },
  { id: 6, nombre: "kiwis", stock: 4 },
  { id: 7, nombre: "frutillas", stock: 7 },
];

// metodos de arrays --> iteran el array
// find ---> siempre devuelve el elemento o undefined ( siempre el primero )
// retornar en cada vuelta un booleano
let id = Number(prompt("dame el id"));
// const itemEncontrado = items.find((elemento, i) => {
//   console.log("el elemento " + elemento.nombre + " esta en la posicion " + i);
// }); // elemento
const itemEncontrado = items.find((elemento, i) => elemento.id === id); // elemento

console.log(itemEncontrado);

// filter ---> siempre devuelve un nuevo array con los elementos que cumplan la condicion
// siempre retornar un booleano
const arrayFiltrado = items.filter((elemento) => elemento.stock > 5);

console.log(items);
console.log(arrayFiltrado);

const recorrerYCambiar = (arreglo) => {
  let nuevoArray = [];
  for (let i = 0; i < arreglo.length; i++) {
    nuevoArray.push({
      id: arreglo[i].id,
      nombre: arreglo[i].nombre,
      precio: 100,
    });
  }
  return nuevoArray;
};

let arrayNuevo = recorrerYCambiar(items);
console.log(arrayNuevo);

// map ---> recorrer un array y devolver uno nuevo
// siempre siempre siempre va ser de la misma longitud
//  retornar en cada vuelta lo que quiero agregar
let arrayMapeado = items.map((elemento) => {
  return { id: elemento.id, nombre: elemento.nombre, precio: 100 };
}); // []
console.log(arrayMapeado);
