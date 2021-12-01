// Elementos que va a conformar el arbol 

class Node { 
  constructor(data, level, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// METODO ADD
// si está vacio
//  crear nuevo nodo (data,null, null) : new Node(data, null, null);
// si no está vacia
//  crear un apuntador (current node) a mi raiz
//    currentNode = this.root;
//    agregar un ciclo mientras cada nodo sea un subarbol
//      si la data de mi nuevo nodo es menor que la data en mi nodo actual
//        revisar si el nodo izquierdo está vacio
//          mi nodo actual le asigno a la izquierda el nuevo nodo
//      si la data del nuevo nodo es mayor o igual que en mi nodo actual
//        si el nodo derecho está vacio
//          agregar nuevo nodo
//    cambiar nuestro nodo actual por el hijo derecho del nodo actual

// Definicion de arbol
// Metodos principalees de un nodo:
// Agragera -> Add: se encarga de agregar un dato;
// contiene -> contains: verificar si un nodo existe respecto a un dato
// agregar identificador a el arbol 
// imprimir node dependiendo del nivel;
class Tree {
  constructor() {
    this.root = null;
  }

  add(data) {
    if (this.root === null) {
      this.root = new Node(data);
      return;
    }
    let currentNode = this.root;
    while (true) {
      if (data < currentNode.data) {
        if (currentNode.left !== null){
          currentNode = currentNode.left
        } else {
          currentNode.left = new Node(data);
          return;
        }
      } else { 
        if (currentNode.right !== null) {
            currentNode = currentNode.right
        } else {
          currentNode.right = new Node(data);
          return;
        }
      }
    }
  }

  contains(data) {
    let currentNode = this.root;

    while(currentNode !== null) {
      if (data === currentNode.data) {
        return true;
      } else { 
        if (data < currentNode.data) {
          currentNode = currentNode.left;
        } else { 
          currentNode = currentNode.right;
        }
      }
    }

    return false;
  }
};

const miArbol = new Tree();
console.log(miArbol)
miArbol.add(1);
console.log(miArbol)
miArbol.add(2);
console.log(miArbol)
miArbol.add(2);
console.log(miArbol)
miArbol.add(0);
console.log(miArbol)

console.log('contiene 1',miArbol.contains(1));
console.log('contiene 2',miArbol.contains(2));
console.log('contiene 3',miArbol.contains(3));
