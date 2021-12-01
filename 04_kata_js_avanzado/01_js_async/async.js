// // Callback
// // una funcion que recibe como parametro otra funcion. 

// function saludar(nombre) {
//   return `hola, yo soy ${nombre}`; 
// }

// function despedida(nombre) {
//   return `adios, yo fui ${nombre}`; 
  
// }

// function crearNombre(callback) {
//   console.log('Callback', callback);
//   const nombre = 'Mikee';
  
//   const text = callback(nombre);
//   console.log(text)
// };

// crearNombre(saludar);
// crearNombre(despedida);

// // crearNombre('nombre');

// function soyCien() {
//   return 100;
// }

// function soyDoscientos() {
//   return 200;
// }

// function sumaDosFunciones(funcionUna, funcionDos) {
//   const suma = funcionUna() + funcionDos();
//   return suma;
// }

// const sumaDeFunciones = sumaDosFunciones(soyCien, soyDoscientos);

// console.log('la suma de las funciones es:', sumaDeFunciones);

// const miliSegundos = 3000

// setTimeout(() => {
//   console.log(`hola ya pasaron ${miliSegundos} milisegundos`)
// }, miliSegundos);

// console.log('--- Todo en Pila de Ejecucion ---')
// console.log(1)
// console.log(2)
// console.log(3)

// console.log('--- Algunso en la espera de ejecucion ---')
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 2000);
// setTimeout(() => {
//   console.log(3);
// }, 1000);
// console.log(4);

console.log('--- simulacion del cuello de botella ---');
console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000);
for (let index = 0; index < 99; index++){
  console.log('index', index)
};
console.log(3);
setTimeout(() => {
  console.log(4);
}, 1000);
setTimeout(() => {
  console.log(5);
}, 0);