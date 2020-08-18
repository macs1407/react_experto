import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
    // Para obtener un contexto se hace con useContext(ContextoALLamar)
    const {user} = useContext(UserContext);
    console.log(user);
    return (
        <div>
            <h1>Home</h1>
            <hr />
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </div>
    )
}
