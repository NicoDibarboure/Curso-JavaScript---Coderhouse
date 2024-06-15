// ANCHOR saber si una persona es mayor de edad ( 18 o mas)

let edad = 22;

if (edad >= 18) {
  console.log("si, es mayor");
} else {
  console.log("no, es menor");
}

// ANCHOR saber si es fin de semana ( si el dia es sabado o domingo )

// const dia = prompt("Ingresa el dia");

// if (dia === "sabado" || dia === "domingo") {
//   console.log("hoy es " + dia + ", por eso es fin de semana");
// } else if (
//   dia === "lunes" ||
//   dia === "martes" ||
//   dia === "miercoles" ||
//   dia === "jueves" ||
//   dia === "viernes"
// ) {
//   console.log("hoy es " + dia + ", por eso es dia de semana");
// } else {
//   console.log("Debes ingresar un dia valido");
// }

// ANCHOR saber si los siguientes 2 numeros son positivos o no
// -si ambos son positivos
// -si uno es positivo
// -si ninguno es positivo

let n1 = 20;
let n2 = 3;

if (n1 > 0 && n2 > 0) {
  console.log("ambos son positivos");
} else if (n1 > 0 || n2 > 0) {
  if (n1 > 0) {
    console.log("el n1 es positivo");
  } else {
    console.log("el n2 es positivo");
  }
} else {
  console.log("ninguno es positivo");
}

// ANCHOR saber si un numero es par

// ANCHOR saber si un numero es impar

// console.log(n1 + n2);
// console.log(n1 - n2);
// console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2); // ---> resto

let numero = 13;

// numero % 2 === 0 // ---> bool

// console.log(numero % 2 === 0);

if (numero % 2 !== 0) {
  console.log("es impar");
} else {
  console.log("es par");
}
