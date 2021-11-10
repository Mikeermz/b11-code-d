// const getUserById = (id, callback) => {
//   const user = {
//     nombre: 'Mikee Ramirez',
//     id
//   }
//   console.log(callback)
//   callback(user);
// };

// getUserById(1, function saludo(usuario){
//   console.log(`Hola soy el ${usuario.nombre} y tengo el id ${usuario.id}`)
// });

const { empleados, salarios } = require('./data')

const getUserById = (id, callback) => {
  const userDB = empleados.find((empleado) => empleado.id === id );

  if (!userDB) {
    return callback(`No existe usuario con el id ${id}`);
  } 

  return callback(null, userDB);
};

const getSalarioById = (empleado, callback) => {
  const {id, name} = empleado;

  const salarioDB = salarios.find((salario) => salario.id === id);

  if (!salarioDB) {
    return callback(`No existe informacion del salario del usuario con id ${id}`);
  }

  const empleadoConSalario = { 
    ...salarioDB,
    name
  }

  return callback(null, empleadoConSalario);
};

getUserById(1, (error, empleado) => {
  // console.log(error);
  if (error) {
    return console.log('error:', error);
  }
  getSalarioById(empleado, (otroError, salario) => {
    if (otroError) {
      return console.log('otro error:', otroError);
    }
    return console.log(salario);
  })
});