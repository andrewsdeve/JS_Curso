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
Object.seal(carro); // Metodo para sellar un objeto, pero si peermite modificar las llaves de un objeto pero no permite eliminar ni adicionar
console.log(Object.isSealed(carro)); // Saber si un objeto esta sellado