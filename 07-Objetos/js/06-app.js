// Aplicar Desestructuración de objetos anidados

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

const{marca,informacion,informacion:{medidas,medidas:{medida}}} = carro;
console.log(medidas);
console.log(medida);





