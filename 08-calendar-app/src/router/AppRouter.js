import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { useDispatch, useSelector } from "react-redux";
import { startChecking } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    const dispatch = useDispatch();

    const {checking, uid} = useSelector(state => state.auth);

    // Esto nos sirve para saber si esta logueado o no y si tien un token valido
    // haciendo esto automaticamente logueara en la aplicacion
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);
    
    // Si esta cargando
    if(checking){
        return <h5>cargando......</h5>
    }

    // No se debe mostrar nada hasta que el ckecking este en false
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticate={!!uid} exact path="/login" component={LoginScreen} />
                    <PrivateRoute isAuthenticate={!!uid} exact path="/" component={CalendarScreen} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
