Descripción del proyecto

Este proyecto consiste en una aplicación de consola desarrollada en TypeScript para registrar productos vendidos y generar un resumen de la compra. El usuario ingresa la información de cada producto, selecciona si la venta está gravada con IVA y el sistema calcula automáticamente el subtotal, el impuesto correspondiente y el monto total a pagar.

Estructura de las funciones

Las funciones encargadas de los cálculos se encuentran en `src/service/Functions.ts`.

obtenerSubtotal(productos: Product[]): number

Recorre la lista de productos registrados y calcula el valor acumulado multiplicando el precio unitario por la cantidad de cada producto.

calcularIva(subtotal: number, tipoIva: Iva): number

Recibe el subtotal de la venta y determina el valor del impuesto aplicando el porcentaje definido en el enum `Iva`.

generarResumenVenta(productos: Product[], tipoIva: Iva): Results

Centraliza el proceso de cálculo. Obtiene el subtotal, calcula el IVA y construye el resultado final con todos los valores necesarios para mostrar el resumen de la venta.

Conclusiones

La separación de responsabilidades entre el archivo principal y las funciones de cálculo permite mantener un código más ordenado y fácil de entender.
El uso de interfaces y tipos en TypeScript mejora la seguridad del programa al validar la estructura de los datos utilizados.
Implementar un enum para los porcentajes de IVA facilita la lectura y evita el uso de valores numéricos sin contexto.
Las pruebas realizadas con diferentes cantidades y precios demostraron que los cálculos de subtotal, impuesto y total se generan correctamente.
