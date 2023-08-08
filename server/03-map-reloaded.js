// Tenemos un Array con varios Objetos que representan ordenes de compra, vamos a transformar y extraer un nuevo Array con solo los Datos que nos interesan
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
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
  }
]
console.log('original array:', orders);

// Vamos a extraer el elemento 'total' de los Objetos usando el método '.map()'
const totals = orders.map(item => item.total);
console.log('totals array:', totals);


// Vamos a agregar un nuevo Atributo 'tax' a cada Objeto del Array (NO ES RECOMENDADO, porque afecta al Array original al ser un valor por referencia, es mejor crear una copia con "Spread Operator")
const newAttribue = orders.map(item => {
  item.tax = 0.19;
  return item;
});
console.log('tax array', newAttribue);
console.log('original array:', orders);               // El Array original tambien fue cambiado (Efecto no deseado)


// FORMA DE SOLUCIONAR EL ERROR DE VALORES POR REFERENCIA DE ARRIBA
// Hay que crear un nuevo Objeto usando el "Spread Operator", esta es la mejor forma de trabajar con Objeto y el método '.map()'
const newObjectWithTaxes = orders.map(item => {
  return {                                          // Regresamos un nuevo Objeto que sea una copia del original (Al hacer desestructuración con un Spread Operator) y le agregamos un nuevo atributo
    ...item,                                        // Hacemos la copia del Objeto original (Sin hacer referencia en memoria) al desestructurar y pasar todos uss atributos
    tax: .19                                        // Le agregamos un nuevo atributo (No es necesario agregar 'item.tax' porque ya esta desestructurado)
  }
});

console.log('new array copy with new attribute (with "Spread Operator"):', newObjectWithTaxes);
console.log('original array:', orders);


// Forma mas corta de crear un nuevo Objeto usando el "Spread Operator"
const withTax = orders.map(item => ({ ...item, tax: .19 }))

s

// Solucion al reto de Playgrounds
export function addNewAttr(array) {
  return array.map(item => {
    return {
      ...item,
      taxes: Math.trunc(item.price * 0.19)
    };
  });
};


// Solución más optimizada del mismo reto
export function addNewAttr(array) {
  return array.map(item => ({ 
    ...item,
    'taxes': Math.trunc(item.price * .19) 
  }));
}

