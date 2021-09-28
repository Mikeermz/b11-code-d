// 'use strict';
// // var: Declaraciond de variables globales
// // let: Dependee de su scope, puede ser condideraado de manera global, y no se puede volver a declarar.
// // const: es una constante, significaque no puede cambiar su tipo de dato y dependiendo del tipo de dato sus valor.

// // Declaracion con var
// // var saludo;
// // saludo = 'hola';
// // saludo = 'adios';
// // if (saludo) {
// //   var saludo = 'adios x2';
// //   console.log(saludo)
// // }

// // console.log(saludo);

// // Declaracion con let
// // let saludo;
// // saludo = 'hola';
// // saludo = 'adios';

// // if (saludo) {
// //   let saludo = 'adios x2';
// //   console.log(saludo)
// // }

// // console.log(typeof saludo);

// // Declaracion con const

// const saludo = 'hola';
// // saludo = 'hola';
// // saludo = 'adios';

// if (saludo) {
//   const saludo = 'adios x2';
//   console.log(saludo)
// }

// console.log(saludo);

// const numbers = [1,2,3,4,5];
// console.log(numbers);
// numbers.push(6);
// console.log(numbers);

// const persona = {
//   nombre: 'mikee'
// };

// console.log(persona);
// persona.edad = 31;
// console.log(persona);

// // Estructuras de control 

// // Condicionales - evaluar una decision que puede dar como resultado algo verdaro o falso

// // Opereadores aritmeticos

// // ==
// // Para comprar valores
// // 🚫 No se usa
// console.log('1 es  igual a 1', 1 == 1);
// console.log('1 es  igual a "1"', 1 == "1");

// // ===
// // Compara valores y tipos de datos
// console.log('1 es  igual a "1"', 1 === "1");
// console.log('1 es  igual a 1', 1 === 1);

// // !=
// // Diferente de (valores)
// // 🚫 No se usa
// console.log('1 es  igual a "1"', 1 != "1");

// // !==
// // Diferente de (valores y tipo de dato)
// console.log('1 es  igual a "1"', 1 !== "1");

// // <
// // Menor que 
// console.log('2 es  menor a 2', 2 < 2);
// console.log('1 es  menor a 0', 1 < 0);
// console.log('1 es  menor a 1', 1 < 1);

// // <=
// // Menor o igual que 
// console.log('1 es  menor o igual a 1', 1 <= 1);

// // >
// // Mayor que 
// console.log('2 es  mayor a 2', 1 > 2);
// console.log('1 es  mayor a 0', 1 > 0);
// console.log('1 es  mayor a 1', 1 > 1);

// // >=
// // Mayor o igual que 
// console.log('1 es  mayor o igual a 1', 1 >= 1);

// // =
// // Declarar/Asignar un valor
// var  miVariable = 1;

// // Operadores logicos

// // &&
// // Operador And (&&) es para evaluar que todas sus condiciones sean verdaeras

// console.log('10 > 9 && 10 > 1', 10 > 9 && 10 > 1 );
// console.log('10 > 9 && 10 > 1 && 10 > 8 && 1 > 8 ', 10 > 9 && 10 > 1 && 10 > 8 && 1 > 8 );

// // ||
// // Operador Or (||) es para evaluar que una de sus condiciones sean verdades

// console.log('10 > 9 || 10 > 1', 10 > 9 || 10 > 1 );
// console.log('10 > 9 || 10 > 1 || 10 > 8 || 1 > 8 ', 10 > 9 || 10 > 1 || 10 > 8 || 1 > 8 );
// console.log('10 > 9 || 10 > 1', 10 < 9 || 10 < 1 );

// // !
// // Operador Not (!) es para contradecir
// var verdadero = true;
// console.log('variable:', verdadero);
// console.log('contradiciendo la variable', !verdadero);

// // Declaracion de If
// // Ejecutar el codigo si se cumple una condicion 
// // if (condition) {
// //   Sentencia de Codigo
// // };

// if (1 !== 1) {
//   console.log('es el mismo valor')
// }

// var firstName = 'Mikee';
// var secondName = 'Mikee';

// console.log(firstName === secondName);

// if (firstName === secondName) {
//   console.log('firstName', firstName);
//   console.log('secondName', secondName);
//   console.log('Las variables son iguales');
// };

// if (1 === 1)
//   console.log('los valores son iguales 1');

// if (2 === 2) console.log('los valores son iguales 2');

// if (2 === 2 || 2 === 2) {
//   console.log('uno de los valores son iguales 3');
// };

// // If Else
// // Ejecutar el codigo si se cumple una condicion o ejecutar otro en caso de que la condicion no se cumpla
// // if (condition) {
// //   ..
// // } else {
// //   ..
// // }

// if (1 === 2) {
//   console.log('el valor 1 es igual al segundo valor');
// } else { 
//   console.log('el valor es diferente');
// };

// // Ejemplo
// // if (2 === 4) 
// //   console.log('el valor 1 es igual al segundo valor');
// // else 
// //   console.log('el valor es diferente')

// // if (2 === 3) console.log('el valor 1 es igual al segundo valor');
// // else console.log('el valor es diferente')

// // IF ElSE IF 
// // 
// // if (condition) {
// //   .. 
// // } else if {
// //   ..
// // }

// if (1 === 2) {
//   console.log('el valor 1 es igual al segundo valor');
// } else if (1 !== 2){ 
//   console.log('el valor es diferente de 2 ');
// } else if (1 !== 3) {
//   console.log('el valor es diferente de 3 ');
// };

// // IF ElSE IF ELSE
// // 
// // if (condition) {
// //   .. 
// // } else if {
// //   ..
// // } else {
// //   ..
// // }

// if (1 === 2) {
//   console.log('el valor 1 es igual al segundo valor');
// } else if (2 !== 2){ 
//   console.log('el valor es diferente de 2 ');
// } else if (3 !== 3) {
//   console.log('el valor es diferente de 3 ');
// } else {
//   console.log('No se cual es el valor 👀')
// }

// const numero = 9;

// if (numero >= 10) {
//   console.log('si');
// } else {
//   console.log('no');
// }

// const edad = 17;
// const ine = true;

// if (edad >= 18 || ine) {
//   console.log('eres mayor de edad');
// } else {
//   console.log('eres menor de edad o no tienes ine');
// }

// const semaforo = 'verd';

// if (semaforo === 'verde') {
//   console.log('avanze')
// } else if (semaforo === 'amarillo') {
//   console.log('desacelere');
// } else {
//   console.log('detente')
// }

// // Ciclos 

// const array = [1,2,3]

// console.log('Normal loop')
// for (var index = 0; index < array.length; index++) {
//   console.log(index)
//   const element = array[index];
//   console.log(element)
// }

// console.log('of')
// for (const iterator of array) {
//   console.log(iterator)
// }

// console.log('in')
// for (const n in array) {
//   console.log(n)
//   console.log(array[n]);
// }
 
// console.log('for each')
// const forEachArray = array.forEach(element => {
//   let newElemnt = element + 1
//   console.log(newElemnt)
//   return newElemnt;
// });

// console.log('map')
// const mapArray = array.map(element => {
//   let newElemnt = element + 1
//   console.log(newElemnt)
//   return newElemnt;
// })

// console.log('for each Array', forEachArray);
// console.log('map Array', mapArray);

// // 
// var normalFuncion = normal('hola a todos');

// function normal(params) {
//   console.log('estos son los parametros', params)
// }

// var miFuncion =  (params) => {
//   console.log('estos son los parametros', params)
// }

// var funcionVar = miFuncion('hola a todos desde var')

// Template Strings 

// var templateString = "hola a todos \n" +
// "soy un template string";

const n1 = 1
const n2 = 1
const templateString = `la suma de los
valores es = ${ n1 + n1 }`;

console.log(templateString);

let collection = [
  {
    id: 1,
    title: 'La vida es bella'
  }, 
  {
    id: 2,
    title: 'titanic'
  }
];

const myId = 2
console.log(`Titulo de la pelicula: ${
  collection.find((item) => item.id === myId).id
}`)

const mayus = `voy a cambiar todo a mayuscula 
de la variable pasada
${ templateString.toUpperCase()}`;

console.log(mayus)

const book = {
  id: 1,
  title: 'false',
  year: 2016
}

console.log(`Book report:
${ book.title ? book.title : 'No se encuentra el titulo'}
`)

// Operador ternario
// 

const titulo = false
const edad = 26
// let miVariable;
// if (titulo) {
//   miVariable = titulo;
// } else {
//   miVariable = 'No hay titulo';
// }

// console.log(miVariable);
//  condicion ? la respuesta positiva : la respuesta negativa
const miVariable = 
  titulo // la condicion (si existe el titulo)
  ? `el titulo es ${titulo}` // la parte positiva 
  : 'no tiene titulo'; // la parte negativa

console.log(miVariable);

// Destructuracion 
// Descomponer objeros y arreglos en diferentes variables
// Spread operator nos ayuda a transformar los elementos en argumentos(parametros) de manera individal

const myArray = [1,2,3,4,5,6,7,8];

const [a, valor2, c, d, ...rest] = myArray;

console.log(myArray[1]);

console.log(a, valor2, c, d, rest)

let numeros = [4, 16, 25, 2, 45, 8];

const numeroMayor = Math.max(...numeros);

console.log(numeros);
console.log(...numeros);

const perro = {
  nombre: 'snoopy',
  edad: 5,
  adoptado: true, 
  dueno: {
    name: 'Charlie Brown',
    edad: 10,
    serie: 'peanuts'
  }
}

const { 
  nombre, 
  edad: edadDelPerro, 
  dueno: { name }, 
  ...restoDelObjeto } = perro;

console.log(nombre);
console.log(edadDelPerro)
console.log(name)
// console.log(restDueno)
console.log(restoDelObjeto);

const peticion = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31",
      "https://rickandmortyapi.com/api/episode/32",
      "https://rickandmortyapi.com/api/episode/33",
      "https://rickandmortyapi.com/api/episode/34",
      "https://rickandmortyapi.com/api/episode/35",
      "https://rickandmortyapi.com/api/episode/36",
      "https://rickandmortyapi.com/api/episode/37",
      "https://rickandmortyapi.com/api/episode/38",
      "https://rickandmortyapi.com/api/episode/39",
      "https://rickandmortyapi.com/api/episode/40",
      "https://rickandmortyapi.com/api/episode/41"
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
  },
  {
    "id": 2,
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31",
      "https://rickandmortyapi.com/api/episode/32",
      "https://rickandmortyapi.com/api/episode/33",
      "https://rickandmortyapi.com/api/episode/34",
      "https://rickandmortyapi.com/api/episode/35",
      "https://rickandmortyapi.com/api/episode/36",
      "https://rickandmortyapi.com/api/episode/37",
      "https://rickandmortyapi.com/api/episode/38",
      "https://rickandmortyapi.com/api/episode/39",
      "https://rickandmortyapi.com/api/episode/40",
      "https://rickandmortyapi.com/api/episode/41"
    ],
    "url": "https://rickandmortyapi.com/api/character/2",
    "created": "2017-11-04T18:50:21.651Z"
  }
];

peticion.forEach((item) => {
  const {name, species, image} = item;
  console.log('Nombre', name);
  console.log('Especie', species);
  console.log('imagen', image);
});

// Arrow Functions

const sume = function (a,b) {
  return a + b;
}
var s1 = sume (1,2)
console.log(s1)


const suma = (a,b) => a + b;
var s2 = suma(2,3);
console.log(s2);