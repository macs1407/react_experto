import React from 'react';
import '@testing-library/jest-dom';
import {mount} from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en AppRouter', () => {
   const contexto = {
       dispatch: jest.fn(),
       user:{
           logged:false
       }
   }

    test('Debe de mostrar el componente si esta autenticado y guardar en localStorage ', () => {
        const wraper = mount (<AuthContext.Provider value={contexto}>
                                    <AppRouter />
                                </AuthContext.Provider>);
        expect(wraper).toMatchSnapshot();
    });    

    test('Debe de mostrar el componente de marvel si esta autenticado ', () => {
        const contexto = {
            dispatch: jest.fn(),
            user:{
                name:"maikol",
                logged:true
            }
        }
        const wraper = mount (<AuthContext.Provider value={contexto}>
            <AppRouter />
        </AuthContext.Provider>);
        console.log(wraper.html());
        expect(wraper.find('.navbar').exists()).toBe(true);
    })
    
})

