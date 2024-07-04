// Array --> Coleccion de datos

let numero1 = 2;
let numero2 = 32;
let numero3 = 52;

// Los arrays tienen elementos --- Los objetos tienen propiedades y metodos.

let numeros = [2, 32, 52, 12, 23];
let palabras = ["Hola", "Mundo", "Adios"];

// Los arrays trabajan por posiciones (Indice). --> Empiezan en 0.

console.log(numeros[0]);

let nombre = "Juan";
console.log(nombre[0]); // J

// Propiedad --> length

console.log(palabras.length);

// Siempre la ultima posicion de un array es el length - 1.

for (let i = 0; i < palabras.length; i++) {
  palabras[i] += "!";
}

console.log(palabras);

// Arrays de objetos

let telefonos = [
  {
    marca: "iPhone",
    modelo: "12 Pro Max",
    color: "Gris",
    precio: 1200,
    stock: 15,
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S21",
    color: "Negro",
    precio: 1200,
    stock: 15,
  },
];

class Telefono {
  constructor(nombre, precio, stock) {
    (this.nombre = nombre), (this.precio = precio), (this.stock = stock);
  }
}

let calcularVentaTotal = () => {
  // Devolver el total que ganaria

  let valorTotal = 0;

  for (let i = 0; i < telefonos.length; i++) {
    valorTotal += telefonos[i].precio * telefonos[i].stock;
  }

  return valorTotal;
};

let totalVendido = calcularVentaTotal();
console.log(totalVendido);
