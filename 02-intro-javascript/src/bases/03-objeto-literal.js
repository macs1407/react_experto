// Cuando hay {} se dice que es un objeto literal y por defecto tiene prototype t trabaja con llave:valor
const persona = {
  nombre : 'tony',
  apellidos: 'start',
  edad:50,
  direccion: {
    ciudad:'bogota',
    pais:'colombia',
  },
}

console.log(persona);

// Aqui no se hace una copia del objeto si no de la referencia en memoria, entonces si se hace cambio sobre 
// personaDos realmente estamos haciendo cambio sobre persona
const personaDos = persona;

console.log(personaDos);

personaDos.nombre = "TONY";

console.log(persona);

// Para hacer una copia se hace con {} = nuevo objeto y los ...
const personaTres = {...persona}

personaTres.nombre = "Maikol";
console.log(personaTres);
console.log(persona);