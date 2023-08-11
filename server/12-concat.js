// El método '.concat()' crea un nuevo array entre Arrays u otros valores
const elements = [1,1,2,2];
const otherElements = [3,3,4,4];

// Manera "ineficiente" de emular el método '.concat()' con un cicle 'for' simple
const newArray = [...elements];                                                 // Hace una copia que no afecte el valor de referencia de este Array original
for (let index = 0; index < otherElements.length; index++) {
  const element = otherElements[index];
  newArray.push(element);
}
console.log('Concat using simple "for" cycle:', newArray);


// Usando el método 'concat()' lo podemos hacer en una sola línea de código
const concatArray = elements.concat(otherElements);                           // No nos tenemos que preocupar por hacer una copia con el 'Spread Operator' porque este método devuelve un nuevo Array
console.log('Using ".concat()" method:', concatArray);


// Otra forma valida de hacer concatenación usando el 'Spread Operator'
const concatSpreadOperator = [...elements, ...otherElements];                 // Hacemos una copia de cada uno de estos Array y se unen automaticamente
console.log('Using "Spread Operator": ', concatSpreadOperator);


// Hay que tener cuidado cuando concatenamos usando el 'Spread Operator' junta a un String porque va a separa cada letra ya que es una Cadena de Texto
const concatWithSpreanAndWords = [...elements, ...'random'];
console.log('Spread Operator with words:', concatWithSpreanAndWords);


// Que pasa si queremos modificar el Array original y meter todos los elementos del segund array
//elements.push(otherElements)                                                  // Esto metera el Array entero en la ultima posición del primer array, es mejor hacerle un Spread Operator
elements.push(...otherElements);
console.log('Modified first Array:', elements);