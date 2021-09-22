// Forma basica de creacion de objetos
var miObjeto = {
  string: 'string'
};

miObjeto.number = 1;
miObjeto.string = 'otroString';

// Forma Compleja 
var otroObjeto = new Object();

// Concatenar dos objetos en uno nuevo
var course = {
  name: 'JavaScript'  
};
var grade = {
  score: 92  
};
var finalResult = Object.assign(course,grade);
console.log(finalResult);

// Eliminar una propiedad de un objeto
var myObject = {
  "id":"12345",
  "subject":"programming",
  "grade":"A"
};

console.log("Original object:", myObject);
//delete the grade property 
delete myObject['subject'];
// delete myObject.grade;
// delete myObject.subject;
console.log("Updated object: ", myObject)

var id = 'ids'

// Iterar sobre un objeto (moverse dentro de los objetos)
console.log('grado: ', myObject.grade); // Forma comun
console.log('id: ', myObject[id]); // Sirve para imprimir dentro de loops y saber las propiedades que tienen dentro.

// Swapi request:
var luke = {
	"name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
	"homeworld": "https://swapi.dev/api/planets/1/",
	"films": [
		"https://swapi.dev/api/films/1/",
		"https://swapi.dev/api/films/2/",
		"https://swapi.dev/api/films/3/",
		"https://swapi.dev/api/films/6/"
	],
	"species": [],
	"vehicles": [
		"https://swapi.dev/api/vehicles/14/",
		"https://swapi.dev/api/vehicles/30/"
	],
	"starships": [
		"https://swapi.dev/api/starships/12/",
		"https://swapi.dev/api/starships/22/"
	],
	"created": "2014-12-09T13:50:51.644000Z",
	"edited": "2014-12-20T21:17:56.891000Z",
	"url": "https://swapi.dev/api/people/1/"
};

// Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

// El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

// De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.
