// Creamos una superclase
class Mascota {
  constructor(patas, nombre) {
    this.patas = patas;
    this.nombre = nombre;
    this.cerebro = true;
    console.log('se creo la mascota');
  }

  getNombre() {
    return this.nombre
  }
};


// Preparo la clase mascota para poder ser llamada desde otro archivo.
module.exports = { Mascota };