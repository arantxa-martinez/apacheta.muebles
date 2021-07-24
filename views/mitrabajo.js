const mesa = {modelo: 'amazonita', madera: 'petiribi'}

console.log('Modelo', mesa.modelo);
console.log('Madera', mesa.madera);

function Mesa(modelo, madera){
    this.modelo= model;
    this.madera= madera;
}


/*function remera(modelo, colores, talle){
    this.modelo = modelo;
    this.colores = colores;
    this.talle = talle;
    this.obtenerTalles = function(){
        console.log('Los talles disponibles son: ', this.talles)}
    
}*/

class Remera{
    constructor(modelo, colores, talle){
    this.modelo = modelo;
    this.colores = colores;
    this.talle = talle;
}

 obtenerTalles(){
    console.log('Los talles disponibles son: ', this.talles)}
}

 const remera1 = new Remera('Prisha', 'blanca', 1)
 const remera2 = new Remera('Augen', 'Roja', 3)

 console.log('Modelo:', remera1.modelo);
 console.log('colores:', remera1.colores);
 console.log('talle:', remera1.talle);

 console.log('Modelo:', remera2.modelo);
 console.log('colores:', remera2.colores);
 console.log('talle:', remera2.talle);
 remera2.obtenerTalles();

 /*const listaDeProductos = ['Mesas', 'Espejos','Remeras']
 let cantidad = 3;

 do{
     let entrada = prompt("Ingresa el Producto");
     listaDeProductos.push(entrada.toUpperCase());
     console.log(listaDeProductos.length);
 } while(listaDeProductos.lenght != cantidad);

 const nuevaLista = listaDeProductos.concat(["Mesa Ratona", "Respaldar"]);

 alerta(nuevaLista.join("\n"));

 console.log('Producto Seleccionado:', productos[0])
 console.log('Producto Seleccionado:', productos[1])

 console.log(productos.toString());

 

 console.log(productos);
 console.log(dias.join('-'));*/

const producto1 = {
     nombre: 'Cristalina', 
     descripcion: 'Mesa de comedor', 
     precio: {
         moneda: 'dolar',
         valor: '180'

     },
     categoria: ['Mueble', 'Decoracion']
    }

const producto2 = {
        nombre: 'Amalita', 
        descripcion: 'Mesa de comedor', 
        precio: {
            moneda: 'dolar',
            valor: '98'
   
        },
        categoria: ['Mueble', 'Decoracion']
       }

const producto3 = {
        nombre: 'Corbita', 
        descripcion: 'Mesa de comedor', 
        precio: {
            moneda: 'dolar',
            valor: '150'
   
        },
        categoria: ['Mueble', 'Decoracion']
       }


const productos = [producto1, producto2, producto3];

console.log('Nombre del Producto: ', productos[2].nombre);

for (const producto of productos){
    console.log('Nombre: ', producto.nombre, 'Precio: ', producto.precio);
}

productos.forEach(producto =>{
    console.log('Nombre:', producto.nombre, 'Precio: ', producto.precio);
}
    )
  















/*const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21;
let precioProducto = 250 
let precioDescuento = 25
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento);
console.log(nuevoPrecio);



//objeto literal

let persona2={
    nombre: 'Aru',
    edad: 31,
    ocupacion: 'abogada',
    saludo: function(){
        return ('Hola, Soy,  ${this.nombre}  {this.edad}  {this.ocupacion}')
    }
}

console.log(persona2)



// INSTANCIADO

let persona1=new Persona ('Arantxa', 31, 'Abogada')
let persona3=new Persona('Maria', 27, 'Contadora')

console.table(persona1)
console.table(persona3)



class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const producto1 = new Producto("Remera", "3.500");
const producto2 = new Producto("Mesa", "20.000");
producto1.sumaIva();
producto2.sumaIva();
producto1.vender(); */







