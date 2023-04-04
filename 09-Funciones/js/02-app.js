// diferencia entre funcion declarativa y funcion de expression

// Declacracion de Funcion

sumar();
function sumar (){
    console.log(2 + 2);
}
// esta funcion si va a ejecutarse sin importar que se este declarando inicialmente esto se llama hoisting


// expresion de funcion - Fuction Xpression


sumar2();
const sumar2 = function (){
    console.log( 3 + 7);
} // esta ultima funcion no va a ser ejecutada ya que primero se esta declarando y despues se esta creando la funcion

