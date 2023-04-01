const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

//Destructuring Objetos
const {nombre} = producto;
console.log(nombre)


// Destructuring con Arrays

const numeros = [10,20,30,40,50];

const [primero, ...tercero] = numeros

console.log(primero);

