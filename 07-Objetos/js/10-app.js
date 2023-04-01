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

const almacen = {
    frutas:'Manzanas',
    verduras:'Lechuga',
    carne: 'Cerdo'
}

console.log(carro);
console.log(almacen);

// Spread Operator o Rest Operator

const resultado = {...carro, ...almacen};
console.log(resultado);