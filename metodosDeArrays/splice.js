const opcoe = ["Eu", "tu", "nos", "bota", "nelas"];
opcoe.splice(2, 0, "um", "dois");
//Acrescentar e exclusivo (2, indice que aera acarscentado)
//0 não sera excluido nada
//um, dois sera asdicionado
console.log(opcoe);
/*[
    'Eu',    'tu',
    'um',    'dois',
    'nos',   'bota',
    'nelas'
  ]*/

opcoe.splice(2, 3, "um", "dois");
console.log(opcoe);
//[ 'Eu', 'tu', 'um', 'dois', 'bota', 'nelas' ]