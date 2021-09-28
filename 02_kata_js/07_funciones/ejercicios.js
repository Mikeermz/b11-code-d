// Ejercicio 1
// suma de dos numeros

function sum(a, b) {
  return a + b;
}

// Ejercicio 2
// resta de dos numeros

function subtraction(a, b) {
  return a - b;
}

//Ejercicio 3
// muliplicacion de dos numero

function multiplication(a, b) {
  return a * b;
}

//Ejercicio 4
// division de dos numeros

function division(a, b) {
  return a / b;
}

// Ejercicio 5
// Saber si soy mayor de edad o meor

function mayorDeEdad(edad) {
  if (edad >= 18) {
    return "Mayor de edad";
  } else {
    return "Menor de edad";
  }
}

// Ejercicio 6
// Evaluar si un numero es positivo o negativo

function evaluate(num) {
  if (num === 0) {
    return "Cero"
  } else if (num > 0) {
    return "Positivo"
  } else {
    return "Negativo"
  }
}

// Ejercicio 7
// Saber si una letra es consonante o vocal

function letter(letra) {
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    return "Vocal"
  } else {
    return "Consonante"
  }
}

// Ejercicio 8
// En un array colocar los numeros pares entre el 0 y 100

var pares = []
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    pares.push(i)
  }
}


// Ejercicio 9
// Cambiar el juego de piedra, papel y tijeras por funciones

function game(player1, player2) {
  if (player1 === "Papel" && player2 === "Papel" || player1 === "Tijeras" && player2 === "Tijeras" || player1 === "Piedra" && player2 === "Piedra") {
    return "Empate"
  } else if (player1 === "Papel" && player2 === "Piedra" || player1 === "Tijeras" && player2 === "Papel" || player1 === "Piedra" && player2 === "Tijeras") {
    return "J1"
  } else if (player2 === "Papel" && player1 === "Piedra" || player2 === "Tijera" && player1 === "Papel" || player2 === "Piedra" && player1 === "Tijeras") {
    return "J2"
  } else {
    return "Algo no salió como se esperaba"
  }
}