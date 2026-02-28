/*
 * EJERCICIO: Clase básica
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

class Jugador {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}
let jugador1 = new Jugador('Mario');
let jugador2 = new Jugador('Luigi');
let jugador3 = new Jugador('Peach');

console.log(jugador1.nombre);
console.log(jugador2.nombre);
console.log(jugador3.nombre);

jugador1.nombre = 'Mario Bros';
console.log(jugador1.nombre);
console.log(jugador2.nombre);

// Predicción 1:Mario
// Predicción 2:Luigi
// Predicción 3:Peach
// Predicción 4:Mario Bors
// Predicción 5:Luigi

export {};
