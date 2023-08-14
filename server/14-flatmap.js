// El método '.flatmap()' primero hace un 'map' y luego le aplica el 'flat'

// Lo podemos usar para aplanar datos dentro de un Array de Objects
const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
  { userId: 2, username: "Mike", attributes: ["Lovely"]},
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
]


// Podemos obtener el resultado de los 'attibutes' de cada Object y aplanarlos usando su método respectivo
const usingTwoMethods = users.map(user => user.attributes).flat()           // Hacemos el map y luego lo aplanamos
console.log('Using ".map()" y ".flat()": ', usingTwoMethods);


// Ahora lo hacemos con solo el método '.flatmap()', este método aplanada automaticamente los niveles de Array a un solo nivel (no acepta parametros de nivel)
const flatMapArray = users.flatMap(user => user.attributes);
console.log('Using ".flatmap()" method:', flatMapArray);


// Reto de usar el método '.flatmap()' para extraer las 'startDate' de un Object con un Array de Objects anidado, el reto es conseguir un Array con solo las 'startDate' de todos los Object
const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

// Tenemos que sacar los 'values' del Object 'calendars' usando el método Object.values, luego le aplicamos el 'flatmap()' que retorna un Item transformado con un méotodo 'map()' con las fechas que queremos
const startDateArray = Object.values(calendars).flatMap(item => {                       // 'Object.values(calendars)' nos devuelve 2 Arrays dentro de un Array principal y flatmap aplana el Array en 1 nivel
  return item.map(date => date.startDate);                                              // Itera por cada Objeto y retornamos el valor del 'startDate' completando nuestro Array deseado
});
console.log('Array with all StartDates:', startDateArray);



// Otra forma de soluciona el reto sin usar '.flatmap'
const rtaReto = Object.values(calendars).flat().map(item => item.startDate);
console.log(rtaReto);


// Solución al reto de Playgrounds
export function countWords(array) {
  return array.flatMap(sentence => sentence.split(' ')).length
}