// Forma "normal" (pero muy "verbose" y poco eficiente de iterar) dentro de un Array
const letters = ['a','b','c'];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log(`Iterando usando un 'for' normal: ${element}`);
}


// Forma más eficiente de hacer lo mismo de arriba usando método ".forEach()"
letters.forEach(item => console.log('Iterando usando .forEach()', item))                // Forma de hacer "console.log" mandando 1 o mas "Objetos" como el "item"
