const { Mascota } = require('./Mascota');

// Clase hija de mascota

class Gato extends Mascota {
  constructor(vidas, nombre) {
    super(4, nombre);
    this.raza = vidas;
  }

  getVidas() {
    return this.vidas;
  }
}

module.exports = { Gato };