// El método '.includes()' SIEMPRE retorna true o false
const pets = [ "cat", "dog", "bat" ];

// Forma "ineficiente" de emular lo que hace el método '.includes()'
let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if(element === 'dog') {
    includeInArray = true;
    break;
  }
}
console.log('Emulating using simple "for" cycle:', includeInArray);



// Haciendo lo de arriba pero con solo una línea de código al usar el método '.includes()'
const includesElement = pets.includes('dog');                                 // Al usar este método no es necesario pasar la condición en un Arrow Function, solamente pasamos el valor que queremos verificar que exista
console.log('Using ".includes()" metho d:', includesElement);



// Solución al reto de Playgrounds
export function filterByTerm(array, term) {
  return array.filter(nombre => nombre.includes(term))
}


// Otra manera de solucionar el reto
export function filterByTerm(words, query) {
	const result = words.filter(word => {
		return word.includes(query);
	});
	return result;
};