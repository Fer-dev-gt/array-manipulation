// El método '.sort()' es MUTABLE porque cambia el orden del Array Original
// Tratamos de ordenar los meses pero al tratarse de String ordena los elementos por su valor en la tabla ASCII no por su valor numerico de mes
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();                                                
console.log('Meses ordenados alfabeticamente: ', months);


// Ordenando los numeros, por defecto '.sort()' los ordena segun la tabla ASCII
const numbers = [1, 30, 4, 21, 100000];                                   // Para que orderne numericamente es necesario mandar un Array Function al parametro de '.sort()'
numbers.sort((a, b) => a - b);                                            // Para ordenar ascendentemente es necesario mandar una funcion como parametro, en donde restamos el primer numero con el segundo
console.log('Números ordenamos ascendentemente: ' ,numbers);

numbers.sort((a, b) => b - a);                                            // si se quiere una Array en forma descendente se invierte el orden del numero a y b
console.log('Números ordenamos descendentemente: ' ,numbers);


// Para orderna palabras con caracteres especiales podemos usar 'sort()' para versiones modernas de Node, para versiones antiguas hay que usar tambien el método '.localeCompare()'
const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];
words.sort();
console.log('Usando ".sort()":', words);

words.sort((a,b) => a.localeCompare(b));
console.log('Usando ".sort() y localeCompare()" para versiones más antiguas:', words);


// Forma de ordenar Objects por medio de una de sus propiedades con valor númerico
const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

orders.sort((a, b) => b.total - a.total);                                 // Para ordenar Objects solo basta con mandar un Arrow Function y restar las propiedades de los Objects para comparar cual es mayor o menor
console.log('Ordenando Objects por sus propiedades: ' ,orders);



// Forma de ordenar el Array de Object segun la fecha, forma ascendente
const ordersDate = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
    date: new Date (2021, 3, 8, 4),
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
    date: new Date (2021, 9, 12, 3),
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
    date: new Date (2021, 8, 2, 2),
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
    date: new Date(2021, 1, 1, 9, 30),
  }
];

ordersDate.sort((a,b) => a.date - b.date);
console.log('Ordenando por fechas de forma ascendente: ', ordersDate);