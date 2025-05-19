// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.

const { ask } = require('../helpers/input');

async function main() {

  let edades = await ask("Ingresa las edades que deseas validar, separadas por una coma.");
  edades = edades.split(","); //el split convierte un string en un arreglo
  let mayoresDeEdad = 0;

  for (let i = 0; i <= edades.length -1; i++){
    let edad =Number(edades[i])
    if (edad >= 18){
      mayoresDeEdad++;
    } 
  } console.log("Tienes: " + mayoresDeEdad + " mayores de edad");



}
main();