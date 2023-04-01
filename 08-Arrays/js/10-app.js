// DIFERENCIA ENTRE FOREACH Y MAP

const carrito = [
    {nombre:`Monitor 27" `, precio: 200 },
    {nombre:`Tableta `, precio: 120 },
    {nombre:`Celular `, precio: 250 },
    {nombre:` Computador `, precio: 1200 },
    {nombre:`Ipad `, precio: 2200 },
    {nombre:`Teclado `, precio: 20 },
    {nombre:`Mouse `, precio: 30 },
]



const nuevoAarreglo = carrito.map(function(producto){
    return `${producto.nombre} - precio: ${producto.precio}`;
})

const nuevoAarreglo2 = carrito.forEach(function(producto){
    return `${producto.nombre} - precio: ${producto.precio}`;
})

console.log(nuevoAarreglo);
console.log(nuevoAarreglo2);