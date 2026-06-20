import type { Product } from "../model/Product";
import type { Results } from "../model/Results";
import { Iva } from "../model/Iva";

export function obtenerSubtotal(
  productos: Product[]
): number {
  return productos.reduce(
    (acumulado, producto) =>
      acumulado +
      producto.precioUnitario * producto.cantidad,
    0
  );
}

export function calcularIva(
  subtotal: number,
  tipoIva: Iva
): number {
  return subtotal * (tipoIva / 100);
}

export function generarResumenVenta(
  productos: Product[],
  tipoIva: Iva
): Results {
  const subtotal = obtenerSubtotal(productos);
  const ivaCalculado = calcularIva(subtotal, tipoIva);
  const total = subtotal + ivaCalculado;

  return {
    subtotal,
    ivaCalculado,
    total,
  };
}