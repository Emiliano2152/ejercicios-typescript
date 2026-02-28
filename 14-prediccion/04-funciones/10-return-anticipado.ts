/*
 * EJERCICIO: Return anticipado
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

function verificarEdad(edad: number) {
  if (edad < 18) {
    return 'Menor de edad';
  }
  return 'Mayor de edad';
}
console.log(verificarEdad(15));
console.log(verificarEdad(25));

// Predicción 1:Menor de edad
// Predicción 2:Mayor de edad

export {};
