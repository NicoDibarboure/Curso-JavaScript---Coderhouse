let start = Number(prompt("Ingrese el numero de inicio:"));
let end = Number(prompt("Ingrese el numero de fin:"));

if (start <= end && end - start < 100) {
  for (let i = start; i <= end; i++) {
    i % 2 === 0
      ? console.log(`El numero ${i} es Par.`)
      : console.log(`El numero ${i} es Impar.`);
  }
}
if (end - start >= 100) {
  alert("Indique un rango menor.");
}
