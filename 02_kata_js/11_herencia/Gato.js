const {Mascota} = require('./Mascota')
//Clase hija de Mascota
class Gato extends Mascota{
    
    constructor( vidas, nombre ) {
        
        super(4,nombre)
        console.log('Se creo el Gato');
        this.vidas = vidas
    }

    getVidas(){
        return this.vidas
    }
}

module.exports = {
    Gato
}