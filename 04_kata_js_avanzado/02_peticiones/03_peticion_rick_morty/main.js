const request = require("request");

// request.get('https://rickandmortyapi.com/api/character/?name=morty&status=alive', (error, response, body) => {
//   if (error) {
//     console.log(error);
//     return null;
//   } 

//   console.log(response.statusCode);
//   console.log(body)
// });

const getCharacterByName = async (name) => {
  const URL = `https://rickandmortyapi.com/api/character/?name=${name}&status=alive`;

  console.log('url', URL)
  request.get(URL, (error, response, body) => {
    if (error) {
      console.log(error);
      return null;
    };

    const { results, error: errorResponse } = JSON.parse(body);

    if (errorResponse) {
      console.log({error: errorResponse});
      return null;
    };

    const characters = results.map((character) => {
      const {name, origin: {name: originName}, image} = character
      
      return {
        name,
        originName,
        image
      };
    });

    console.log(characters)
  });

};

getCharacterByName('evil morty');
getCharacterByName('rick morty');
getCharacterByName('rick sanchez');

