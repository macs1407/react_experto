import React from 'react';
import '@testing-library/jest-dom';
import { RealExample } from "../../../components/04-useRef/RealExample";
import {shallow} from 'enzyme';

describe('Pruebas con RealExample', () => {
    const wraper = shallow(<RealExample />);

    test('Debe de levantar RealExample ', () => {
        
        expect(wraper).toMatchSnapshot();
    });

    test('Debe de mostrar MultipleCustomHooks ', () => {
        // simular el click
        wraper.find('button').simulate('click');
        expect(wraper.find('MultipleCustomHooks').exists()).toBe(true);
    });
})
