// El método '.join()' siempre retorna un String, puede recibir un Array
const elements = ["Fire", "Air", "Water"];

// Forma "ineficiente" de simular el efecto del método ".join()" (No devuelve el formato deseado, solo una parecido)
let finalAnswer = '';
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  finalAnswer = finalAnswer + element + '--'                                    // Concatenamos/unimos las palabras y le agregamos un separador
}
console.log('Joining using a simple "for" cycle:', finalAnswer);                  // Esta respuesta no es buena porque agrega el separador al ultimo elemento, ej: Water--


// Usando el método '.join()' recibo como parámetro el símbolo que servira como union de los elementos del Array, puede ser incluso un espacio en blanco
const joiningWithMethos = elements.join('--');
console.log('Using ".join()" method: ', joiningWithMethos);



// MÉTODO '.split()' (el cual es el contrario del método '.join()')

// Usando el método '.split()' nos devuelve un Array con cada elemento que separamos en un lugar del Array
const title = 'Curso de manipulación de Arrays'; 
const arrayOfWords = title.split(' ');                                          // Separamos todas las palabras al poner como separador el espacio en blanco ' ', tambien acepta RegEx
console.log('An array of words using ".split()" method:', arrayOfWords);


// Usamos el método '.split()' para cambiar el formato de una frase con minusculas a una frase de URL con minusculas y seperadas por un guión
const urlFinal = title.split(' ').join('-').toLowerCase();                      // Primero creamos un array de las palabras, luego las unimos con un - y por ultimo pasamos todo a minusculas
console.log('Url format using many methods: ', urlFinal);


// Otro ejemplo muy común del método join en el ejercicio del palíndromo (Básicamente una palabra que se escribe igual de derecha a izquierda y viceversa
const word = 'Arepera'
const palindrome = (word) => {
  return word.split('').reverse().join('').toLocaleLowerCase()                    // Lo que hace es dividir, voltear y luego unirlo con el ".join()"...
};

console.log(palindrome(word))


// Forma de quitar las tildes para convertir bien la URL usando RegEx
const removeAccents = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const titleAccent = removeAccents('Curso de Manipulación de Arrays');

const urlFinalNoAccent = titleAccent.split(' ').join('-').toLocaleLowerCase();
console.log('URL without any tilde: ', urlFinalNoAccent);



// Solución al reto de Playgrounds
export function parseToURL(title) {
  return title.split(' ').join('-').toLowerCase();
}

// También se puede resolver el reto usando solo el método '.replaceAll()' y mandando el caracter a cambier y que lo va a reemplazar
export function parseToURL(title) {
  return title.replaceAll(" ", "-").toLowerCase();
}; 