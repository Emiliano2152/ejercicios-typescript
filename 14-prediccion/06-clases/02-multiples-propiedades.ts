/*
 * EJERCICIO: Múltiples propiedades
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

class Personaje {
  nombreMiembro: string;
  vidaMiembro: number;

  constructor(nombreInput: string, vidaInput: number) {
    this.nombreMiembro = nombreInput;
    this.vidaMiembro = vidaInput;
  }

  recibirDanio(danio: number) {
    this.vidaMiembro -= danio;
  }
}
let heroe = new Personaje('Link', 100);
let villano = new Personaje('Ganon', 150);

console.log(heroe.nombreMiembro);
console.log(heroe.vidaMiembro);
console.log(villano.vidaMiembro);

heroe.recibirDanio(30);
console.log(heroe.vidaMiembro);
console.log(villano.vidaMiembro);

villano.recibirDanio(50);
console.log(heroe.vidaMiembro);
console.log(villano.vidaMiembro);

// Predicción 1:
// Predicción 2:
// Predicción 3:
// Predicción 4:
// Predicción 5:
// Predicción 6:
// Predicción 7:

export {};
