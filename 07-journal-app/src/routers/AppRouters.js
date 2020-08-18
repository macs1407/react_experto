import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

import {firebase} from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouters = () => {

    const dispatch = useDispatch();

    const [cheking, setCheking] = useState(true);

    const [isLogin, setIslogin] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async(user)=>{
            // Si el objeto user existe ? evalua el uid
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIslogin(true);
                // Cargar las notas
                dispatch(startLoadingNotes(user.uid));
            } else {
                setIslogin(false);
            }
            // En el momento en que se obtenga una respuesta del login cheking va 
            // a cambiar a false y no mostrar cargando...
            setCheking(false);

            
        })
    }, [dispatch, setCheking]);

    // Simular la carga
    if(cheking){
        return (
            <h1>Cargando...</h1>
        )
    }

    return (
       <Router>
           <div>
                <Switch>
                    <PublicRoute path="/auth" isAuthenticate={isLogin} component={AuthRouter}/>
                    <PrivateRoute exact path="/" isAuthenticate={isLogin} component={JournalScreen}/>
                    <Redirect to='/auth/login' />
                </Switch>              
           </div>
       </Router>
    )
}
