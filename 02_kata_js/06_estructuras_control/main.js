


var container = [];
var userInput;
// while ( !( userInput == "" ) ) {

//     userInput = prompt( "Ingresa cualquier caracter" );

//     container.push(userInput)
// }


//while
// var index = 0
// while (index < 11) { //10 veces
//     console.log( index )
//     //contador
//     index++
//     //index = index + 1    
// }

// // do while
// var number = 0
// do {
//     console.log(number)
//     number++;
   
// } while ( number < 11 );

//for

// var contador = 0
// for (var index = 1; index <= 10; index++) {
//     //condition
//     if ( index % 2 == 0 ) {
        
//        // contador = contador + 1
//         contador++
//        // contador += 1
//         console.log( `${index} es multiplo de 2` );
//         console.log( `${index} es multiplo de 2` );

//     }
    
// }
// console.log( `de 0 a 10 existen ${contador} multiplos de 2` )

//acumulador con for
var acumulador = 0
for (var index = 0; index <= 4; index++) {
    acumulador = acumulador + index;
    console.log(acumulador)  
}

var yearsTwo = [2010, 2011, 2000, 2001, 2003, 1990, 1994, 1992]
console.log( yearsTwo )


//imprimir el contenido de nuestros arrays
// for ( var index = 0; index < yearsTwo.length; index++ ) {
    
//    console.log(yearsTwo[index])   
// }

var oldYears = []
var newYears = []
for ( let index = 0; index < yearsTwo.length; index++ ) {
    
    if ( yearsTwo[index] < 2000 ) {
        oldYears.push( yearsTwo[index] );
        console.log('you are old')
    } else {
        newYears.push(yearsTwo[index])
        console.log('you are not old')
    }
}

//bucles anidados
for ( i = 1; i < 10; i++ ){
    
    document.write( "<br><b>La tabla del " + i + ":</b><br>" )
    
    for ( j = 1; j < 10; j++ ) {
        
       document.write(i + " x " + j + ": ") 
       document.write(i*j) 
       document.write("<br>") 
    } 
}

