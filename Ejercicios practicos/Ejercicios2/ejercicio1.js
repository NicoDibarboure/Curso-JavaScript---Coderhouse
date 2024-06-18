// TODO: Solicitar al usuario un (1) nombre. Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. Caso contrario, la salida será “Yo no fui”.

let nombreAlmacenado = "Nico";
let nombre = prompt("Ingrese un nombre: ");

if (nombre === nombreAlmacenado) {
  console.log("Fui yo");
} else {
  console.log("Yo no fui");
}
