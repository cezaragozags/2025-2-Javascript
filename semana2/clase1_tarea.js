// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {

  let numInicio = 1
  let numFinal = 100

  while (numInicio <= numFinal){
    if (numInicio % 2 === 0){
      console.log(numInicio)
    }
    numInicio++;
    
  }

}

main();
