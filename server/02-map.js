const letters = ['a','b','c'];

// Forma "ineficiente" de hacer un 'map o transformación' usando un 'for'"
const newArray = [];
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  newArray.push(element + 'xx');                                            // El método '.push' es mutable
}


// Forma más eficiente usando el método '.map()', este método crea un nuevo Array asi que es Inmutable
const mappedArray = letters.map(element => element + 'xx');


console.log('Array original', letters);
console.log('Array nuevo con for', newArray);
console.log('Array transformado con map', mappedArray);