import React from 'react';
import '@testing-library/jest-dom';
import AddCategory from '../../components/AddCategory';
import {shallow} from 'enzyme';

describe('Pruebas en <AddCategory />', () => {
    const setCategorias = jest.fn();
    let wraper = shallow(<AddCategory setCategorias={setCategorias}/>);

    beforeEach(()=>{
        // Limpiar las simulaciones entre cada prueba
        jest.clearAllMocks();
        wraper = shallow(<AddCategory setCategorias={setCategorias}/>);
    });

    test('Debe de mostrarse correctamente ', () => {
        
        expect(wraper).toMatchSnapshot();
    });
    
    test('Debe de cambiar el valor de caja de texto ', () => {
        const input = wraper.find('input');
        const value = "hola mundo";
        // Simular que la caja de texto cambio
        input.simulate('change',{target:{value}});
    });

    test('No debe se enviar la informacion al hacer submit ', () => {
        const form = wraper.find('form');
        // Simular que la caja de texto cambio
        form.simulate('submit',{preventDefault(){}});
        // Indica que la funcion no tuvo que haberse llamado por la validacion del comoponente
        // al enviar el formulario
        expect(setCategorias).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategorias y limpiar la caja de texto ', () => {
        // 1-) Simular el inputChange
        const input = wraper.find('input');
        const value = "hola mundo";
        input.simulate('change',{target:{value}});
        // 2-) Simular el submit
        const form = wraper.find('form');
        form.simulate('submit',{preventDefault(){}});

        // 3-) setCategorias debe ser llamado
        expect(setCategorias).toHaveBeenCalled();
        // Experar que se haya llamado con una funcion
        expect(setCategorias).toHaveBeenCalledWith(expect.any(Function))

        // 4-) El valor del input debe estar vavio
        expect(input.prop('value')).toBe('');
    });
})
