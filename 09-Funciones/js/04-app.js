// Direrencia entre funciones y metodos
const numero = 20;
const numero2 = '20';

console.log( parseInt(numero)); // Esto es una funcion

console.log(numero2.toString()); // Esto es un metodo

function sumar (){ // En esta funcion no pasamos ningun parametro
    console.log(2 + 2);
}
sumar();
