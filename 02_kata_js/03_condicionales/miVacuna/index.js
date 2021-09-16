var nombre = prompt("Cual es tu nombre?");
var edad = Number(prompt('Cual es tu edad'));
var eresFronterizo = prompt('Vives en frontera').toLowerCase();
var estasEmberazado = prompt('Estas embarazdo').toLowerCase();

if ( edad >= 18 && eresFronterizo === 'si') {
  console.log('puedes pasar a vacunarte', nombre);
} else if ( edad >= 18 && estasEmberazado === 'si') {
  console.log('puedes pasar a vacunarte', nombre);
} else if (edad >= 18){ 
  console.log('puedes pasar a vacunarte', nombre);
} else {
  console.log('No puedes pasar a vacunarte', nombre);
}