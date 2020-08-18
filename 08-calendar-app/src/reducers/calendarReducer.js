import { types } from '../types/types';
const initialState = {
    events:[],
    activeEvent:null
}

export const calendarReducer = (state = initialState, action)=>{
    console.log(action.type);
    switch(action.type){
        case types.eventSetActive:
            return {
                ...state,
                activeEvent:action.payload
            }
        case types.eventAddNew:
            return {
                ...state,
                // ...state.events guardar los eventos anteriores y enviar el nuevo action.payload
                events:[
                    ...state.events,
                    action.payload
                ]
            }
        case types.eventClearActiveEvent:
            return {
                ...state,
                activeEvent:null
            }
        case types.eventEditEvent: {
            return {
                ...state,
                events: state.events.map(event => (event.id === action.payload.id)?action.payload : event)
            }
        }
        case types.eventDeleteEvent:
            return {
                ...state,
                // Devolver todos los eventos menos el que este activo
                events: state.events.filter(event => event.id !== state.activeEvent.id),
                activeEvent:null
            }
        case types.eventLoaded:{
            return {
                ...state,
                events: [...action.payload]
            }
        }
        case types.eventClearAll:
            return {
               ...initialState
            }
        default:
            return state;
    }
}