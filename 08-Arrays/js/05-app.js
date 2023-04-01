//Carrito de compras

const carrito = [];

// definir un producto

const producto = {
    nombre: 'Monitor 27" ',
    precio: 200
}

const producto2 = {
    nombre: 'tableta',
    precio:150
}

const producto3 = {
    nombre: 'Teclado',
    precio:50
}

carrito.unshift(producto3);
carrito.push(producto);
carrito.push(producto);
console.table(carrito);

carrito.unshift(producto3);