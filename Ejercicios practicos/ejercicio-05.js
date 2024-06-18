// * Solicitar al usuario uno o más precios. Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.

let precio1 = Number(prompt("Ingrese el primer precio"));
let precio2 = Number(prompt("Ingrese el segundo precio"));
let precio3 = Number(prompt("Ingrese el tercer precio"));
let descuento = Number(prompt("Ingrese el descuento:"));

total1 = (precio1 * descuento) / 100;
total2 = (precio2 * descuento) / 100;
total3 = (precio3 * descuento) / 100;
100;

precioTotal1 = precio1 - total1;
precioTotal2 = precio2 - total2;
precioTotal3 = precio3 - total3;

alert(
  "Precio 1: " +
    precioTotal1 +
    "\n" +
    "Precio 2: " +
    precioTotal2 +
    "\n" +
    "Precio 3: " +
    precioTotal3
);
