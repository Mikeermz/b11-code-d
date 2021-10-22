// Queue (cola);

class Queue { 
  constructor() {
    this.collection = [];
  }

  queue(newElement) {
    this.collection.push(newElement);
    
    return this.collection;
  }
  
  dequeue(){
    if (this.collection.length === 0) return null

    return this.collection.shift();
  }

  isEmpty() {
    return this.collection.length === 0
  }

  front() {
    if (this.collection.length === 0) return null
    
    return this.collection[0];
  }

  back() {
    if (this.collection.length === 0) return null
    
    return this.collection[this.collection.length-1];
  }

  size() {    
    return this.collection.length
  }

  print() {
    return this.collection
  }
}

const miColecion = new Queue();
miColecion.queue(1);
miColecion.queue(2);
console.log('front', miColecion.front())
console.log('back', miColecion.back())
console.log('size', miColecion.size())
console.log('print', miColecion.print())

console.log(miColecion)
console.log(miColecion.isEmpty())

const elemento = miColecion.dequeue();
const elemento2 = miColecion.dequeue();
console.log(elemento2)

console.log(miColecion.isEmpty())

const elemento3 = miColecion.dequeue();
console.log('front', miColecion.front())
console.log('size', miColecion.size())
console.log('print', miColecion.print())

console.log(miColecion.isEmpty())