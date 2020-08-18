import {getHeroeById} from './08-import-export';

export const getHeroeByIdAsync = (id)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const heroe = getHeroeById(id);
      // Cuando se pasa un parametro al resolve lo va a recubir el then
      if(heroe !== undefined){
        resolve(heroe);
      } else {
        reject("No se encontro el heroe");
      }      
    },1000)
  });
}