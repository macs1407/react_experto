import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';
import validator from 'validator';
import { removeError } from '../../actions/ui';
import Swal from 'sweetalert2';

export const LoginScreen = () => {

     // Sacar el state de redux, sacar solo el UI
     const state = useSelector(state=>state.ui);

     const {loading} = state;

    // Para hacer un dispatch redux ya trae uno, que nos siorve para llevar acabo las acciones
    const dispatch = useDispatch();

    const [values, handleInputChange] = useForm({
        email:'',
        password: ''
    });

    const {email, password} = values;

    const handleLogin = (e)=>{
        e.preventDefault();
        // El dispatch llama a las actions y las actions llaman a los reducer
        if(ifFormValid()){
            dispatch(startLoginEmailPassword(email, password));
        }   
    }

    const handleLoginGoogle = ()=>{
        dispatch(startGoogleLogin());
    }

    const ifFormValid = ()=>{
        if(!validator.isEmail(email)){
            Swal.fire('Error', 'El email es obligatorio', 'error');
            return false;
        }else if(password.trim().length < 1){
            Swal.fire('Error', 'La contraseña es obligatoria', 'error');
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLogin} className="animate__animated animate__fadeIn">
                <input 
                    type="text"
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    value={email}
                    onChange={handleInputChange}
                />
                <input 
                    type="password"
                    placeholder="password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <button 
                    type="submit" 
                    className="btn btn-primary btn-block"
                    disabled={loading}>Ingresar</button>
                <div className="auth__social-networks">
                    <p>Ingresar con una red social</p>
                    <div className="google-btn" onClick={handleLoginGoogle}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link to="/auth/register" className="link">Crear nueva cuenta</Link>
            </form>
        </>
    )
}
