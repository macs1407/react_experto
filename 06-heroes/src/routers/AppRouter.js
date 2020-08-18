import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <Router>
        <div>
          <Switch>
            <PublicRoute 
              isAuthenticate={user.logged} 
              exact 
              path="/login" 
              component={LoginScreen} />
            <PrivateRoute 
              isAuthenticate={user.logged} 
              path="/" 
              component={DashboardRoutes} 
            />
          </Switch>
        </div>
      </Router>
    )
}
