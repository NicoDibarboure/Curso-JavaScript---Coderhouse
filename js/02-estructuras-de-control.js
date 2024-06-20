// Una respuesta a una pregunta.

// let edad = Number(prompt("Ingresa tu edad"));
// let nombre = prompt("Ingresa tu nombre");

// * Toda tipo de comparacion siempre devuelve un booleano.

let n1 = 5;
let n2 = 10;

// console.log(n1 > n2); // * Mayor
// console.log(n1 >= n2); // * Mayor o igual
// console.log(n1 < n2); // * Menor
// console.log(n1 <= n2); // * Menor o igual
// console.log(n1 == n2); // * Comparacion simple
// console.log(n1 === n2); // * Comparacion estricta. (Valor y tipo de dato)
// console.log(n1 != n2); // * -> Distincion simple
// console.log(n1 !== n2); // *-> Distincion estricta

// if (edad > 18) {
// * Bloque de codigo.
//   console.log(`Tu nombre es: ${nombre} y tu edad es de: ${edad} años.`);
// }

// let estaLogeado = true;

// if (estaLogeado) {
//   console.log("Tienes Acceso.");
// } else {
//   console.log("No tienes acceso.");
// }
// let acompañado = true;
// let edad = Number(prompt("Ingresa tu edad"));
// if (edad > 17) {
//   console.log("podes entrar");
// } else if (edad < 18 && acompañado) {
//   console.log("podes entrar con el adulto.");
// } else {
//   console.log("No podes entrar.");
// }

// && AND
// || OR

// * El operador AND (&&) se queda con el primer falsy o con el ultimo truethy
let x = true && true && "pepe" && true && "casa" && "juancito";

// * El operador OR (||) se queda con el primer truethy o con el ultimo falsy
let y = true || true || "pepe" || true || "casa" || "juancito";

console.log(x);
console.log(y);
