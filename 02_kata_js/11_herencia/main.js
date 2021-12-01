
console.log('gato')
const { Gato } = require('./Gato.js');
const { Perro } = require('./Perro.js');
console.log(Gato)
const snoopy = new Perro('beagle', 'blanco y negro', 'Snoopy');
console.log(snoopy);
console.log(snoopy.getNombre())
console.log(snoopy.getRaza())