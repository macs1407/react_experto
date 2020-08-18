import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Recibe si esta autenticado, el componente y el resto de las propiedades
export const PublicRoute = ({isAuthenticate, component: Component, ...rest}) => {

    return (
        <Route 
            {...rest} 
            component={(props)=>(
                (isAuthenticate) ? (<Redirect to="/" />) : (<Component {...props} />)
            )}
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticate: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
