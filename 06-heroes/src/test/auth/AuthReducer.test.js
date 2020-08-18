import React, { useReducer } from 'react';
import '@testing-library/jest-dom';
import { AuthReducer } from '../../auth/AuthReducer';
import { types } from '../../types/types';

describe('Prubas en autReducer', () => {
    test('Debe de retornar el estado por defecto ', () => {
        const state = AuthReducer({logged:false}, {});
        expect(state).toEqual({logged:false});
    });
    
    test('Debe de autenticar y poner el nombe del usuario ', () => {
        const action = {
            type:types.login,
            payload:{
                name: "maikol"
            }
        }
        const state = AuthReducer({logged:false}, action);
        expect(state).toEqual({logged:true, name: "maikol"});
    });

    test('Debe de borrar el name del usuario y logged en false ', () => {
        const action = {
            type:types.logout
        }
        const state = AuthReducer({logged:true, name: "maikol"}, action);
        
        console.log(state);
        expect(state).toEqual({logged:false});
    });
})
