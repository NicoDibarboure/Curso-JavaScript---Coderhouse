// TODO: Solicitar al usuario una (1) tecla.Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”.

let letra = prompt("Ingrese una letra: ");

if (letra === "y" || letra === "Y") {
  alert("Correcto");
} else {
  alert("Error");
}
