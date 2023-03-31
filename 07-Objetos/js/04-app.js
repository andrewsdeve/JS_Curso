const carro = {
    marca: 'Wolksvaguen',
    modelo: 'Golf',
    annio: 2022,
    cilindraje: 1200,
    kilometraje:25000,
    color:'Negro',
    capacidad: '5 Pasajeros',
    disponible: true
}

carro.cilindraje = 2.0;
delete carro.disponible;

//Asignar valores a su propia variables forma 1

//const marca = carro.marca;
//console.log(marca);

// Desestructuracion de Objetos o Destructuring

const {marca,modelo,annio} = carro;
console.log(marca);
console.log(modelo);
console.log(annio);

