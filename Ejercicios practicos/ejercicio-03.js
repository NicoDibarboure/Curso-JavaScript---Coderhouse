// * Declarar variables para representar la información de un carnet de conducir. Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.

let numeroId = prompt("Indique su numero de Identificacion:");
let nombre = prompt("Indique su numero de Nombre:");
let apellido = prompt("Indique su numero de Apellido:");
let direccion = prompt("Indique su numero de Direccion:");
let fechaDeNacimiento = prompt("Indique su numero de Fecha de nacimiento:");
let carnet = numeroId + nombre + apellido + direccion + fechaDeNacimiento;

console.log(
  `Su id es ${numeroId}, su nombre completo es ${nombre} ${apellido}, su direccion es ${direccion} y su fecha de nacimiento es ${fechaDeNacimiento}.`
);
