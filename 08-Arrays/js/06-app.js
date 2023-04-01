//Forma declarativa

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

let resultado = [...carrito,producto];
resultado = [...resultado,producto2];
resultado = [...resultado,producto3];


console.table(resultado);

