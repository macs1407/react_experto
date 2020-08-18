import React from 'react'
import { LoginScreen } from '../components/auht/LoginScreen'
import { RegisterScreen } from '../components/auht/RegisterScreen';

import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route exact path="/auth/login" component={LoginScreen}/>
                    <Route exact path="/auth/register" component={RegisterScreen}/>
                    {/* Si no es niniguna de esas rutas redirecciona a /auth/login */}
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </div>
    )
}
