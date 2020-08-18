import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GridItem from '../../components/GridItem';

describe('Pruebas de la aplicacion <GridItem />', () => {

    const title = "Un titulo";
    const url = "htttp://www.imagen.com/logo.png";

    const wraper = shallow(<GridItem 
        title={title}
        url={url}
      />);
 
    test('Prueba para veriricar que el componente suba bien ', () => {       
    
        expect(wraper).toMatchSnapshot();
    });

    test('Debe tener un titulo ', () => {       
        const titulo = wraper.find('p');
        expect(titulo.text().trim()).toBe(title);
    });


    test('Debe tener la imagen igual al url ', () => {       
        const imagen = wraper.find('img');
        expect(imagen.prop('src')).toBe(url);
        expect(imagen.prop('alt')).toBe(title);
    });
    
})
