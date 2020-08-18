// un arreglo es una coleccion de informacion que se encuentra dentro de una misma variable
// se sabe que es un arreglo por que tiene []
const arreglo = [];
// no es recomendable utilizar el push por que modifica el objeto principal
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);

console.log(arreglo);

// Aqui se hace una referencia al arreglo por lo que si cambiamos algo en el arregloDos se modificara el arreglo original
let arregloDos = arreglo;
arreglo.push(5);

console.log(arreglo, arregloDos);

// Para evitar esto se puede hacer con el operador express ...
let arregloTres = [...arreglo, 6];

console.log(arreglo, arregloTres);

// Multiplicar cada valor del arreglo, lo que va dentro de map function() se le conoce como callback
let arregloCuatro = arreglo.map(function(x){
  // Toma cada elemento y lo multiplica por 2
  return x * 2;
});

console.log(arregloCuatro);