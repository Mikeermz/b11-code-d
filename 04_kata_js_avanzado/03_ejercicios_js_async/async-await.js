// const getNombre = async () => {
//   return 'Mikee';
// };

// const saludo = async () => {
//   const nombre = await getNombre();

//   return `Hola ${nombre}`;
// }

// saludo().then((mensaje) => console.log(mensaje));

const { empleados, salarios } = require('./data')

const getUserById = async (id) => {
  
  const userDB = empleados.find((empleado) => empleado.id === id );
  
  if (!userDB) {
    throw new Error(`No existe usuario con el id ${id}`);
  }

  return userDB
};

const getSalarioById = async (empleado) => { 
  const {id, name} = empleado;

  const salarioDB = salarios.find((salario) => salario.id === id);

  if (!salarioDB) {
    throw new Error(`No existe informacion del salario del usuario con id ${id}`);
  }

  const empleadoConSalario = { 
    ...salarioDB,
    name
  }

  return (empleadoConSalario);
};

const informationEmployee = async (id) => {
  try {
    const empleado = await getUserById(id);
    const salario = await getSalarioById(empleado);
  
    return salario;
  } catch (error) {
    return error;
  }
}

informationEmployee(2)
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));