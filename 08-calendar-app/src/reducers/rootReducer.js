import {combineReducers} from 'redux';
import { uiReducer } from './uiReducer';
import { calendarReducer } from './calendarReducer';
import { authReducer } from './authReducer';
// Objeto que tiene todo el estore de los diferentes reducers
export const rootReducer = combineReducers({
    ui:uiReducer,
    calendar: calendarReducer,
    auth: authReducer
});