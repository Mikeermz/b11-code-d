// Condicionales - evaluar una decision que puede dar como resultado algo verdaro o falso

// Opereadores aritmeticos

// ==
// Para comprar valores
// 🚫 No se usa
console.log('1 es  igual a 1', 1 == 1);
console.log('1 es  igual a" 1"', 1 == "1");

// ===
// Compara valores y tipos de datos
console.log('1 es  igual a "1"', 1 === "1");

// !=
// Diferente de (valores)
console.log('1 es  igual a "1"', 1 != "1");

// !==
// Diferente de (valores y tipo de dato)
console.log('1 es  igual a "1"', 1 !== "1");

// <
// Menor que 
console.log('1 es  menor a 2', 1 < 2);
console.log('1 es  menor a 0', 1 < 0);
console.log('1 es  menor a 1', 1 < 1);

// <=
// Menor o igual que 
console.log('1 es  menor o igual a 1', 1 <= 1);

// >
// Mayor que 
console.log('1 es  mayor a 2', 1 > 2);
console.log('1 es  mayor a 0', 1 > 0);
console.log('1 es  mayor a 1', 1 > 1);

// >=
// Mayor o igual que 
console.log('1 es  mayor o igual a 1', 1 >= 1);

// =
// Declarar/Asignar un valor
var  miVariable = 1;

// Operadores logicos

// &&
// Operador And (&&) es para evaluar que todas sus condiciones sean verdaeras

console.log('10 > 9 && 10 > 1', 10 > 9 && 10 > 1 );
console.log('10 > 9 && 10 > 1 && 10 > 8 && 1 > 8 ', 10 > 9 && 10 > 1 && 10 > 8 && 1 > 8 );

// ||
// Operador Or (||) es para evaluar que una de sus condiciones sean verdades

console.log('10 > 9 || 10 > 1', 10 > 9 || 10 > 1 );
console.log('10 > 9 || 10 > 1 || 10 > 8 || 1 > 8 ', 10 > 9 || 10 > 1 || 10 > 8 || 1 > 8 );
console.log('10 > 9 || 10 > 1', 10 < 9 || 10 < 1 );

// !
// Operador Not (!) es para contradecir
var verdadero = true;
console.log('variable:', verdadero);
console.log('contradiciendo la variable', !verdadero);

// Declaracion de If
// Ejecutar el codigo si se cumple una condicion 
// if (condition) {
//   Sentencia de Codigo
// };

if (1 === 1) {
  console.log('es el mismo valor')
}

var firstName = 'Mikee';
var secondName = 'Mikee';

console.log(firstName === secondName);

if (firstName === secondName) {
  console.log('firstName', firstName);
  console.log('secondName', secondName);
  console.log('Las variables son iguales');
};

if (1 === 1)
  console.log('los valores son iguales 1');

if (2 === 2) console.log('los valores son iguales 2');

if (1 === 2 || 2 === 2) {
  console.log('uno de los valores son iguales 3');
};

// If Else
// Ejecutar el codigo si se cumple una condicion o ejecutar otro en caso de que la condicion no se cumpla
// if (condition) {
//   ..
// } else {
//   ..
// }

if (2 === 2) {
  console.log('el valor 1 es igual al segundo valor');
} else { 
  console.log('el valor es diferente');
};

// Ejemplo
// if (2 === 4) 
//   console.log('el valor 1 es igual al segundo valor');
// else 
//   console.log('el valor es diferente')

// if (2 === 3) console.log('el valor 1 es igual al segundo valor');
// else console.log('el valor es diferente')

// IF ElSE IF 
// 
// if (condition) {
//   .. 
// } else if {
//   ..
// }

if (1 === 2) {
  console.log('el valor 1 es igual al segundo valor');
} else if (2 !== 2){ 
  console.log('el valor es diferente de 2 ');
} else if (1 !== 3) {
  console.log('el valor es diferente de 3 ');
};

// IF ElSE IF ELSE
// 
// if (condition) {
//   .. 
// } else if {
//   ..
// } else {
//   ..
// }

if (1 === 2) {
  console.log('el valor 1 es igual al segundo valor');
} else if (2 !== 2){ 
  console.log('el valor es diferente de 2 ');
} else if (3 !== 3) {
  console.log('el valor es diferente de 3 ');
} else {
  console.log('No se cual es el valor 👀')
}