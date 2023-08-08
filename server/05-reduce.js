// Cuando hacemos un "Reduce" llevamos todos los valores de un Array a una sola expreción/valor
const totals = [1,2,3,4];

// Forma "ineficiente" de hacer un "Reduce" con un 'for' simple
let sum = 0;                                              // Variable que "acumula" el valor de cada sumataria hasta llegar al final del Array
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  sum = sum + element;                                    // Tambien se puede escribir así: sum += element;
}
console.log(sum);


// Forma eficiente usando el método ".reduce()"
// El método ".reduce()" recibe 2 parámetros, la función Callback y el estado inicial del valor que devolvera el ".reduce()" (en este caso lo ponemos en 0)
const sumatoriaReduce = totals.reduce((sum, element)=> sum + element, 0);         // El primer parametro de la función Callback es nuestro "acumulador" en este caso 'sum', el otro parametro es el 'element' que recorre cada valor del Array al iterarlo
console.log('Value using ".reduce()" method:', sumatoriaReduce);