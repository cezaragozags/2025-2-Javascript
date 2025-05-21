// 📝 Instrucciones:
// Crea un arreglo llamado alumnos.
//
// Usa un bucle while para permitir al usuario agregar objetos alumno al arreglo.
// Cada alumno debe tener:
//
// nombre
// edad
// calificacion
//
// Pregunta al usuario si desea seguir agregando más alumnos.
// Después de salir del ciclo, muestra:
// Cuántos alumnos tienen calificación aprobatoria (≥ 70).
// Cuántos pueden votar (edad ≥ 18).
// El promedio general de calificaciones.
// La calificación mayor.
// La calificación menor.

const { ask } = require("../helpers/input");

async function main() {
  let alumnos = [];
  let insertarAlumno = true;
  
  while (insertarAlumno) {
    const name = await ask("¿Cuál es el nombre del Alumno? ");
    const age = await ask("¿Cuál es la edad del Alumno? ");
    const grade = await ask("¿Cuál es la calificacion del Alumno? ");

    const alumno = {
      nombre: name,
      edad: Number(age),
      calificacion: Number(grade)
    };

    alumnos.push(alumno);

    const siguienteAlumno = await ask("¿Deseas agregar otro Alumno? si/no ");

    if (siguienteAlumno.toLowerCase() !== "si"){
      insertarAlumno = false;
    }
    


  }
}

main();
