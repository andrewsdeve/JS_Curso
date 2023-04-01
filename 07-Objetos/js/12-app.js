// Otra manera de construir objetos con el metodo OBJECT CONSTRUCTOR
//Object Literal


// OBJECT CONSTRUCTOR

function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 24 pulgadas', 500);
console.log(producto2);


const producto3 = new Producto('Monitor',100);
console.log(producto3);