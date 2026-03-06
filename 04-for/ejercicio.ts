/**
 * EJERCICIO: Bucles FOR
 *
 * En este juego, usarás bucles for para procesar listas de elementos del juego.
 *
 * INSTRUCCIONES:
 * 1. Completa las funciones usando bucles for
 */

export function sumarExperiencia(niveles: number[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para sumar todos los valores en el array niveles
  // Retorna la suma total
  let expTotal = 0;

  for (let valor of niveles) {
    expTotal += valor;
  }

  return expTotal;

  throw new Error('Función no implementada');
}

// ====================================

export function contarItemsRaros(inventario: string[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para contar cuántos items contienen la palabra "raro"
  // (case insensitive)
  let cantRaro: number = 0;

  for (let item of inventario) {
    if (item.toLocaleLowerCase().includes('raro')) cantRaro++;
  }
  return cantRaro;
}

// ====================================

export function duplicarPuntajes(puntajes: number[]): number[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para crear un nuevo array donde cada puntaje
  // esté multiplicado por 2
  let puntajesDobles: number[] = [];
  for (let puntaje of puntajes) {
    puntajesDobles.push(puntaje * 2);
  }
  return puntajesDobles;
}

// ====================================

export function encontrarMaximoPuntaje(puntajes: number[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para encontrar el puntaje más alto
  // Si el array está vacío, retorna 0

  if (puntajes.length === 0) {
    return 0;
  }
  let puntajeMasAlto: number = puntajes[0];

  for (let puntaje of puntajes) {
    if (puntajeMasAlto < puntaje) {
      puntajeMasAlto = puntaje;
    }
  }

  return puntajeMasAlto;
}

// ====================================

export function crearInventarioOrdenado(items: string[]): string[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para crear una copia del array items ordenada
  // alfabéticamente (puedes usar el método sort si quieres, pero intenta
  // entender cómo funciona un bucle for primero)
  let copia: string[] = [];
  for (let i of items) {
    copia.push(i);
  }

  for (let i = 0; i < copia.length; i++) {
    for (let j = 0; j < copia.length - 1; j++) {
      if (copia[j] > copia[j + 1]) {
        let temp = copia[j + 1];
        copia[j + 1] = copia[j];
        copia[j] = temp;
      }
    }
  }
  return copia;
}

// ====================================

export function calcularDanioTotal(
  ataques: { nombre: string; danio: number }[]
): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para sumar todo el daño de los ataques
  let danioTotal: number = 0;
  for (let i of ataques) {
    danioTotal += i.danio;
  }
  return danioTotal;
}

// ====================================

export function obtenerEnemigosNivelAlto(
  enemigos: { nombre: string; nivel: number }[],
  nivelMinimo: number
): string[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para obtener los nombres de los enemigos
  // que tienen un nivel mayor o igual a nivelMinimo
  let enemigosNivelMinimo: string[] = [];
  for (let i of enemigos) {
    if (i.nivel >= nivelMinimo) {
      enemigosNivelMinimo.push(i.nombre);
    }
  }
  return enemigosNivelMinimo;
}
