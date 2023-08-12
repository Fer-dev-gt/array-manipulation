
// Cuando trabajamos con un Array de Arrays se puede dar cuando trabajamos con Matrices
const matrix = [
  [1,2,3],
  [4,5,6, [1,2, [1,2,[3,2]]]],
  [7,8,9],
];

// Forma "Muy ineficiente" de simular el método '.flat()' con ciclos anidados 'for' (Big O al cuadrado)
// Aunque enterder la logica de ciclos 'for' anidados para trabajar con matrices es muy preguntado en entrevistas de trabajo
// Puede usar recursion
const newArray = [];
for (let i = 0; i < matrix.length; i++) {
  const array = matrix[i];                                            // Guarda el Array dentro del Array principal es la "fila/row"

  for (let j = 0; j < array.length; j++) {
    const element = matrix[i][j];                                     // Guardamos el valor exacto de nuestra matriz al recorrer la "columna"
    newArray.push(element);                                           // Ese valor encontrado lo colocamos en un nuevo Array y conseguimos el efecto 'Flat'
  }

}
console.log('Emulating ".flat()" method with nested for: ', newArray);


// Usando el método '.flat()' lo hacemos en una sola línea de código, puede seleccionar cuantos niveles quiero que aplane
const flatedArray = matrix.flat();
console.log('Using ".flat()" method: ', flatedArray);


const flatedArrayLevels = matrix.flat(3);
console.log('Using ".flat()" method with 3 levels: ', flatedArrayLevels);


const flatedArrayLevelsInfinity = matrix.flat(Infinity);
console.log('Using ".flat()" method with Infinite levels ', flatedArrayLevelsInfinity);




// Solucionando el reto de hacer 'Flat' usando 'Recursión' (Bueno para entrevistas de trabajo)
function profundidad(list) {
  let newList = [];
  if (typeof list != "object") return [list];
  list.forEach(element => {
    newList = newList.concat(profundidad(element));                       //Aqui es donde aplicamos la recursividad
  });
  return newList;
}

const newArrayRecursividad = profundidad(matrix);
console.log('Flatted array with recursividad: ' ,newArrayRecursividad);



// Otra solucion mas corta de hacer Flat a los elementos del Array
const flatten = (arr) => arr.reduce((acc, el) => acc.concat(el), []);
console.log('Flat with ".reduce" method', flatten);