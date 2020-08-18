import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import CounterApp from './CounterApp';

describe("Pruebas del componente <CounterApp />", ()=>{
    let wraper = shallow(<CounterApp />);

    // Se ejecuta antes de cada test
    beforeEach(()=>{
        wraper = shallow(<CounterApp />);
    });

    test('Comprobar que el componente se renderice de forma correcta ', () => {
        const numero = 30;
        const wraper = shallow(<CounterApp numero={numero} />);
        expect(wraper).toMatchSnapshot();
    });
    
    test('Debe de mostrar el valor por defecto 100 ', () => {
        
        const texto = wraper.find("h3").text();
        console.log(texto);
        expect(texto).toBe("5");
    });

    test('Debe de incrementar el valor mas uno ', () => {
        // Buscar el primer boton de incrementar
        wraper.find('button').at(0).simulate("click");
        const texto = wraper.find("h3").text();
        expect(texto).toBe("6");
    });

    test('Debe de dejar el valor como esta inicialmente ', () => {
        wraper.find('button').at(0).simulate("click");
        wraper.find('button').at(0).simulate("click");
        let texto = wraper.find("h3").text();
        console.log(texto);
        // Buscar el primer boton de dejar por defecto
        wraper.find('button').at(1).simulate("click");
        texto = wraper.find("h3").text();
        expect(texto).toBe("5");
    });

    test('Debe de decrementar el valor de uno ', () => {
        // Buscar el primer boton de decrementar
        wraper.find('button').at(2).simulate("click");
        const texto = wraper.find("h3").text();
        expect(texto).toBe("4");
    });
});