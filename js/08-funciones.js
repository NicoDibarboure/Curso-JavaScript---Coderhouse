// * Declaracion de la funcion.

let edad2 = 2; // ? --> Scope General

function suma(a, b) {
  return a + b; //* Bloque de código

  // let nombre = "Nico"; // ? --> Scope unicamente en esta funcion.
}

// * Ejecucion de la funcion.
console.log(suma(3, 5));
// ! Scope  --> Es el ambiente donde existe la variable.

// crear bloques de codigo

// funciones declaradas

// declaracion
// let edad = 2;

// function saludar() {
// bloque de codigo
//   let nombre = "pepe";

//   console.log(nombre);
//   console.log(edad);

//   if (true) {
//     let x = 15;
//     console.log(nombre);
//     let apellido = "perez"
//     apellido = "fulanito"
//     if(){
//         console.log( apellido)
//     }
//   } else {
//     let y = 12;
//   }

// }

// ejecucion, invocacion, llamar a la funcion

// saludar();

// console.log(nombre);

let nombre = "pepito";

function saludar(nombre) {
  return "hola " + nombre + " como estas?";
}

function sumar() {
  let n1 = 2;
  let n2 = 5;
  let r = n1 + n2;
  return r;
}

let x = sumar();
console.log(x);

let resultadoResta1 = restar(10, 3);
function restar(numUno, numDos) {
  return numUno - numDos;
}
let resultadoResta2 = restar(5, 1);
let resultadoResta3 = restar(4, 2);
console.log(resultadoResta1);
console.log(resultadoResta2);
console.log(resultadoResta3);

let saludito = saludar(prompt("nombre"));
console.log(saludito);

let edad = 15;
console.log(edad);

// EXPRESADAS ---> anonimas

let multiplicar = function (n1, n2) {
  return n1 * n2;
};

let resul = multiplicar(3, 5);
console.log(resul);

console.log(typeof multiplicar);

// expresada ---> anonima --> arrow function
let dividir = (n1, n2) => n1 / n2;

let resultadoDivision = dividir(10, 2);
console.log(resultadoDivision);

let conversor = (cantidadPesos) => cantidadPesos / 1000;

let resultadoConversor = conversor(20000);
console.log(resultadoConversor);

// Calcular el impuesto a la patente
// impuesto ---> 100
// depende la marca del auto se le agrega x cantidad
// vw 30
// audi 40
// volvo 20
// renault 10
// mercedes 45

let calcImp = (marcaDelAuto) => {
  let impuestoBase = 100;

  switch (marcaDelAuto) {
    case "vw":
      return impuestoBase + 30;
    case "audi":
      return impuestoBase + 40;
    case "volvo":
      return impuestoBase + 20;
    case "renault":
      return impuestoBase + 10;
    case "mercedes":
      return impuestoBase + 45;
    default:
      return "la marca no debe pagar impuestos";
  }
};

let impuestoTotalPepito = calcImp("dsadas");
console.log(impuestoTotalPepito);
