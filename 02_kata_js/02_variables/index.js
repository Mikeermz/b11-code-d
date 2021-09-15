// Variable = Forma de guardar/almacenar datos, para poder reutilarlos
// Ejemplo:
var nombreDeMiVariable = 5; // camelCase
var NombreDeMiVariable = 1; // UpperCamelCase o PascalCase
var nombre_de_mi_variable = 2; // lower_snake_case o snake_case
var NOMBRE_DE_MI_VARIABLE = 3; // SCREA_SNAKE_CASEE o upper_snake
// var nombre-de-mi-variable = 5; // kebab-case
var NOMBREDEMIVARIABLE = 4;

console.log(nombreDeMiVariable + 5);
console.log(NombreDeMiVariable + 5);
console.log(nombre_de_mi_variable + 5);
console.log(NOMBRE_DE_MI_VARIABLE + 5);
console.log(NOMBREDEMIVARIABLE + 5)

// Tipos de Datos
// String = cadena de texto, representa datos textuales.
var nombre = 'Mikee';
var otroNombre = "Dash";

console.log('nombre', nombre);
console.log('nombre', otroNombre);

// Number = dato numerico, comprende los datos flotantes, decimales - enteros

var numero = 1;
var otroNumero = 2;
var tercerNumero = 3 * "hola";
var cuartoNumero = 1 + 'hola';

console.log('Numero', numero);
console.log('Numero', otroNumero);
console.log('Number', tercerNumero); // NaN
console.log('Number', cuartoNumero); // Cuando un numero se suma a un string, este se concatena.

// Diferentes maneras de concatenar strings
var fullName = 'Mikee Rmz';
var age = 31;

console.log('Hola mi nombre es' + fullName + 'y tengo' + age + 'años');
console.log('Hola mi nombre es', fullName, 'y tengo', age, 'años');
console.log(`Hola mi nombre es ${fullName} y tengo ${age} años `);

// Booleans valores que pueden ser falsos o verdaderos

var verdadero = true;
var falso = false;

console.log('valor:', verdadero);
console.log('valor:', falso);

// Null su valor es nulo

var nulo = null;

console.log('valaor:', nulo);

// Undefined tiene un valor indefinido

var indefinido;

console.log('valor', indefinido);

// Symbol 

// Object es un valor con multiples datos y valores
var miObjeto = {
  cosa: 1,
  cosa2: 2
};

console.log('valor del objeto:', miObjeto);

var miArreglo = [1,2,3, [1,2], {cosa :{cosas: 'Muhcas'}}];

console.log('valor del arreglo:', miArreglo);

/////////////////////////////////////////////////////////////////////////////////

// typeof, Como saber que tipo de dato es la variable

console.log('tipo de dato de la variable', nombre, typeof nombre);
console.log('tipo de dato de la variable', numero, typeof numero);
console.log('tipo de dato de la variable', tercerNumero, typeof tercerNumero);
console.log('tipo de dato de la variable', cuartoNumero, typeof cuartoNumero);
console.log('tipo de dato de la variable', verdadero, typeof verdadero);
console.log('tipo de dato de la variable', nulo, typeof nulo);
console.log('tipo de dato de la variable', indefinido, typeof indefinido);
console.log('tipo de dato de la variable', miObjeto, typeof miObjeto);
console.log('tipo de dato de la variable', miArreglo, typeof miArreglo);

// Console log se muestra un mensaje en consola. 

// var saludo = 'Hola';
// var sensei = 'Mikee';

// console.log(saludo + ' ' + sensei);
// console.log(saludo, sensei);

// Entrada o inputs atravez de Prompts

// var saludo = 'Hola';
// var sensei = prompt('Cual es tu nombre?');

// var fullSaludo = saludo.toUpperCase() + ' ' + sensei.toUpperCase();

// alert(fullSaludo);

// alert('Suma los siguientes numeros');
// var numero1 = prompt('dime el primer numero');
// var numero2 = prompt('dime el segundo numero');

// alert(numero1 + numero2);


// Operadores Matematicos

// Suma + 
console.log(6 + 6);

var num1 = 6 ;
var num2 = 6;

var total = num1 + num2;
console.log('el total de la suma es:', total);

// Resta -
console.log(6 - 3);

var num1 = 6;
var num2 = 3;

var total = num1 - num2;
console.log('el total de la resta es:', total);

// Multiplicacion * 
console.log(6 * 3);

var num1 = 6;
var num2 = 3;

var total = num1 * num2;
console.log('el total de la multiplicacion es:', total);

// Division /
console.log(6 / 3);

var num1 = 6;
var num2 = 3;

var total = num1 / num2;
console.log('el total de la division es:', total);

// Residuo %
console.log(10 % 3);

var num1 = 10;
var num2 = 3;

var total = num1 % num2;
console.log('el total de la residuo es:', total);

// Exponensial **
console.log(2 ** 4);

var num1 = 2;
var num2 = 4;

var total = num1 ** num2;
console.log('el total del exponcial es:', total);

// -> Preguntar al usuario su nombre direccion y telefono
//    mostrar cada resultado en la consola
// -> Pregutar al usuario su edad cumplira este año y mostrar en la consola:
//    que año nacio