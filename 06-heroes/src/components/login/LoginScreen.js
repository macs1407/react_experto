import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {
    const {dispatch} = useContext(AuthContext);

    const lastPath = localStorage.getItem('lastPath') || '/';

    const handleClick = ()=>{
        //history.push('/');
        // Se hace asi para que cuando se loguee no pueda devolverse al login
        const state = {
            name: 'maikol cucunuba'
        }
        const action = {
            type:types.login,
            payload:state
        }

        dispatch(action);
        history.replace(lastPath);
    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />
            <button className="btn btn-primary" onClick={handleClick}>Login</button>
        </div>
    )
}
