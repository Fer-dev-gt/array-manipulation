// Ejemplo varios donde usamo método mutables que cambian el estado original de nuestros Arrays
// Vamos a simular la compra de productos en donde los agregamos a un nuevo Array y los productos seleccionados son eliminados del Array original
const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

// Hacemos una busqueda del 'id' de la comida que queremos agregar a nuestro carrito
const productIndex = products.findIndex(food => food.id === '🍔');                      // Guardamos el indice del producto que vamos a pasar de un Array a otro
if(productIndex !== -1) {                                                               // Si el indice es -1 significa que no pudo encontrar el producto, en este caso el indice es 1, asi que si hacemos las modificaciones
  // Uso de método mutables de los Arrays 
  myProducts.push(products[productIndex]);                                              // Agregamos el nuevo producto al Array de mis ordenes
  products.splice(productIndex, 1);                                                     // Eliminamos ese producto del Array orignal al usar el método '.splice(index, cantidad de elementos a eliminar, elementos que van a reemplazar)'
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(60));


// Forma de eliminar uno de los productos sin eliminar el Array original usando el método '.filter()'
const myProductsFilter = products.filter(product => product.id != '🍔')
console.log("products", myProductsFilter);



// El reto es hacerle un update a las propiedades de uno de los productos como el 'title' y 'price'
const productsV2 = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

// Object con el id del producto a actualizar y otro Object con los datos para actualizar
const foodUpdate = {
  id: '🥞',
  changes: {
    price: 200,
    description: 'delicioso'
  }
};

// Encontramos el index del producto a modificar
const productIndex2 = productsV2.findIndex(product => product.id === foodUpdate.id);

productsV2[productIndex2] = {                                           // Cambiamos el valor del producto dentro de la lista con la ayuda del indice que encontramos
  ...productsV2[productIndex2],                                         // Para que se actualizen bien los datos hacemos una copia del Objeto a actualizar con un Spread Operator
  ...foodUpdate.changes,                                                // Y usando otro Spread Operator de los 'changes' de la comida hacemos una fusion que actualiza en buen formato los datos
};  
console.log('Updated Object with new property: ', productsV2);
console.log('Array original', productsV2);


// Reto de actualizar un producto sin actualizar el Array original
const updatedArrayFoods = productsV2.map(product => {
  if (product.id === foodUpdate.id) {
    return {
      ...product,
      ...foodUpdate.changes,
    }
  }
  return {...product};
})

console.log('Array actualizado sin afectar al original', updatedArrayFoods);
console.log('Array original', productsV2);