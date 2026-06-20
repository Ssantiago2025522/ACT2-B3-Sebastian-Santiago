import promptSync from "prompt-sync";
import { generarResumenVenta } from "./service/Functions";
import type { Product } from "./model/Product";
import { Iva } from "./model/Iva";

const prompt = promptSync();

console.log("=== Sistema de Facturación ===\n");

const cantidadProductos = Number(
  prompt("Ingrese la cantidad de productos: ")
);

const productos: Product[] = [];

for (let indice = 0; indice < cantidadProductos; indice++) {
  console.log(`\nProducto ${indice + 1}`);

  const descripcion = prompt("Descripción: ");
  const precioUnitario = Number(prompt("Precio unitario: Q"));
  const cantidad = Number(prompt("Cantidad: "));

  productos.push({
    descripcion,
    precioUnitario,
    cantidad,
  });
}

console.log("\nTipo de IVA");
console.log("1. Aplicar IVA (12%)");
console.log("2. Exento");

const seleccion = prompt("Seleccione una opción: ");

const tipoIva =
  seleccion === "1" ? Iva.INCLUIDO : Iva.EXENTO;

const resultado = generarResumenVenta(productos, tipoIva);

console.log("\n===== FACTURA =====");

for (const producto of productos) {
  const subtotalLinea =
    producto.precioUnitario * producto.cantidad;

  console.log(
    `${producto.descripcion} (${producto.cantidad}) -> Q${subtotalLinea.toFixed(2)}`
  );
}

console.log("-------------------");
console.log(`Subtotal: Q${resultado.subtotal.toFixed(2)}`);
console.log(`IVA:      Q${resultado.ivaCalculado.toFixed(2)}`);
console.log(`Total:    Q${resultado.total.toFixed(2)}`);