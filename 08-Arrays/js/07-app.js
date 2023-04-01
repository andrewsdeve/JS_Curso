//METHOD SPLICE

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

const producto4 = {
    nombre: 'Mouse',
    precio:20
}

const producto5 = {
    nombre: 'Celular',
    precio: 250
}

carrito2 = [...carrito,producto];
carrito2 = [...carrito2,producto2];
carrito2 = [producto3,...carrito2];
carrito2 =[...carrito2,producto4];
carrito2 =[...carrito2,producto5];

// ELMINAR ULTIMO ELEMENTO DE UN ARREGLO

// carrito2.pop();




// eliminar inicia arreglo
// carrito2.shift();
// console.table(carrito2);

// Splaiuce

carrito2.splice(1,2);

console.table(carrito2);
