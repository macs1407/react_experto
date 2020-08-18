import React from 'react';
import '@testing-library/jest-dom';
import {mount} from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { Navbar } from '../../components/ui/NavBar';
import { MemoryRouter, Route } from 'react-router-dom';
import { types } from '../../types/types';

describe('Pruebas del NavBar', () => {
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen:jest.fn(),
        createRef: jest.fn()
    }

    const contexto = {
        dispatch: jest.fn(),
        user:{
            name: "Maikol",
            logged:true
        }
    }
    afterEach(()=>{
        jest.clearAllMocks();
    });

    const wraper = mount(<AuthContext.Provider value={contexto}>
                            <MemoryRouter>
                                <Route history={historyMock}>
                                    <Navbar />
                                </Route>                                
                            </MemoryRouter>
                          </AuthContext.Provider>);

    test('Debe de mostrarse correctamente ', () => {
      expect(wraper).toMatchSnapshot();  
      expect(wraper.find('.text-info').text().trim()).toBe("Maikol");
    });

    test('debe de llamar el logout y el history ', () => {
        wraper.find('button').prop('onClick')();
        expect(contexto.dispatch).toHaveBeenCalledWith({type:types.logout}); 

        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    });
    
    
})
