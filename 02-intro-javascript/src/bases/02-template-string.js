const apellido = "cucunuba"
const nombre = "maikol"

// Template string, respeta cualquier codigo llave script dentro
let nombreCompleto = `${apellido} 
${nombre}
${1+3}
${getSaludo(nombre)}
`;


console.log(nombreCompleto);

function getSaludo(nombre ){
  return "hola "+nombre;
}