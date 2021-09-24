// Funciones 
// es un conjuto de instrucciones para realizar una tarea

// nombre de mi funcion
// () es si necesita parametros -> ingredientes
// {} Dentro de los corchetes van los pasos a seguir

// Hosting, o elevación es el comportamiento por defecto de JavaScript de “mover declaraciones al principio” del código. 
// https://www.itdo.com/blog/javascript-conceptos-fundamentales-hoisting/
console.log('hoisting', saludar());

function holaAtodos() {
  return 'Hola a todos';
};

console.log(holaAtodos());

// function suma(n1, n2) {
//   console.log('primer paramatro:', n1);
//   console.log('segundo paramatro:', n2);
//   var total = n1 + n2;
//   console.log('total', total);
// };

// suma( 1, 2 );

function suma(n1, n2) {
  console.log('primer paramatro:', n1);
  console.log('segundo paramatro:', n2);
  var total = n1 + n2;
  return total;
};

var resultadoUno = suma(1, 2);
var resultadoDos = suma(1, 6);
var resultadoTres = suma(6, 1);

console.log(resultadoUno + resultadoDos + resultadoTres);

// Anidando Funciones
function obtenerMarcador() {
  var partido1 = 3;
  var partido2 = 2;
  console.log(partido1);
  var totalDeGoles = partido1 + partido2

  function agregar() {
    var nombre = 'Pedrito';
    return nombre + ' anoto: ' + (totalDeGoles) + ' goles';
  };

  return agregar();
}

var pedro = obtenerMarcador();

// Funcion Impura

function sumaRandom(n1) {
  return n1 + (Math.random() * 10)
}

var resultadoImpuroUno = sumaRandom(2);
var resultadoImpuroDos = sumaRandom(2);
var resultadoImpuroTres = sumaRandom(2);

console.log(resultadoImpuroUno + resultadoImpuroDos + resultadoImpuroTres )


// Scope 
// Alcance de funciones/variables

var partido1 = 3
var partido2 = 2
console.log('goles en partido 2, declarado', partido2);

function scopeGlobal(n1, n2) {
  var partido1 = 3;
  partido2 = 5;
  console.log('goles en partido 2, deentro de la funcion', partido2);
  var totalDeGoles = partido1 + partido2

  function scopeLocal() {
    var nombre = 'Pedrito';
    return nombre + ' anoto: ' + (totalDeGoles) + ' goles';
  };

  return scopeLocal();
}
console.log('goles en partido 2, previo a funcion', partido2);


// console.log(scopeGlobal());

console.log('goles en partido 2, post funcion', partido2);

// Como declaramos funciones 

// Funcion por delcaracion 
// function nombre(p1, p2...) { }

function saludar() {
  return "Hola";
}

console.log(saludar());

console.log(typeof saludar);

// Funciones como expresion 
// var nombre = function(p1, p2...) { }

var saludo = function () {
  return "Hola";
};

console.log('funcion como expresion',saludo);
console.log('funcion como expresion',saludo());

// Funciones como objeto
// new Function(p1, p2..., code);

var hello = new Function("return 'hello';")

console.log('funcion como objeto',hello);
console.log('funcion como objeto',hello());