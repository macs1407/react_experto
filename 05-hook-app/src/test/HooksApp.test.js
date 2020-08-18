import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import HooksApp from '../HooksApp';

describe('Pruebas con HooksApp', () => {
    test('Debe de levantar HooksApp ', () => {
        const wraper = shallow(<HooksApp />);
        expect(wraper).toMatchSnapshot();
    });    
})
