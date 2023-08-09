// Queremos devolver un Objeto con la información de cuantas veces se repito un número en el siguiente Array
const items = [1, 3, 2, 3, 3, 1, 10];
const items2 = [5, 6, 7, 6, 5, 7, 7, 8];

/* Formto esperado:
{
  1:1,
  3:2,
  2:1
}                   */


// Vamos a recorrer el Objeto vacio que creamos y si no existe un valor del Object[item] lo inicializamos en 1, si ya existe le sumamos 1 y asi vamos contando
const outputObject = items.reduce((object, item) => {
  if(!object[item]){
    object[item] = 1;
  } else {
    object[item] = object[item] + 1;
  }
  return object;                                                        // Retornamos nuestro Object con los datos de los números que conto
}, {});                                                                 // Inicializamos nuestro estado como un Object vacio

console.log('We returned 1 value that is an Object: \n', outputObject);




// Ahora hacemos un ejemplo con un Array de Objects
const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

// Queremos mostrar cuantos jugadores estan en cada nivel, para esto vamos a usar 2 métodos de Arrays, el ".map()" y el ".reduce()", el primero para conseguir el Array de los niveles existentes y el segundo para contar sus incidencias
// Este proceso en donde los datos de salida de un método son los datos de entrada de otro método se conoce como 'pipelines/pipenames'

const levelAppearances = data
  .map(item => item.level)                              // Creamos un Array con los nivel que existen en el Array original (pueden aparecer repetidos)
  .reduce((object, item) => {                           // Contamos las veces que aparece cada nivel en el Array que retorna el método ".map()"
    if(!object[item]) {
      object[item] = 1;
    } else {
      object[item] = object[item] + 1;
    }
    return object;
}, {});

console.log('Number of levels appearances: \n', levelAppearances);



// Ejemplo de contar el número de apariciones por rangos
const numbers = [1,3,2,4,2,6,8,9,2,3,1,6,8,7,4];

const rangeAppearances = numbers.reduce((object, item) => {
  if(item > 0 && item < 6) {
    object["1-5"] += 1;
  } else if(item > 5 && item < 9) {
    object["6-8"] += 1;
  } else if(item > 8 && item <= 10) {
    object["9-10"] += 1;
  }
  return object;
}, { "1-5": 0, "6-8": 0, "9-10": 0 }                      // Inicializamos el valor de retorno como un Object que tiene ya definidos los rangos y le damos como valor inicial a cada uno 0
);

console.log('Number of levels appearances: \n', rangeAppearances);



// Solución al reto de Playgrounds
export function calcSum(numbers) {
  return numbers.reduce((sum, item) => sum + item, 0);
}
