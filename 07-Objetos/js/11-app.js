// THIS en los objetos se refiere a los valores que exiten en el mismo objeto

const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}
producto.mostrarInfo();
