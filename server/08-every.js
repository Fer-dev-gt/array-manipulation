// El método '.every()' es como el "contrario" al método ".some()" en donde TODOS los elementos del Array tiene que cumplir con la condición y SIEMPRE retorna un true o false
const numbers = [1, 30, 9, 29, 10, 13];

// Forma "ineficiente" de emular el método '.every()' usando un ciclo 'for' simple
let every = true;                                           // Le voy a dar un valor por defecto true, y esta emulación la cambiará a false
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 40) {                                      // Si hay un número menor a 40 entonces devuelve false
    every = false;
  }
}
console.log('every usando "for": ', every);

// Forma de hacerlo en una línea con el método ".every()", va a evaluar si todos los numeros del Array son menores o iguales a 40
const methodEvery = numbers.every(item => item <= 40);
console.log('Usando el método ".every()"', methodEvery);


// Resolviendo el reto de la clase, ver si todos los miembros del equipo son menores de 15 años
const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

// Retorna una valor true o false, se extrajo las edades usando ".map()"
const validTeam = team
  .map(item => item.age)
  .every(item => item <= 15);
console.log('Is it a valid team?', validTeam);


// Forma de hacerlo aun más corto sin usar el método ".map()"
const validTeamReduced = team.every(player => player.age < 15);
console.log('Is it a valid team?', validTeamReduced);



// Solución al reto de Playgrounds
export function checkArray(array) {
  return array.length == 0 ? false : array.every(number => number % 2 === 0)
}

// Solución mas corta
export function checkArray(array) {
  return array.length ? array.every(number => number % 2 === 0) : false
}