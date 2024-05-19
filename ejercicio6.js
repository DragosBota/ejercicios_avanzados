//Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
//La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.
//Retorna el array resultante.

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

const swap = (arr, index1, index2) => {
  
for (let i = 0; i < arr.length; i++) {
  if (i === index1) {
    let temporal = arr[index1];
    for (let j = 0; j < arr.length; j++) {
      if (j === index2) {
        arr[index1] = arr[index2];
        arr[index2] = temporal;
      }
    }
  }
}
return arr;
};

const result = swap(fantasticFour, 0, 3);
console.log("Array después del intercambio:", result);
