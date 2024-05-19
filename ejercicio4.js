//Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.

const mainCharacters = [
"Luke",
"Leia",
"Han Solo",
"Chewbacca",
"Rey",
"Anakin",
"Obi-Wan",
];

const findArrayIndex = (array, text) =>{
  for(let i = 0; i < array.length; i++) {
    let character = array[i];
    if(text === character) {
      const position = i;
      return position;
    }  
  }
   console.log("Your character is not on the list. Please enter another character.");
   return array;
}

let result = findArrayIndex(mainCharacters, 'Rey');
console.log(result);

//Parte 2

const removeltem = (array, text) => {
  let index = findArrayIndex(array, text);
  if(index !== -1) {
    //el primer .slice crea un array desde 0 hasta i (sin incluir i) y el segundo desde i (sin incluir) hasta el final del array original. .concat lo concatena todo en un único array.
    return array.slice(0, index).concat(array.slice(index + 1));
  } else {
    console.log("Your character is not on the list. Please enter another character.");
    return array;
  }
}

let updatedArray = removeltem(mainCharacters, 'Rey');
console.log(updatedArray);