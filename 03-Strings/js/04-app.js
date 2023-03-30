// Veremos 3 metodos mas para los strings

const producto = '             Monitor HP 20"                    ';
console.log(producto.length);

// Eliminar espacio del inicio de un string

console.log(producto.trimStart())
console.log(producto.trimEnd());
console.log(producto.trimStart().trimEnd()); // eliminar los espacios en un string al principio y al fin
console.log(producto.trim()); // Elimina espacio en juntas direcciones




