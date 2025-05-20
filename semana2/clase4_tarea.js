//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja

const { ask } = require("../helpers/input");

async function main() {
  function analizarCalificaciones(calificaciones) {
    let aprobados = 0;
    let reprobados = 0;
    let suma = 0;
    let maxima = calificaciones[0];
    let minima = calificaciones[0];

    for (let cal of calificaciones) {
      if (cal >= 70) {
        aprobados++;
      } else {
        reprobados++;
      }

      suma += cal;
      if (cal > maxima) {
        maxima = cal;
      }
      if (cal < minima) {
        minima = cal;
      }
    }

    let promedio = suma / calificaciones.length;

    return {
      aprobados: aprobados,
      reprobados: reprobados,
      promedio: promedio,
      maxima: maxima,
      minima: minima
    };
  }
  
    const calificaciones = [85, 60, 78, 92, 55, 70, 89, 45];
    const resultado = analizarCalificaciones(calificaciones);
    console.log(resultado);
}

main();
