//FOREACH


const carrito = [
    {nombre:`Monitor 27" `, precio: 200 },
    {nombre:`Tableta `, precio: 120 },
    {nombre:`Celular `, precio: 250 },
    {nombre:` Computador `, precio: 1200 },
    {nombre:`Ipad `, precio: 2200 },
    {nombre:`Teclado `, precio: 20 },
    {nombre:`Mouse `, precio: 30 },
]


for(let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - precio:${carrito[i].precio}`);

}

carrito.forEach(function(producto){
    console.log(`${producto.nombre} - precio: ${producto.precio}`);

})
