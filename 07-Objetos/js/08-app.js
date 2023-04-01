"use strict";


const carro = {
    marca: 'Wolksvaguen',
    modelo: 'Golf',
    annio: 2022,
    cilindraje: 1200,
    kilometraje:25000,
    color:'Negro',
    capacidad: '5 Pasajeros',
    disponible: true,
    informacion:{
        medidas:{
            peso: '1KG',
            medida: '1m'
        },
        fabricacion:{
            pais:'Colombia',
            fabricante: 'GMC'
        }
    }
}


// Metodos para los OBJETOS
// prevenir que un objeto sea modificado 

Object.freeze(carro);
console.log(Object.isFrozen(carro)); // Este metodo se utiliza para saber si el objeto esta congelado

carro.disponible = false;


