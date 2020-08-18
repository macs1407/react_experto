import {heroes} from '../data/heroes';

// Retorna una heroe del arreglo
export const getHeroeById = (id)=>{
  // El find barre cada elemento del arreglo
  return heroes.find((heroe)=>heroe.id === id);
}

// console.log(getHeroeById(10));

// Retorna una lista de heroes
export const getHeroeByOwner = (owner)=>{
  // El filter retorna mas de un objeto
  const filtro = heroes.filter((heroe)=>heroe.owner === owner);
  return filtro;
}

// console.log(getHeroeByOwner("DC"));