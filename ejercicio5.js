//Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.
//Que la función use el parametro para simular una tirada de dado y retornar el resultado.
//Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random()

const rollDice = (numCaras) => {
  if(numCaras < 2){ 
    console.log("El dado tiene que tener al menos 2 caras");
  } else{
  const tirada = Math.floor(Math.random() * numCaras) + 1;  // Número aleatorio entre 1 y numCaras
  return tirada;
  }
}


const resultado = rollDice(2);
console.log("Resultado de la tirada:", resultado);
