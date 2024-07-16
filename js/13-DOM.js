let usuarios = [
  {
    nombre: "pepe",
    email: "pepe@gmail.com",
    telefono: "123456",
  },
  {
    nombre: "juan",
    email: "juangmail.com",
    telefono: "123456",
  },
  {
    nombre: "maria",
    telefono: "123456",
    email: "maria@gmail.com",
  },
];

// forEach
// nunca retorna nada
// y tampoco me pide que yo retorne algo adentro

let arrayForEach = usuarios.forEach((usuario, indice) => {
  usuario.id = indice + 1;
  usuario.nombre =
    usuario.nombre.charAt(0).toUpperCase() + usuario.nombre.slice(1);
});

// let palabra = "juancito";
// let corte = palabra.slice(1, 3);
// console.log(corte);
// "J" + "uancito"

console.log(usuarios);

// some ---> devuelve siempre un booleano
// me pide que retorne en cada vuelta una condicion
// si se cumple por lo menos 1 vez --> devuelve true

// let encontrar = usuarios.find((usuario) => usuario.nombre === "Juan");
// if (encontrar !== undefined) {
//   console.log(true);
// } else {
//   console.log(false);
// }

let existeJuan = usuarios.some((usuario) => usuario.nombre === "Juan");
console.log(existeJuan);

// let x = {
//   edad: 22,
// };

// console.log(x.edad);
// console.log(x.email);

// every

let todosTienenEmail = usuarios.every((usuarios) =>
  usuarios.email.includes("@")
);
console.log(todosTienenEmail);

// let juan = usuarios.find((usuario) => usuario.nombre === "Juan");
// console.log(juan.email.includes("@"));

const determinarSiTieneEmailValido = (nombre) => {
  let usuario = usuarios.find((usuario) => usuario.nombre === nombre);
  let tieneEmailValido = usuario.email.includes("@");
  return tieneEmailValido;
};

let pepe = determinarSiTieneEmailValido("Pepe");
let juan = determinarSiTieneEmailValido("Juan");
let maria = determinarSiTieneEmailValido("Maria");

console.log({ pepe: pepe });
console.log({ juan: juan });
console.log({ maria });

// let edad = 15;

// let persona = {
//   edad,
//   x: 1,
//   y: 2,
// };
// console.log(persona);

// reduce
// sort

//OBJETO MATH ---> matematico
let numeros = [1, 6, 2, 7, 8, 3];
let usuariosDos = [
  {
    id: 1,
    nombre: "pepe",
    email: "pepe@gmail.com",
    telefono: "123456",
  },
  {
    id: 2,
    nombre: "juan",
    email: "juangmail.com",
    telefono: "123456",
  },
  {
    id: 3,
    nombre: "maria",
    telefono: "123456",
    email: "maria@gmail.com",
  },
];
let arrayDeIds = usuariosDos.map((usuario) => usuario.id); // [1, 2, 3]
console.log(arrayDeIds);

let max = Math.max(...arrayDeIds); // spread operator
let min = Math.min(...numeros);

console.log(max);
console.log(min);

let numero = 5.4;

console.log(Math.ceil(numero)); // lo lleva al techo ( 6 )
console.log(Math.floor(numero)); // lo lleva al piso ( 5 )
console.log(Math.round(numero)); // llevarlo al entero mas cercano

let precio = 2500;
let kg = Number("2.5"); // 2.5
console.log(precio * kg);

// let aleatorio = Math.floor(Math.random() * 36 + 1); // 0 y 1 ( nunca sera 1 )
// console.log(aleatorio);
let aleatorio = Math.random(); // 0 y 1 ( nunca sera 1 )
console.log(aleatorio);

let num = 9;
console.log(Math.sqrt(num));

// 2.500,50
// 2500.50
// console.log(
//   precio.toLocaleString("es-Ar", { style: "currency", currency: "ARS" })
// );

let elemento1 = "piedra";
let elemento2 = undefined;
let numRandom = Math.random() * 15 + 1;
if (numRandom <= 5) {
  elemento2 = "piedra";
} else if (numRandom <= 10) {
  elemento2 = "tijera";
} else {
  elemento2 = "papel";
}

console.log(elemento2);

//OBJETO DATE ---> fechas

let fecha = new Date();
console.log(fecha.getDay()); // luneas 1 -- domingo 7
console.log(fecha.getMonth()); // enero 0 -- diciembre es 11
console.log(fecha.getDate()); // -- dia del mes
console.log(fecha.getFullYear()); // año

let fechaFutura = new Date("2024-07-11T22:29:30");
console.log(fechaFutura);
console.log(fechaFutura.getHours());
console.log(fechaFutura.getMinutes());
console.log(fechaFutura.getSeconds());
// año mes dia ---> el mes siempre empieza en 0
let horasRestantes = (fechaFutura - fecha) / (1000 * 60 * 60);
let minutosRestantes = (fechaFutura - fecha) / (1000 * 60);
let segundosRestantes = (fechaFutura - fecha) / 1000;
console.log(horasRestantes);
console.log(minutosRestantes);
console.log(segundosRestantes);

console.log(typeof { id: 1, x: "ads" } === "object"); // string --> "string" || "object" || "number"

// ordenar --> sort
// reducir un array a su minima expresion ---> reduce
let arrayCuentas = [
  {
    id: "2",
    cbu: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 5100,
    titularCuenta: "pepito",
    estadoDeCuenta: "al dia",
  },
  {
    id: "1",
    cbu: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 300,
    titularCuenta: "maria",
    estadoDeCuenta: "con deuda",
  },
  {
    id: "2",
    cbu: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 2200,
    titularCuenta: "juancito",
    estadoDeCuenta: "al dia",
  },
  {
    id: "5",
    cbu: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 500,
    titularCuenta: "carmen",
    estadoDeCuenta: "al dia",
  },
  {
    id: "4",
    cbu: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 1200,
    titularCuenta: "Jack",
    estadoDeCuenta: "con deuda",
  },
];

let nums = [1, 6, 12, 2, 3, 5];

nums.sort((a, b) => b - a); // 5, 4, 3, 2, 1

console.log(nums);
let palabras = ["casa", "avion", "abeja", "mariposa"];

let x = palabras.sort((a, b) => b.localeCompare(a));
console.log(x);

arrayCuentas.sort((a, b) => b.id - a.id); // {} - {}
console.log(arrayCuentas);

const sumarArray = () => {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) {
    acc += nums[i];
  }
  return acc;
};

// reduce
let numeritos = [1, 6, 12, 2, 3, 5];

let total = numeritos.reduce((acc, elemento) => acc + elemento, 0);

console.log(total);

let totalCuentas = arrayCuentas.reduce((acc, elemento) => {
  return acc + elemento.saldoEnPesos;
}, 0);
console.log(totalCuentas);

// 0 + 2 + 51 + 123 123+
let totalNombres = arrayCuentas.reduce((acc, elemento) => {
  return acc + elemento.titularCuenta + " ";
}, "");

console.log(totalNombres);
