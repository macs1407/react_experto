import { retornaArreglo } from '../../bases/07-destructuracion-arreglos'

describe('Pruebas en destructuracion', () => {
    test('Debe de retornar un string y un numero ', () => {
        const [letras, numeros] = retornaArreglo();
        expect(letras).toBe("a");
        expect(typeof letras).toBe("string");
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe("number");
    });    
})
