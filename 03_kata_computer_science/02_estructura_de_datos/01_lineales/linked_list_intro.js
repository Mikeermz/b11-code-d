const list = { 
  head: { // Cabezara
    value: 1, 
    next: {
      value: 'hola',
      next: {
        value: [1,2,3],
        next: {
          value: {nombre: 'mikee'},
          next: {
            value: true,
            next: { // Empieza el Nodo
              value: NaN, // Valor del Nodo
              next: null // Valor del siguiente nodo
            } // Termina el Nodo
          }
        }
      }
    }
  }
};

console.log(list.head.next.next.next.next.next.value)

const linked_list_number = { 
  head: {
    value: 400,
    next: {
      value: 300, 
      next: {
        value: 200, 
        next: {
          value: 100,
          next: null
        }
      }
    }
  }
};

console.log('ultimo valor')
console.log(linked_list_number.head.next.next.next.next);
linked_list_number.head.next.next.next.next = { value: 50, next: null}

console.log('se agrego un extra en la llave')
console.log(linked_list_number.head.next.next.next.next);


