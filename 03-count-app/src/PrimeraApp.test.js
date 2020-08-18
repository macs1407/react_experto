import React from 'react';
import '@testing-library/jest-dom';
import PrimeraApp from './PrimeraApp';
import {shallow} from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {
    
    /* test('Probando un componente ', () => {
        const saludo = "hola";
        const {getByText} = render(<PrimeraApp saludoPadre={saludo} />);
        expect(getByText(saludo)).toBeInTheDocument()
    }); */
    
    test('Debe de mostrar <PrimeraApp /> correctamente ', () => {
        const saludo = 'hola';
       const wraper = shallow(<PrimeraApp saludoPadre={saludo} />);
       expect(wraper).toMatchSnapshot();
    });

    test('Debe de mostrar <PrimeraApp /> subtitulo, correctamente ', () => {
       const saludo = 'hola';
       const wraper = shallow(<PrimeraApp saludoPadre={saludo} subtitulo="subtitulo desde pruebas" />);
       const textoParrafo = wraper.find('h2').text();
       expect(textoParrafo).toBe("subtitulo desde pruebas");
    });
    
})
