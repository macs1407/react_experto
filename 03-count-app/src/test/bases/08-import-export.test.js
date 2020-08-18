import { getHeroeById, getHeroeByOwner } from "../../bases/08-import-export";
import { heroes } from "../../data/heroes";

describe('Pruebas en funciones de Heroes', () => {
    test('Debe de retornar un heroe ', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        
        console.log(heroe);

        const heroeData = heroes.find(h => h.id == id);
        expect(heroe).toEqual(heroeData);
    });
    
    test('Debe de retornar un undefined, si heroe no existe ', () => {
        const id = 11;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });

    test('Debe retornar un arreglo con los heroes de DC ', () => {
        const owner = "DC";
        const heroes = getHeroeByOwner(owner);

        const keroesData = heroes.filter(h=> h.owner = owner);
        expect(heroes).toEqual(keroesData);
    });

    test('Debe retornar un arreglo con los heroes de MC ', () => {
        const owner = "Marvel";
        const heroes = getHeroeByOwner(owner);

        expect(heroes.length).toBe(2);
    });
});
