// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.

const { ask } = require('../helpers/input');

function diffDays(actualDate, birthDate) {
  const diff = actualDate - birthDate;
  const edadEnDias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const edadEnMeses = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
  const edadEnAnios = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

  return {
    dias: edadEnDias,
    meses: edadEnMeses,
    anios: edadEnAnios
  };
}

async function main() {
  const actualDate = new Date();

  const birthDay = await ask("¿Cuál es tu día de nacimiento?");
  const birthMonth = await ask("¿Cuál es tu mes de nacimiento?");
  const birthYear = await ask("¿Cuál es tu año de nacimiento?");
  const birthDate = new Date(`${birthYear}-${birthMonth}-${birthDay}`);

  const resultado = diffDays(actualDate, birthDate);

  console.log("Haz vivido aproximadamente:");
  console.log(`${resultado.dias} días`);
  console.log(`${resultado.meses} meses`);
  console.log(`${resultado.anios} años`);
}

main();