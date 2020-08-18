import React from 'react';
import { AppRouter } from './router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const CalendarApp = () => {
    return (
        /* Proveer toda la informacion en el arbo atravez del provider y utilizamos nuestro STORE que es donde 
        esta todos los reducer*/
        <Provider store={store}>            
            <AppRouter />
        </Provider>
    )
}
