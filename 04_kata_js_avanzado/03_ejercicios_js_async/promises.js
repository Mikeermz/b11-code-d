const { empleados, salarios } = require('./data')

const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    const userDB = empleados.find((empleado) => empleado.id === id );
  
    if (!userDB) {
      reject(`No existe usuario con el id ${id}`);
    } 
  
    resolve(userDB);
  })
};

const getSalarioById = (empleado) => {
  return new Promise((resolve, reject) => {
    const {id, name} = empleado;

    const salarioDB = salarios.find((salario) => salario.id === id);

    if (!salarioDB) {
      reject(`No existe informacion del salario del usuario con id ${id}`);
    }

    const empleadoConSalario = { 
      ...salarioDB,
      name
    }

    resolve(empleadoConSalario);
  });
};

const aumento = (data) => {
  const { salario } = data;
  return new Promise((resolve) => {
    resolve(salario + 150);
  })
}

getUserById(2)
  .then((empleado) => getSalarioById(empleado))
  .then((salario) => aumento(salario))
  .then((aumentoSalario) => console.log(aumentoSalario))
  .catch((error) => console.log(error));
