import React from 'react';
import {Link} from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { setError, removeError } from '../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';
import { startRegisterWithEmailPassword } from '../../actions/auth';


export const RegisterScreen = () => {

    const dispatch = useDispatch();

    // Sacar el state de redux, sacar solo el UI
    const state = useSelector(state=>state.ui);

    const {msgError} = state;

    const [values, handleInputChange] = useForm({
        name:'',
        email:'',
        password:'',
        confirm:''
    });

    const {name, email, password, confirm} = values;

    const handleRegister = (e)=>{
        e.preventDefault();
        if(ifFormValid()){
            dispatch(startRegisterWithEmailPassword(email, password, name));
        }
    }
    
    const ifFormValid = ()=>{
        if(name.trim().length === 0){
            // El dispatch llama a las actions y las actions llaman a los reducer
            dispatch(setError('Nombre requerido'));
            return false;
        }else if(!validator.isEmail(email)){
            dispatch(setError('Email no es valido'));
            return false;
        }else if(password !== confirm){
            dispatch(setError('Las contraseñas deben ser iguales'));
            return false;
        }else if(password.length < 5){
            dispatch(setError('Las contraseñas debe tener almenos 5 caracteres'));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Registrar</h3>
            <form onSubmit={handleRegister} className="animate__animated animate__fadeIn">
                {
                    (msgError !== null && msgError !== '') && 
                    ( <div className="auth__alert-error">
                        {msgError}
                    </div>)
                }
               
                <input 
                    type="text"
                    placeholder="nombre"
                    name="name"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={name}
                    />
                <input 
                    type="text"
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={email}
                    />
                <input 
                    type="password"
                    placeholder="contraseña"
                    name="password"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={password}
                    />
                <input 
                    type="password"
                    placeholder="confirmar contraseña"
                    name="confirm"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={confirm}
                    />
                <button type="submit" className="btn btn-primary btn-block mb-5">Registrar</button>
               
                <Link to="/auth/login" className="link mt-5">Ingresar</Link>
            </form>
        </>
    )
}
