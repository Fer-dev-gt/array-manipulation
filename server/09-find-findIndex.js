// El método '.find()' siempre retorna el primer elemento completo que encontró si no lo encuentra entonces retorna 'undefined'
const numbers = [1, 30, 41, 29, 50, 60]

// Forma "ineficiente" de simular el método '.find()'
let elementUsingFor = undefined;                            // Si no se encuentra el valor buscado este devuelve 'undefined'
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if(element === 30) {
    elementUsingFor = element;
    break;
  }
}
console.log('Finded using a "for" cycle: ', elementUsingFor);


// Usando el método '.find()'
const elementUsingMethodFind = numbers.find(number => number === 30);
console.log('Finded using method ".find()": ', elementUsingFor);


// Podemos usar '.find()' para encontrar un elemento en particular de un Array de Objects
const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

// Como trabajamos con Objects y no creamos una copia segura si cambiamos este valor tambien afectara al Object original
const foundFood = products.find(food => food.id === '🍔');
console.log('Food found: ', foundFood);                     // Nos retornará todo el elemento (Object en este caso)



// El método '.findIndex()' devuelve el número del index donde encontro al elemento de la condición, si no lo encuentra entonces retorna '-1'
// Buscado la posición del elemento encontrado en el Array
const positionIndexFound = products.findIndex(food => food.id === '🍔');
console.log('Index of element found: ', positionIndexFound);
