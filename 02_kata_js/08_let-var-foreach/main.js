'use strict'

// var input = prompt( 'ingresa la cadena' )

// /**
//  * @param  {string} input
//  * This function evaluates whether a string is a vowel or a consonant
//  */

// const checkValue = (input) => {
//     if (!input || input.length <= 0) return false;

//     // Convertir a minúscula porque las vocales con las que la compararemos están
//     // en minúscula
//     let changeValue = input.toLowerCase();
 

//     // Vamos a buscar si el carácter está en este arreglo
//     const vocals = ["a", "e", "i", "o", "u"];
//      console.log(vocals.indexOf(changeValue))

//     // indexOf devuelve -1 si no encuentra el carácter en el arreglo
//     if (vocals.indexOf(changeValue) === -1) {
//         return console.log("no es vocal");
        
//     } else {
//         return console.log("es vocal");
//     }
// }

// //execute
// checkValue( input )
// console.log('🤦‍♂️')

var edad = [25, 10, 2, 4]
const multiplo = 90;
var resultado = 0
for (let index = 0; index < edad.length; index++) {
    resultado = edad[1] * multiplo;
    
}
console.log(resultado)

// if (edad >= 18) {
//     var mensaje = "Es adulto"
// }


// if ( mensaje == 'Es adulto' ) {
//     console.log('Si realmente es adulto')
// }
// console.log( mensaje )


// if ( edad < 18 ) {
//     let mensajeLet = 'Es menor de edad'
//     console.log(mensajeLet)
// }
// 
//  console.log(mensajeLet)

//FOR EACH

var fruits = ["banana", 'peach', 'apple', 'stawberry']
var numeros = [1,2,3,4,5]
var suma = 0

// fruits.forEach( item => {
//     console.log(item)
// } );


//foreach
numeros.forEach( function ( test, indice ) {
    if ( test == 2 ) {
        return console.log("es igual")
    }
      return console.log("no es igual")

} );


