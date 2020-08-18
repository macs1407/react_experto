import { types } from "../types/types";
import {firebase, googleAuthProvider} from '../firebase/firebase-config';
import { startLoading,finishLoading } from "./ui";
import Swal from 'sweetalert2';
import { noteLogout } from "./notes";

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});
// EL DISPTACH SIEMPRE SE ENCARGA DE ENVIAR LAS ACCIONES A LOS REDUCERS
// Crear peticion asincronica
export const startLoginEmailPassword = (email, password)=>{
    return (dispatch)=>{
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({user})=>{
            
            setTimeout(()=>{
                dispatch(login(user.uid, user.displayName));
            },5000);            
            dispatch(finishLoading());
        }).catch(error=>{
            console.log(error);
            dispatch(finishLoading());
            Swal.fire('Error', error.message, 'error');
        });
    }
}
// Login de google 018000422222
export const startGoogleLogin = ()=>{
    return (dispatch)=>{
        firebase.auth().signInWithPopup(googleAuthProvider)
                .then(({user})=>{
                    dispatch(login(user.uid, user.displayName));
                });
    }
} 

export const startRegisterWithEmailPassword =(email, password, name)=>{
    return(dispatch)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async ({user})=>{
            await user.updateProfile({displayName:name});
            dispatch(login(user.uid, user.displayName));
        }).catch(error=>{
            console.log(error);
            Swal.fire('Error', error.message, 'error');
        })
    }
}

export const startLogout = ()=>{
    return async(dispatch)=>{
        await firebase.auth().signOut();
        dispatch(logout());
        // El reducer sabe que hacer aqui por que todo esta centrado en un state
        dispatch(noteLogout());
    }
}

export const logout = ()=>({
    type:types.logout
});