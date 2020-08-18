import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutScreen = () => {
    const {user, setUser} = useContext(UserContext);
    return (
        <div>
            <h1>About</h1>
            <hr />
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
            {/* Cuando se cambia el state del contexto con setUser notificara a todos los elementos que lo
            utilizan y los renderizara de nuevo */}
            <button 
                className="btn btn-warning" 
                onClick={ ()=>setUser() }
            >
                Logout
            </button>
        </div>
    )
}
