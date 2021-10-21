const { Mascota } = require('./Mascota');

// Clase hija de mascota

class Perro extends Mascota {
  constructor(raza, color, nombre) {
    super(4, nombre);
    this.raza = raza;
    this.color = color;
  }

  getRaza() {
    return this.raza;
  }
}

module.exports = { Perro };