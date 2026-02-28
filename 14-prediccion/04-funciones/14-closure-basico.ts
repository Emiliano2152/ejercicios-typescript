/*
 * EJERCICIO: Closure básico
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

function crearContador() {
  let cuenta = 0;
  return function() {
    cuenta++;
    return cuenta;
  };
}
const contador = crearContador();
console.log(contador());
console.log(contador());
console.log(contador());

const contador2 = crearContador();
console.log(contador2());
console.log(contador2());
console.log(contador2());

// Predicción 1:1
// Predicción 2:1
// Predicción 3:1 .... no sabia lo que era un closure, y pense que la variable se reiniciaba al terminar la funcion.

export {};
