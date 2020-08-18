import React from 'react';
import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas de helpers', () => {
    test('Debe de traer 10 elementos ', async() => {
        const elementos = await getGifs("goku");
        expect(elementos.length).toBe(10);
    });
    
})
