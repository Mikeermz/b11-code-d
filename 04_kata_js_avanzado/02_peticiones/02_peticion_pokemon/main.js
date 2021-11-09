const request = require("request");
// Hacer una petición a la PokeAPI para obtener cualquier Pokémon.  Muestra sus tipos en consola mediante un for. https://pokeapi.co/

const getPokemonByName = (pokemon) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  request.get(URL, (error, response, body) => {
    if (error || response.statusCode === 404) {
      console.log(error);
      return null;
    }
    const pokemon = JSON.parse(body)

    const {name, types} = pokemon;

    const type = types.map((type) => {
      const {type: { name }} = type
      return name;
    });

    console.log({name, type})
  }); 
};

// getPokemonByName('dragonite')


// Escribe una función que al ejecutarse realice una petición a la API de Open Library.
// (Ejemplo: peticionLibro("i robot");
// Buscar un libro y traer el o los autores del primer libro
// http://openlibrary.org/search.json?q=i+robot) 


const getAuthorByBook = (book) => {
  const URL = `http://openlibrary.org/search.json?q=${book}`;

  console.log(URL)

  request.get(URL, (error, response, body) => {
    const { docs } = JSON.parse(body);

    if (error || response.statusCode === 404 || docs.length === 0) {
      console.log(error);
      return null;
    }

    const [{author_name: firstAuthor}] = docs;
    
    console.log({ authors: firstAuthor})
    
  }); 
};

// getAuthorByBook('divina comedia');

// Hacer una petición por autor y devolver la lista de sus libros
// http://openlibrary.org/search.json?author=asimov

const getBooksByAuthor= (author) => {
  const URL = `http://openlibrary.org/search.json?author=${author}`;

  request.get(URL, (error, response, body) => {
    const { docs } = JSON.parse(body);

    if (error || response.statusCode === 404 || docs.length === 0) {
      console.log(error);
      return null;
    }
    
    const books =  docs.map((book) => book.title);

    const [...[{title}]] = docs;

    console.log({title})
    console.log({books})
  }); 
};

// getBooksByAuthor('asimov');

var options = {
  url: `http://openlibrary.org/search.json?author=asimov}`,
  headers: {
    'User-Agent': 'request'
  }
};

function callback(error, response, body) {
  console.log(body)
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");
  }
}

const h = request(options, callback)