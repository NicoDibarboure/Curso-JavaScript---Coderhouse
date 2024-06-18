// * Solicitar al usuario cinco (5) nombres pertenecientes a integrantes de una familia. Luego, concatenar dichas entradas y efectuar una salida por alerta.

let p1 = prompt("Ingrese el primer nombre:");
let p2 = prompt("Ingrese el segundo nombre:");
let p3 = prompt("Ingrese el tercer nombre:");
let p4 = prompt("Ingrese el cuarto nombre:");
let p5 = prompt("Ingrese el quinto nombre:");

const familia = "\n" + p1 + "\n" + p2 + "\n" + p3 + "\n" + p4 + "\n" + p5;

alert(`Los nombres de la famila son: ${familia}`);
