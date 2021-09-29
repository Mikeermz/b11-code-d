class Perro { 
  constructor(nombre, raza, color) {
    this.nombre = nombre;
    this.color = color;
    this.raza = raza;
  }
  // Definir metodos
  ladrar(){
    return 'Waau'
  };
  comer(comida = 'Croquetas'){
    return `${this.nombre} esta comiendo ${comida}`;
  }
}

const ayudanteDeSanta = new Perro('Ayudante de Santa', 'galgo', 'cafe');

console.log(ayudanteDeSanta);
console.log(ayudanteDeSanta.nombre);
console.log(ayudanteDeSanta.color);
console.log(ayudanteDeSanta.raza);
console.log(ayudanteDeSanta.ladrar());
console.log(ayudanteDeSanta.comer('carne'));

// Declarando un nuevo metodo de la instancia
ayudanteDeSanta.dormir = () => 'zzz';

console.log(ayudanteDeSanta);


const snoopy = new Perro('Snoopy', 'beagle', 'blanco y negro');

console.log(snoopy);
console.log(snoopy.nombre);
console.log(snoopy.color);
console.log(snoopy.raza);
console.log(snoopy.ladrar());
console.log(snoopy.comer());
