import {renderHook, act} from '@testing-library/react-hooks';
import {useFetch} from '../../hooks/useFetch';

describe('Pruebas para el hook useFetch', () => {
    test('Debe de traer la informacion por defecto ', () => {
        const {result} = renderHook(()=>useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        const {data, loading, error} = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });    

    test('Debe de traer la informacion ', async() => {
        const {result, waitForNextUpdate} = renderHook(()=>useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        await waitForNextUpdate();
        const {data, loading} = result.current;
        
        expect(data.length).toBe(1);
        expect(loading).toBe(false);
    });
})
