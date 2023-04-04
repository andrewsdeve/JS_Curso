// Parametros y argumentos de las funciones

function suma(){
    console.log (2 + 2);
}
suma();


//la anterior funcion es muy estatica, ahora vamos a ver una mas dinamica

function sumar (a , b){
    console.log( a + b);
}

sumar(3,10);

// Otro ejemplo

function saludar (nombre,apellido){
    console.log(`Hola ${nombre} ${apellido}`)
}
saludar("Carlos", "Martinez");


