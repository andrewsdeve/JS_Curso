// Acceder valores de un OBJETO

const carro = {
    marca: 'Wolksvaguen',
    modelo: 'Golf',
    annio: 2022,
    cilindraje: 1200,
    kilometraje:25000,
    color:'Negro'
}

// Los objetos tienen algo llamado la sintaxis 

console.log(carro.modelo);
console.log(carro.kilometraje)
console.log(carro.color);
console.log(carro.annio);
console.log(carro.marca);

// tabien se puede acceder de la siguiente forma

console.log(carro['kilometraje']);
console.log(carro['marca']);
console.log(carro['modelo']);
console.log(carro['annio']);
console.log(carro['color']);