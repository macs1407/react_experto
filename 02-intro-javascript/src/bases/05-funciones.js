// Funciones en js

const saludar = function(nombre){
  return `Hola ${nombre}`;
}

console.log(saludar("maikol"));

// Funcion de flecha
  // Con los parentesis se esta diciendo que se esta regresando algo de manera implicita

const getUser = () =>({
    id:22,
    nombre:"matias",
});
console.log(getUser());

const getUsuario = (nombre)=>({
  id:'2',
  user:nombre
});

console.log(getUsuario("maikol"));