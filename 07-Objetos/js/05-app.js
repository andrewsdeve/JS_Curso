// Agregar un objeto dentro de otro objeto

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
console.log(carro)

console.log(carro.informacion.fabricacion.fabricante);
console.log(carro.informacion.medidas.medida);


