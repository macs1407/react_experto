const { getUser, getUsuario } = require("../../bases/05-funciones");

describe('Pruebas en funciones', () => {
    test('debe de retornar un objeto ', () => {
        const usertest = {
            id:22,
            nombre:"matias",
        }

        const user = getUser();

        expect(user).toEqual(usertest);
    });    

    test('Debe de retornar un objeto pasandole un nombre ', () => {
        const usertest = {
            id:'2',
            user:"matias",
        }

        const user = getUsuario('matias');

        expect(usertest).toEqual(user);

    })
    
})
