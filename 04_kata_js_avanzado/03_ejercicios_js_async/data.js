// Dataset que simula a una base de datos.
//  Arreglo de objetos con todos los empleados creados.
const empleados = [
  {
    id: 1,
    name: 'Mikee'
  },
  {
    id: 2,
    name: 'Alvaro'
  },
  {
    id: 3,
    name: 'Valeria'
  },
  {
    id: 4,
    name: 'Daniel'
  }
];

// Arreglo de objetos con los salarios de algunos empleados.
const salarios = [
  {
    id: 1,
    salario: 1500,
  },
  {
    id:2,
    salario:3000,
  }
]

// Palabra reservada para exportar variables, funciones
module.exports = { empleados, salarios };
