let cantidad: number = Number(
  prompt("Ingrese cantidad de productos que desea llevar")
);

let nombreProducto: string[] = new Array(cantidad);
let precioProducto: number[] = new Array(cantidad);
let cantidadProductos: number[] = new Array(cantidad);
let total: number = 0;

function cargarProductos(
  productos: string[],
  precio: number[],
  cantidad: number
) {
  let msj: string = "";
  let i: number = 0;
  let unit: number = 0;
  let unidades: number = 0;

  for (i = 0; i < cant; i++) {
    productos[i] = prompt("Ingrese el nombre del producto");
    precio[i] = Number(prompt("Ingrese el valor del producto"));
    unidades = Number(prompt("Ingrese cuántas unidades del producto lleva"));
    cantidadProductos[i] = unidades;
    unit += unidades;
    total += precio[i] * unidades;
  }

  msj = "Detalle de Compra: ";
  msj += " Usted compro " + unit + " productos...   ";
  for (i = 0; i < cant; i++) {
    msj +=
      ". Precio de " +
      cantidadProductos[i] +
      " " +
      productos[i] +
      " es $ " +
      precio[i] * cantidadProductos[i];
  }
  msj += ". El total de su compra es de $ " + total;
  console.log(msj);
}

cargarProductos(nombreProducto, precioProducto, cantidad);

if (total < 1000) {
  console.log("Su compra es de $" + total + ", no participa del sorteo");
} else if (total >= 1000 && total < 2000) {
  console.log(
    "Su compra es de $" + total + " y participa del sorteo por un TV LED"
  );
} else if (total >= 2000 && total < 3000) {
  console.log(
    "Su compra es de $" + total + " y participa del sorteo por una moto 0 Km"
  );
} else
  console.log(
    "Su compra es de $" + total + " y participa del sorteo por un Auto 0 Km"
  );
