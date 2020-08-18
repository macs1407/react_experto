import {getSaludo} from '../../bases/02-template-string';

describe('Pruebas en 02-template-string.js', ()=>{
    test('Prueba en el metodo getSaludo ', () => {
      const nombre = "maikol";
      const saludo = getSaludo(nombre);  
      console.log(saludo);
      expect(saludo).toBe("hola "+nombre);
    });    

    test('Prueba en el metodo getSaludo sin arumento', () => {
        const saludo = getSaludo();  
        console.log(saludo);
        expect(saludo).toBe("hola matias");
      }); 
})