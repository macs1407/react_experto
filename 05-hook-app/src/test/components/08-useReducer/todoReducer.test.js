import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Probando todoReducer', () => {
    
    test('Debe de retornar el estado por defecto ', () => {
        const state = todoReducer(demoTodos,{});
        expect(state).toEqual(demoTodos); 
    }); 
     
    test('Debe de agregar un todo ', () => {
        const todoNuevo = {
            id:3,
            descripcion:'Aprende responsive',
            done:false
        }
        const action ={
            type: 'add',
            payload: todoNuevo
        }
        const state = todoReducer(demoTodos,action);
        expect(state).toEqual([...demoTodos, todoNuevo]); 
     }); 

     test('Debe de eliminar un todo ', () => {
        const action ={
            type: 'delete',
            payload: 3
        }
        const state = todoReducer(demoTodos,action);
        expect(state).toEqual(demoTodos); 
     }); 

     test('Debe de marcar un todo ', () => {
        const action ={
            type: 'toogle',
            payload: 2
        }
        const state = todoReducer(demoTodos,action);
        console.log(state);
        expect(state[1].done).toBe(true); 
     });
})

