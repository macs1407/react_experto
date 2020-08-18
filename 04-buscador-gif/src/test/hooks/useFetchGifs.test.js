import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe de retornar una estado inicial ', async() => {
        const {result, waitForNextUpdate} = renderHook(()=>useFetchGifs('goku'));
        const {current} = result;
        const {data, loading} = current;

        await waitForNextUpdate();
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });    

    test('Debe de retornar una arreglo de imagenes y el loading en false ', async() => {
        // waitForNextUpdate permite saber cuando paso un cambio en el estado del hook
        const {result, waitForNextUpdate} = renderHook(()=>useFetchGifs('goku'));
        await waitForNextUpdate();
        const {current} = result;
        const {data, loading} = current;

        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    });
    
})
