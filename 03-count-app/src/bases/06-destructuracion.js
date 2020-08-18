// Destructuracion

const persona = {
  nombre: "maikol",
  edad:30,
  clave: "123",
  direccion: {
    ciudad:"bogota",
    dir: "carrera"
  }
}
// Extraer lo que esta dentro de las llaves del objeto persona
const {nombre, edad, direccion:{ciudad,dir}} = persona;

console.log(nombre, ciudad, dir);

// Destructuracion directamente en una funcion si no existe la propiedad se le puede poner una por defecto
const retornaPersona = ({direccion, rango = 'capitan'})=>{
  console.log(direccion);
  console.log(rango);
}

retornaPersona(persona);


const useContext = ({clave, edad})=>{
  return {
    nombreClave: clave,
    anios:edad
  }
}

const {nombreClave, anios} = useContext(persona);
console.log(nombreClave, anios);