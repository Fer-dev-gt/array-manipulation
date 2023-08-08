const words = ['spray', 'limit', 'elite', 'exuberant'];

// Forma ineficiente de hacer un Filter usando un 'for sencillo'
const newArray = [];
for (let index = 0; index < words.length; index++) {
  const item = words[index];
  if (item.length >= 6) {                      // Filtrare a las palabras que tengan igual o mas de 6 letras
    newArray.push(item);
  }
}

console.log('Original Array: \n', words);
console.log('new (and inefficient filtered Array):\n', newArray);


// Forma más eficiente usando el método ".filter()", nos toma solo una línea de código
const filteredArray = words.filter(item => item.length >= 6);

console.log('Original Array: \n', words);
console.log('Filtered Array with method ".filter()":\n', filteredArray);


// Ejemplo de un filtrado más complejo con ordenes de compra
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Nicolas2",
    total: 122,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
]

// Guardamos un nuevo array con los Objetos de las ordenes de compra que ya han sido entregadas
const deliveredOrders = orders.filter(item => item.delivered);
console.log('Orders delivered:\n', deliveredOrders);


// Podemos hacer filtrados más estrictos con varias condiciones
const deliveredOrdersTotals = orders.filter(item => item.delivered && item.total >= 100);
console.log('Orders delivered and totals:\n', deliveredOrdersTotals);


// NOTA IMPORTANTE: Cuando vamos a hacer un filtrado trabajando con varios elementos es mejor hacer del lado de nuestra Base de Datos como MySQL o MongoDB


// Usando el método '.filter()' para hacer un buscador
const search = (query) => {                                   // Función que recibe un 'query' de la cadena de caracteres que se quieren buscar
  return orders.filter(item => {
    return item.customerName.includes(query);                 // Usando el métofo '.includes()' verificamos que exista esa cadena de caracteres en el Array
  })
}

console.log(search('Nico'));                                  // Retorna las ordenes de compra que tiene 'Nico' en el apartado de customerName (Case Sensitive)
console.log(search('a'));                                     // Todo los Objetos tienen este valor, asi que retorna todos los Objetos dentro de un Array
console.log(search('asadfasddf232432'));                      // Ningun Objeto tiene este valor, retorna un Array vacio


// Función para buscar por nombre, apellido o edad
const searchAdvanced = (query) => {
  return users.filter(({ name, lastname, age }) => {
    return `${name} ${lastname} ${age}`.includes(query);
  });
};


// Solución al reto de Playgrounds
export function filterByLength(array) {
  return array.filter(item => item.length >= 4)
}


// Personalizando la solución para poder mandar el tamaño de las palabras deseadas
function solution (array, size){
  const  rta = array.filter(item =>{
    return item.length >= size;
  })
  return rta
}