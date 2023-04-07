// como se comunican las funciones
iniciarApp();

function iniciarApp(){
    console.log('Iniciando APP......')
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda Funcion')
    usuarioAutenticado('Juan')
}

function usuarioAutenticado(usuario){
    console.log('Autenticando... Usuario... espere');
    console.log(`Usuario Autenticado con exito ${usuario}`);

}