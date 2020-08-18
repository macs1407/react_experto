import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { authReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk';
import { uiReducer } from '../reducers/uiReducer';
import { notesReducer } from '../reducers/notesReducer';

// Se hace con el objetivo de poner mandar mas de un reducer a createStore
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer
});


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
 // El applyMiddleware sirve para hacer peticion asincronicas
export const store = createStore(reducers,
                                composeEnhancers(applyMiddleware( thunk ))
                                );