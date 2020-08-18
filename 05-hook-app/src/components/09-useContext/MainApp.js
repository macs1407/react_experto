import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
    const [user, setUser] = useState({})
    return (
        /* Todo lo que este dentro del UserContext lo van a poder ver dentro de AppRouter, en este caso
        AboutScreen, LoginScreen, HomeScreen.
        En pocas palabras el Context se encarga de proveer informacion a lo largo de todos sus componente hijos 
        Para compartir la informacion se hace con value={}
        */
        <UserContext.Provider
            value={{user, setUser}}
        >
            <AppRouter />
        </UserContext.Provider>        
    )
}
