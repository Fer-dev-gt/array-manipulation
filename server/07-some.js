// El método ".some()" SIEMPRE devuelve true o false
const numbers = [1, 2, 3, 4];

// Forma 'ineficiente' para emular el método '.some()' usando un ciclo 'for' sencillo
let contains = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {                            // Usando % para saber si es número par
    contains = true;
    break;
  }
}
console.log(contains);


// Usando el método '.some()' para reducir toda esa lógica en una sola línea
const containsSome = numbers.some(item => item % 2 === 0);
console.log('Usando método ".some()": ' ,containsSome);



// Usando el métodos '.some()' para trabajar con un Array de Objetos que ordenes de compra para ver cuales han sido ya entregadas
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

const isSomeOrdersDelivered = orders.some(item => item.delivered);
console.log("Are there some orders delivered?", isSomeOrdersDelivered);



// Ejemplo más complejo usando la librería "date-fns" para trabajar fechas
// El objetivo de este ejercicio es ver si podemos agendar una nueva cita si dicha cita no se traslapa (que tenga el mismo horario) con otra

const dates = [
  // Formato de fecha: año, mes, dia, hora, minuto
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

// Importamos de la librería "date-fns" el método "areIntervarlsOverlapping"
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

// Esta cita no se podría agendar porque ya tengo una agendada a esa hora
const newAppointment = {
  startDate: new Date(2021, 1, 1, 19),
  endDate: new Date(2021, 1, 1, 20, 30)
};

// Función que verifica si la fecha se traslapa, si retorna true no podemos agendar esta cita porque tiene traslaspe, si retorna false si se puede agendar
const isOverlap = (newDate) => {                              // Recibimos como argumento la fecha que queremos agendar
  return dates.some(date => {                                 // Iteramos sobre nuestro Array de Objects con Citas ya agendadas, 'date' tomar el valor de cada Object de nuestro Array
    return areIntervalsOverlapping(                           // Este método que importamos recibe 2 parámetros que son Objects, la fecha que esta iterando y la fecha que queremos agendar
      {start: date.startDate, end: date.endDate},             // Mandamos dentro de un Object la hora y fecha de inicio y final del item que esta iterando de nuestro Array de Citas ya registradas
      {start: newDate.startDate, end: newDate.endDate}        // Mandamos dentro de un Object la hora y fecha de inicio y final de la cita que queremos registrar
    )
  })
} 

console.log('Does this date overlap?', isOverlap(newAppointment));



// Forma de obtener el mismo resultado sin usar la libreria 'date-fns' y método 'areIntervalsOverlapping'
const obj1 = {
  startDate: new Date(2021, 1, 1, 10),
  endDate: new Date(2021, 1, 1, 11),
  title: "Cita de trabajo",
}

const obj2 = {
  startDate: new Date(2021, 1, 1, 10),
  endDate: new Date(2021, 1, 1, 13),
  title: "Cita de trabajo",
}

const datesOverlap = (start1, end1, start2, end2) => {
  if (start1 <= end2 && start2 <= end1) return true
  else return false;
}

//check

datesOverlap(obj1.startDate, obj1.endDate, obj2.startDate, obj2.endDate);

// exo

const newAppointment1 = {
  startDate: new Date(2021, 1, 1, 10),
  endDate: new Date(2021, 1, 1, 13),
};

const checkNewAppointmentAgainstDates = (newDates) => {
  return dates.some(item => {
    return datesOverlap(item.startDate, item.endDate, newDates.startDate, newDates.endDate)
  })
}

checkNewAppointmentAgainstDates(newAppointment);
checkNewAppointmentAgainstDates(newAppointment1);


// Solución al reto de Playgrounds
export function checkArray(numbers) {
  return numbers.some(item => item % 2 === 0)
}