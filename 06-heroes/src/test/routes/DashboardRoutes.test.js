import React from 'react';
import '@testing-library/jest-dom';
import {mount} from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en DashboardRoutes', () => {
    const contexto = {
        dispatch: jest.fn(),
        user:{
            name: "Maikol",
            logged:true
        }
    }

    test('Debe de mostrarse correctamente ', () => {
        const wraper = mount (<AuthContext.Provider value={contexto}>
                                <MemoryRouter>
                                    <DashboardRoutes />
                                </MemoryRouter>
                            </AuthContext.Provider>);
        expect(wraper).toMatchSnapshot();
    });
      

   
    
})

