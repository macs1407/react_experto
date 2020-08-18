import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {AboutScreen} from './AboutScreen';
import {LoginScreen} from './LoginScreen';
import {HomeScreen} from './HomeScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    // Encargado de manejar las rutas
    return (
        <Router>
            <div>
                <NavBar />
                {/* Dependiendo de la condicion manda a una pagina */}
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={HomeScreen} />
                        <Route exact path="/about" component={AboutScreen} />
                        <Route exact path="/login" component={LoginScreen} /> 
                        {/* Si no se encuentra la ruta en el switch se manda a home */}
                        <Redirect to="/" />                    
                    </Switch>
                </div>                
            </div>
        </Router>
    )
}
