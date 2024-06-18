// TODO: Solicitar al usuario un (1) número.Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: “Elegiste a Homero” si es 1.“Elegiste a Marge” si es 2.“Elegiste a Bart” si es 3.“Elegiste a Lisa” si es 4.

let personaje = Number(prompt("Ingrese un numero"));

if (personaje === 1) {
  console.log("Elegiste a Homero.");
} else if (personaje === 2) {
  console.log("Elegiste a Marge”.");
} else if (personaje === 3) {
  console.log("Elegiste a Bart.");
} else if (personaje === 4) {
  console.log("Elegiste a Lisa”.");
} else {
  console.log("Ingrese un numero del 1 al 4.");
}
