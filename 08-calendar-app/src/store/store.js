import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
 // El applyMiddleware sirve para hacer peticion asincronicas
export const store = createStore(rootReducer,
                                composeEnhancers(applyMiddleware( thunk ))
                                );