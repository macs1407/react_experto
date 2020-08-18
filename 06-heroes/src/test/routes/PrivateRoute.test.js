import React from 'react';
import '@testing-library/jest-dom';
import {mount} from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en privateRoute', () => {
    const props = {
        location:{
            pathname: '/marvel'
        }
    } 

    Storage.prototype.setItem = jest.fn();

    test('Debe de mostrar el componente si esta autenticado y guardar en localStorage ', () => {
        const wraper = mount (<MemoryRouter>
                                    <PrivateRoute 
                                        isAuthenticate={true} 
                                        component={()=><span>Listo</span>} 
                                        {...props}
                                    />
                                </MemoryRouter>);
        console.log(wraper.html());
        expect(wraper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });    

    test('Debe de bloquear el componente si no esta logueado ', () => {
        const wraper = mount (<MemoryRouter>
                                    <PrivateRoute 
                                        isAuthenticate={false} 
                                        component={()=><span>Listo</span>} 
                                        {...props}
                                    />
                                </MemoryRouter>);
        console.log(wraper.html());
        expect(wraper.find('span').exists()).toBe(false);
    }); 
})

