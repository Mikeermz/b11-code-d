// Linked List
 
// El nodo es la infomacion del elemento y su apuntador (enlace) al siguiente elemento.
// class Node {
//   constructor(data){
//     // En data guardamos cualquier objeto que quermosa
//     this.data = data;
//     // Es quien nos indica el siguiente nodo, por defecto este es nulo.
//     this.next = null;
//   }
// }

// const nuevoNodo = new Node(1);
// console.log(nuevoNodo)

// class LinkedList {
//   constructor(head = null){
//     this.head = head;
//   }
// }

// Una Lista debe de tener una cabecera (head)
// Esta nos  indica el inicio de la lista.

// Las listas tienen sus comportamientos escenciales:
// Insertar (add)
// -- al principio
// -- al final
// -- en medio
// Borrar (valor)
// Buscador u obtener indice
// Saber si la lista esta vacia

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
};

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  addAtEnd(data){
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;

      // While: mientras (condicion: se cumpla la conducion) { hace el codigo }
      while(currentNode.next) { // Verifico si next tiene un nodo
        currentNode = currentNode.next; // Sustituyo el valor del nodo que vive en ext a mi nodo actual
      }
      // cuanto next sea nulo, sale del whiole y continua con el resto del codigo.

      currentNode.next = node;
    }

    this.length++;
  }

  addAtStart(data){
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  get(index){
    if (this.head === null || index > this.length) {
      return null;
    } else {
      let counter = 1;
      let currentNode = this.head;

      while(counter !== index) {
        counter++;
        currentNode = currentNode.next;
      }

      return currentNode;
    }
  }

  delete(data) {
    let currentNode = this.head;
    let previousNode = null;

    if (currentNode.data === data) {
      this.head = currentNode.next;
    } else { 
      while (currentNode.data !== data && currentNode.next !== null) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }

    this.length--;
  }
};

const myLinkedList = new LinkedList();
// Primera iteracion
console.log(myLinkedList);
// Agregando un nodo al final
myLinkedList.addAtEnd(1);
// Segunda iteracion
console.log(myLinkedList);
// Agregando un nodo al final
myLinkedList.addAtEnd(2);
// Tercera iteracion
console.log(myLinkedList);
// agrego un nodo al inicio
myLinkedList.addAtStart(0);
// Cuarta iteracion
console.log(myLinkedList);
// Busqueda de un nodo por el indice
// console.log('get',myLinkedList.get(3));

console.log(myLinkedList.isEmpty());
myLinkedList.delete(1);
console.log(myLinkedList);
myLinkedList.delete(0);
console.log(myLinkedList);
myLinkedList.delete(2);
console.log(myLinkedList);
console.log(myLinkedList.isEmpty());

