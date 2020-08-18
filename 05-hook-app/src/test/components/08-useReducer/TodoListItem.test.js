import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Probando TodoListItem', () => {

    const handleDelete = jest.fn();
    const handleToogle = jest.fn();

    const wraper = shallow(<TodoListItem 
        todo={demoTodos[0]} 
        index={0} 
        handleDelete={handleDelete}
        handleToogle={handleToogle}/>);
    
    test('Debe de mostrarse correctamente ', () => {
        
        expect(wraper).toMatchSnapshot(); 
    }); 

    test('Debe de llamar al handleDelete ', () => {
        wraper.find('button').simulate('click')
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id) 
    });

    test('Debe de llamar al handleToogle ', () => {
        wraper.find('p').simulate('click')
        expect(handleToogle).toHaveBeenCalledWith(demoTodos[0].id) 
    });
     
    test('Debe de mostrar el texto correctamente ', () => {
        const parrafo = wraper.find('p').text();
        console.log(parrafo)
        expect(parrafo.trim()).toBe('1. '+demoTodos[0].desc); 
    });
    
})

