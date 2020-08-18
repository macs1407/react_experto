import {renderHook, act} from '@testing-library/react-hooks';
import {useForm} from '../../hooks/useForm';

describe('Pruebas para el useForm', () => {
    const initialForm = {
        name:'maikol',
        email:'macs1407@gmail.com'
    }

    test('Debe de regresar un formulario por defecto ', () => {
        const {result} = renderHook(()=> useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;
        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('Debe de cambiar el valor de un formulario ', () => {
        const {result} = renderHook(()=> useForm(initialForm));
        const [, handleInputChange] = result.current;
        act(()=>{
            handleInputChange({
                target:{
                    name:'name',
                    value:'matias'
                }
            });
        });
        const [values] = result.current;
        expect(values).toStrictEqual({...initialForm, name:'matias'});
    });

    test('Debe de restablecer el formulario con reset', () => {
        const {result} = renderHook(()=> useForm(initialForm));
        const [, handleInputChange, reset] = result.current;
        act(()=>{
            handleInputChange({
                target:{
                    name:'name',
                    value:'matias'
                }
            });
            reset();
        });
        const [values] = result.current;
        expect(values).toEqual(initialForm);
    });
    
})
