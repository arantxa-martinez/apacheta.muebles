

const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21;
let precioProducto = 250 
let precioDescuento = 25
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento);
console.log(nuevoPrecio);


