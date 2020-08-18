import { getHeroeByIdAsync } from "../../bases/09-promesas";
import { heroes } from "../../data/heroes";

describe('Pruebas con promesas ', () => {
    test('Debe de retornar un heroe async ', (done) => {
       const id = 1;
       
       getHeroeByIdAsync(id).then(heroe=>{
           expect(heroe).toBe(heroes[0]);
            // con done() se le indica que ya se acabaron las pruebas por que es asincronico
            done();
       });
    });    

    test('Debe de obtenerun error async, si el heroe no existe ', (done) => {
        const id = 10;
        
        getHeroeByIdAsync(id).catch(error=>{
            expect(error).toBe("No se encontro el heroe");
             // con done() se le indica que ya se acabaron las pruebas por que es asincronico
             done();
        });
     }); 
})
