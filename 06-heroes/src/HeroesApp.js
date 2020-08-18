import React, { useReducer, useEffect } from 'react'
import { AppRouter } from './routers/AppRouter'
import { AuthContext } from './auth/AuthContext';
import { AuthReducer } from './auth/AuthReducer';

const init = ()=>{
    return JSON.parse(localStorage.getItem('user')) || {logged:false};
}

export const HeroesApp = () => {
    const [user, dispatch] = useReducer(AuthReducer, {}, init);

    // Actualizar el local storage cada vez que cambie el user
    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(user));
    },[user]);

    return (
        <AuthContext.Provider value={{user, dispatch}}>
            <AppRouter/>
        </AuthContext.Provider>
    )
}
