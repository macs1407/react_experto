describe('Pruebas en el archivo demos.tes.js', ()=>{
    test('Deben de ser iguales los strings', () => {
        // Inicializacion    
        const mensaje = 'hola mundo';
        // Estimulos
        const mensaje2 = "hola mundo";
        // Observar el comportamiento
        // Se esperaria que fueran iguales
        expect(mensaje).toBe(mensaje2);
    }); 
});

