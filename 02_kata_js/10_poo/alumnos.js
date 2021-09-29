class Alumno {
  // Contructor: El método constructor es un método especial para crear e inicializar un objeto creado con una clase. Solo puede haber un método especial con el nombre "constructor" en una clase. Si esta contiene mas de una ocurrencia del método constructor, se arrojará un Error SyntaxError
  // Propiedades: Las propiedades son parametros contenidos en la clase, cada instancia del objeto tiene dichas propiedades. Las propiedades deben establecerse a la propiedad prototipo de la clase (función), para que la herencia funcione correctamente.
  constructor(nombre, apellido, curso) {
    console.log('me estoy construyendo');
    this.nombre = nombre;
    this.apellido = apellido;
    this.curso = curso;
    // this: Para trabajar con propiedades dentro de la clase se utiliza la palabra reservada this , que se refiere al objeto actual. El acceso (lectura o escritura) a una propiedad desde fuera de la clase se hace con la sintaxis: NombreDeLaInstancia.Propiedad. Desde dentro de la clase la sintaxis es this.Propiedad que se utiliza para obtener o establecer el valor de la propiedad).
  };
  // Métodos: Algoritmo asociado a un objeto (o a una clase de objetos), cuya ejecución se desencadena tras la recepción de un "mensaje". Desde el punto de vista del comportamiento, es lo que el objeto puede hacer.
  estudiar(){
    console.log('estoy entrando a estudiar')
    return 'estoy estudiando';
  };
};

// Instancia: En los lenguajes de programación orientada a objetos un objeto es una instancia de una clase. Esto es, un miembro de una clase que tiene atributos en lugar de variables. En un contexto del mundo real, podríamos pensar en "Casa" como una clase y en un chalet como una instancia de esta e incluso otro chalet u otro tipo de casa como puede ser un apartamento como otra instancia

const Mikee = new Alumno('mikee', 'ramirez', 'master en code');
const Dash = new Alumno('Carlos', 'Fuentes', 'proffesional code');

console.log(Mikee);
console.log(Dash);
