import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Recibe si esta autenticado, el componente y el resto de las propiedades
export const PrivateRoute = ({isAuthenticate, component: Component, ...rest}) => {
    // Guardar la ultima pagina para que cuando vuelvan a logearse ingrese a la 
    // ultima pagina que visito
    localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <Route 
            {...rest} 
            component={(props)=>(
                (isAuthenticate) ? <Component {...props} /> : <Redirect to="/auth/login" />
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticate: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
