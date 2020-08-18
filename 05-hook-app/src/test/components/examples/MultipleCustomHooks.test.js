import React from 'react';
import '@testing-library/jest-dom';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import {shallow} from 'enzyme';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas con MultipleCustomHooks', () => {

    useCounter.mockReturnValue({
        counter:10,
        increment:()=>{}
    });

    test('Debe de levantar MultipleCustomHooks ', () => {
        useFetch.mockReturnValue({
            data:null,
            loading:true,
            error:null
        });
        const wraper = shallow(<MultipleCustomHooks />);
        expect(wraper).toMatchSnapshot();
    });
    
    test('Debe de mostrar la informacion ', () => {
        useFetch.mockReturnValue({
            data:[{
                author:'maikol',
                quote:'hola'
            }],
            loading:false,
            error:null
        });
        const wraper = shallow(<MultipleCustomHooks />);
        expect(wraper.find('.alert').exists()).toBe(false);
        expect(wraper.find('.mn-0').text().trim()).toBe('hola');
    });
})
