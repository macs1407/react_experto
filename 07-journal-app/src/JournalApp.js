import React from 'react'
import { AppRouters } from './routers/AppRouters';
import {Provider} from 'react-redux';
import { store } from './store/store';

export const JournalApp = () => {
    return (
        /* envolver la aplicacion con un proveedor que provea a esta con el store de redux */
        <Provider store={store}>
            <AppRouters />
        </Provider>
    )
}
