import { types } from "../types/types";
import { fetchSinToken, fetchConToken } from "../helpers/fetch";
import Swal from 'sweetalert2';
import { eventClearAll } from "./events";

export const startLogin = (email, password)=>{
    // Disparar el dispatch gracias a thunk
    return async(dispatch)=>{
        const resp = await fetchSinToken('auth', {email, password}, 'POST');
        const body = await resp.json();
        // Si todo sale bien
        if(body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            // Hacer el dispatch para el store
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

const login = (user)=>({
    type:types.authLogin,
    payload:user
});

export const startRegister = (email, name, password)=>{
    return async(dispatch)=>{
        const resp = await fetchSinToken('auth/new', {email, name, password}, 'POST');
        const body = await resp.json();
        // Si todo sale bien
        if(body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            // Hacer el dispatch
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        }else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

export const startChecking = ()=>{
    return async(dispatch)=>{
        // Enviar la peticion
        const resp = await fetchConToken('auth/renew');
        // Obtener el json
        const body = await resp.json();
        console.log(body);
        // Si todo sale bien
        if(body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            // Hacer el dispatch
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        }else {
            // Disparar accion si el token es invalido
            dispatch(checkingFinish());
        }
    }
}

const checkingFinish = ()=>({
    type:types.authCheckingFinish
});

const logout = ()=>({
    type:types.authLogout
});

export const startLogout = ()=>{
    return(dispatch)=>{
        // remover el token
        localStorage.removeItem('token');
        dispatch(eventClearAll());
        dispatch(logout());        
    }
}