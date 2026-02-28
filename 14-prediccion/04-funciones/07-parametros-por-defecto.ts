/*
 * EJERCICIO: Parámetros por defecto
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

function saludarConIdioma(nombre: string, idioma: string = 'español') {
  if (idioma === 'español') {
    console.log('Hola ' + nombre);
  } else {
    console.log('Hello ' + nombre);
  }
}
saludarConIdioma('Luigi');
saludarConIdioma('Peach', 'inglés');

// Predicción 1:Hola Luigi
// Predicción 2:Hello Peach

export {};
