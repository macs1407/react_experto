import { types } from "../types/types";
/*
{
    notes: [],
    active:null,
    active: {
        id:'dddggg',
        title:'',
        body:'',
        imageUrl:'',
        date:15245454
    }
}
*/
const initialState = {
    notes:[],
    active:null
}
export const notesReducer = (state=initialState, action)=>{
    switch(action.type){
        // AL HACER UN RETURN SIEMPRE SE TIENE QUE PASAR LA COPIA DEL STATE ACTUAL CON ...STATE
        case types.notesActive:
            return {
                ...state,
                active:{
                    ...action.payload
                }
            }
        // Agregar la nota alprincipio
        case  types.notesAddNew:
            return {
                ...state,
                notes: [ action.payload, ...state.notes ]
            }
        case types.notesLoad:
            return {
                ...state,
                notes:[...action.payload]
            }
        case types.notesUpdate:
            return{
                ...state,
                notes: state.notes.map(note => note.id === action.payload.id ? action.payload.note : note)
            }
        case types.notesDelete:
            return {
                ...state,
                active:null,
                // Seleccionar todas menos la que se envia por ID
                notes: state.notes.filter(note=> note.id !== action.payload)
            }
        case types.notesLogoutCleaning:
            return {
                ...state, 
                active:null,
                notes:[]
            }
        default:
            return state;
    }
}