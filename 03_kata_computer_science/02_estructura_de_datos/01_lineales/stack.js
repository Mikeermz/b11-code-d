// const PILA = []

// console.log(PILA);
// // Agregar nuevos valores a mi pila
// PILA.push('Mikee');
// PILA.push('Pauly');
// PILA.push('Santiago');
// PILA.push('Angel');
// PILA.push('Valeria');
// console.log(PILA);

// // Sacar el ultimo valor a mi pila

// const valor = PILA.pop();
// console.log(PILA);
// console.log(valor);

// // Peek 
// console.log(PILA[PILA.length-1])

// // Size 
// console.log(PILA.length);

class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(nuevoElemento) {
    this.count ++;
    this.storage[this.count]  = nuevoElemento;
  };

  pop(){
    if (this.count === 0) return null

    const borrarElemento = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return borrarElemento;
  };

  peek(){
    if (this.count === 0) return null

    return console.log(this.storage[this.count]);
  };

  print(){
    return console.log(this.storage);
  }

  size() {
    return console.log(Object.keys(this.storage).length)
  }
}

// const miPila = new Stack()
// // console.log(miPila);
// miPila.push('Mikee');
// miPila.push('Pauly');
// miPila.push('Santiago');
// miPila.push('Angel');
// miPila.push('Valeria');
// miPila.peek()
// miPila.print()
// miPila.pop();
// miPila.print()
// miPila.pop();
// miPila.peek()
// miPila.pop();
// miPila.pop();
// miPila.pop();

// miPila.size()


// 1.- Hacer una función que reciba como parámetros una pila, y un número.
// La función debe retornar tantos elementos como diga el número (segundo parámetro).

// Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
// Salida: [‘Manzana’,‘Cebolla’,‘Apio’,]

const frutas = ['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'];

const regresoDeParametros = (array, cantidad) => 
  array.slice(0,cantidad);

const nuevoArreglodeFrutas = regresoDeParametros(frutas, 2);

console.log(nuevoArreglodeFrutas);