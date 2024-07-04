// array ---> coleccion

// let numero1 = 2
// let numero2 = 5
// let numero3 = 12

// los arrays tienen elementos ---- los objetos tiene prop y metodos
let numerosDeLaSuerte = [2, 5, 12];
let palabras = ["casa", "avion", "pepe", "juan"];

// trabajan por posiciones ---> empiezan en 0
console.log(palabras[0]);

let nombre1 = "jorge";

console.log(nombre1[0]);

// prop ---> length

console.log(palabras.length);
// siempre la ultima posicion de un array es la longitud - 1

console.log(palabras[0]);
console.log(palabras[palabras.length - 1]);

console.log(nombre1.length);

let numeros = [5, 2, 7, 4, 9];

// numeros[1] = 15;

// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);
console.log("Aca empieza el for");
for (let i = 0; i < numeros.length; i++) {
  //   numeros[i] = numeros[i] + 10;
  numeros[i] += 10;
}

console.log(numeros);

// arrays de objetos

// let telefono = {
//     nombre: "dsada",
//     precio: 123
// }
// let telefono2 = {
//     nombre: "sadas",
//     precio: 321321
// }
// let telefono3 = {
//     nombre: "dsadasdas",
//     precio: 5412431321
// }

// for (let i = 0; i < telefonos.length; i++) {
//   console.log(telefonos[i].nombre);
//   console.log("--------");
// }

// let n  = 2

// n = n + 5
// n += 5

let numeritos = [1, 6, 2, 7, 1];
console.log(numeritos.length); // la longitud

console.log(numeritos);
let x = numeritos.push("pepe", "juan", 14, true, {}, "algo mas");
console.log(x);

let existe = numeritos.includes("juan"); // boolean
console.log(existe);

numeritos.pop();
numeritos.pop();
let z = numeritos.pop(); // devuelve el elemento eliminado

console.log(z);

const telefonos = [
  {
    nombre: "motorola",
    precio: 30,
    stock: 3,
  },
  {
    nombre: "samsung",
    precio: 20,
    stock: 1,
  },
  {
    nombre: "iphone",
    precio: 100,
    stock: 5,
  },
];

class Telefono {
  constructor(nombre, precio, stock) {
    (this.nombre = nombre), (this.precio = precio), (this.stock = stock);
  }
}

// let seguimos = confirm("Queres agregar otro telefono?");
// console.log(seguimos);
// while( seguimos ){

// }

const agregarTelefonos = () => {
  let nombre = prompt("ingrese el nombre");
  let precio = Number(prompt("ingrese el precio"));
  let stock = Number(prompt("ingrese el stock"));

  let telefonoNuevo = new Telefono(nombre, precio, stock);

  telefonos.push(telefonoNuevo);
};

let continuar = confirm("quieres agregar un nuevo telefono?");
while (continuar) {
  agregarTelefonos();
  continuar = confirm("quieres agregar otro?");
}

const calcularVentaTotal = () => {
  // devolver el total que ganaria

  let valorTotal = 0; // 90 // 110 // 610

  for (let i = 0; i < telefonos.length; i++) {
    // valorTotal = valorTotal + telefonos[i].precio * telefonos[i].stock;
    valorTotal += telefonos[i].precio * telefonos[i].stock;
  }

  return valorTotal;
};

let totalVendido = calcularVentaTotal();
console.log(totalVendido);

console.log(telefonos);

// function pepe (){}
// let pepe = ()=>{}
// let pepe = function(){}

let frase = "hola como estas";
let palabritas = ["pepe", "casa", "abeja", "y no se "];

console.log(frase.length);
let fraseMayuscula = frase.toUpperCase();
console.log(frase);
console.log(fraseMayuscula);

console.log(frase.indexOf("z")); // -1
console.log(palabritas.indexOf("casa")); // -1

// console.log(frase.includes("a"));
// console.log(palabritas.includes("casa"));
