const request = require("request");

console.log('Empezando la peticion');

request.get('https://www.google.com', (err, response, body) => {
  console.log(err)
  if (err) return null;

  console.log(response.statusCode);
  console.log(body);
});

console.log('termino la peticion');