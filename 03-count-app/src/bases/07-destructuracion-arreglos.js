// Destructuracion de arreglos
const personajes = ['goku', 'vegeta', 'trunks'];

// Para destrutura un arreglo se hace con []
// con las comas estamos ignorando elementos
const [,,p3] = personajes; 


export const retornaArreglo = ()=>{
  return ['a',123];
}


// Tarea
const useState = (valor)=>{
  return [valor, ()=>{console.log("Hola mundo")}];
}