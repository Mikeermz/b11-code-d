const request = require("request");

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1';

/* CRUD Peticiones

  - CREATE:
    * Crear un nuevo registro dentro de una API.
    * metodo POST
  - READ:
    * Buscar un/varios/todos los registros dentro de una API
    * metodo GET
  - UPDATE
    * Actualizar un registro dentro de una API
    * metodo PATCH/PUT
  - DELETE
    * Borrar  un registro dentro de una API
    * metodo DELETE.
      * Existen dos maneras de un borrar un registro, ya sea fisico o logico.
        * Fisico: 
          - Se elimina de la base de datos permanentemente.
        * Logico:
          - Se agrega una bandera (flag) de tipo boolean, que activa o desactiva el registro.  

*/

// Create
// Crear un autor
// Objeto de creacion:
// {
//   "name": name,
//   "last_name": lastName,
//   "nacionalidad": nacionalidad,
//   "biography": biography,
//   "gender": gender,
//   "age": age,
//   "is_alive": isAlive
// }

const createAuthor = (name, last_name, nacionalidad, biography, gender, age, is_alive) => {
  const URL_POST = `${URL_BASE}/authors/`;
  console.log('ruta', URL_POST);

  const jsonSend = {
    name,
    last_name,
    nacionalidad,
    biography,
    gender,
    age,
    is_alive
  };

  // const jsonSend = {
  //   "name": name,
  //   "last_name": lastName,
  //   "nacionalidad": nacionalidad,
  //   "biography": biography,
  //   "gender": gender,
  //   "age": age,
  //   "is_alive": isAlive
  // }

  return request.post(URL_POST, {form: jsonSend },  (error, response, body) => {
    if (response.statusCode === 201) {
      const newAuthor = JSON.parse(body);
      console.log('newAuthor', newAuthor);

      return newAuthor;
    } else {
      console.log(response.statusCode);
      return error;
    }
  })
};

// createAuthor("José", "Saramago", "USA", "Escritor de muchos libros", "M", 95, false);
// createAuthor()

// Read 
// Traer todos los autores.

const findAllAuthors = () => {
  const GET_URL = `${URL_BASE}/authors/`;
  console.log('ruta', GET_URL);
  
  return request.get(GET_URL, (error, response, body) => {
    if (response.statusCode === 200) {
      const authors = JSON.parse(body);
      console.log(authors[0]);
      
      return authors;
    } else {
      console.log(response.statusCode);
      console.log('error')
    }
  })
};

// findAllAuthors();

// Read One
// Buscar un autor en base a su ID
// parametro:
//  - ID del autor

const findOneAuthorById = (id) => {
  const GET_URL = `${URL_BASE}/authors/${id}`;
  console.log('ruta', GET_URL);

  return request.get(GET_URL, (error, response, body) => {
    if (response.statusCode === 200) {
      const authors = JSON.parse(body);
      console.log(authors);
      
      return authors;
    } else {
      console.log(response.statusCode);
      console.log('error')
    }
  })
}

// findOneAuthorById(14661);

// Updatee
// Actualizar un autor
// Objeto de update:
// {
//   "name": name,
//   "last_name": lastName,
//   "nacionalidad": nacionalidad,
//   "biography": biography,
//   "gender": gender,
//   "age": age,
//   "is_alive": isAlive
// }

const updateAuthor = (id, name, last_name, nacionalidad, biography, gender, age, is_alive) => {
  const PUT_URL = `${URL_BASE}/authors/${id}/`;
  console.log('URL', PUT_URL);

  const jsonSend = {
    name,
    last_name,    
    nacionalidad,
    biography,
    gender,
    age,
    is_alive
  };

  return request.put(PUT_URL, { form: jsonSend }, (error, response, body) => {
    if (response.statusCode === 200) {
      const updatedAuthor = JSON.parse(body);
      console.log(updatedAuthor);
      
      return updatedAuthor;
    } else {
      console.log(body)
      console.log(response.statusCode);
    }
  });
}

// updateAuthor(14563, 'Liseth', 'Rojas', 'MX', 'quimica', 'F', 24, true)
// updateAuthor(14661, "Mikee", "Saramago", "USA", "Escritor de mucho código", "F", 371, true);

// Delete
// Borrado fisico por id
// parametros:
//  - Id

const deleteAuthorById = (id) => {
  const DELETE_URL = `${URL_BASE}/authors/${id}/`;
  console.log('URL', DELETE_URL);

  return request.delete(DELETE_URL, (error, response, body ) => {
    if (response.statusCode === 204) {
      console.log(`El usuario con ${id}, fue eliminado`);
    } else {
      console.log(body)
      console.log(response.statusCode);
    }
  })
}

// deleteAuthorById(14661);