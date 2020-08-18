// Destructuracion de arreglos
const personajes = ['goku', 'vegeta', 'trunks'];

// Para destrutura un arreglo se hace con []
// con las comas estamos ignorando elementos
const [,,p3] = personajes; 

console.log(p3);

const retornaArreglo = ()=>{
  return ['a',123];
}

const [,numero] = retornaArreglo();
console.log('numero', numero);

// Tarea
const useState = (valor)=>{
  return [valor, ()=>{console.log("Hola mundo")}];
}

const [nombre, setNombre] = useState("goku");

console.log(nombre);
setNombre();