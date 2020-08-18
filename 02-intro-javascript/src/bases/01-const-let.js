const apellido = "maikol"
const nombre = "maikol"

let edad = 30;
edad = 31;

console.log(apellido, nombre, edad);

if (true){
  // Alcance dentro del if
  let edad = 20;
  const apellido ="Cucunuba"
  console.log(edad, apellido);
}

console.log(edad);