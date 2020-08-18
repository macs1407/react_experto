import { getImagen } from "../../bases/11-async-await";

describe('Pruebas con async / await', () => {
    test('Debe de retornar una url con una imagen ', async() => {
        const url = await getImagen();
        
        expect(url.includes('https://')).toBe(true);
    });    
})
