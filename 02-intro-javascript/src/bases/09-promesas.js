import {getHeroeById, getHeroeByOwner} from './bases/08-import-export';
import { heroes } from './data/heroes';
// Promesas, son tareas por defecto tareas asincronicas
const promesa = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    const heroe = getHeroeById(5);
    // Cuando se pasa un parametro al resolve lo va a recubir el then
    resolve(heroe);
  },2000)
});

// Para ejecutar un promesa se hace con then
promesa.then((heroe)=>{
  console.log('Then de la promesa, recibe heroe: ', heroe);
})
.catch(err=>{
  console.warn(err);
});

const getHeroeByIdAsync = (id)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const heroe = getHeroeById(id);
      // Cuando se pasa un parametro al resolve lo va a recubir el then
      if(heroe !== undefined){
        resolve(heroe);
      } else {
        reject("No se encontro el heroe");
      }      
    },2000)
  });
}

getHeroeByIdAsync(14).then(
  heroe=>console.log('Heroe', heroe)
).catch(
  error=>{console.log(error)}
);