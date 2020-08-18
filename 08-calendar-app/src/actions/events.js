import { types } from "../types/types";
import { fetchConToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import Swal from "sweetalert2";

// Agregar evento
export const startAddNew = (event)=>{
    return async(dispatch, getState)=>{
        try{
            const {uid, name} = getState().auth;
            // Disparar la accion asincronica de insertar en la base de datos
            const respuesta = await fetchConToken('calendar', event, 'POST');
            // Obtener la respuesta de la base de datos
            const body = await respuesta.json();
            // Si todo salio bien se agrega el evento al store
            if(body.ok){
                event.id = body.eventoGuardado.uid;
                event.user = {
                    _id: uid,
                    name
                }
                dispatch(eventAddNew(event));
            }
        }catch(error){
            console.log(error);
        }
    }
}

const eventAddNew = (event)=>({
    type:types.eventAddNew,
    payload:event
});

export const eventSetActive = (event)=>({
    type:types.eventSetActive,
    payload:event
});

// Limpiar sesion
export const eventClearActiveEvent = ()=>({type:types.eventClearActiveEvent});

export const eventClearAll = ()=>({type:types.eventClearAll});

export const eventEditEvent = (event)=>({
    type:types.eventEditEvent,
    payload:event
});

// Cargar los eventos
export const eventStartLoading = ()=>{
    return async(dispatch)=>{
        try{
            const resp = await fetchConToken('calendar');
            const body = await resp.json();
            const eventos = prepareEvents(body.eventos);
            dispatch(eventLoaded(eventos));
        }catch(error){
            console.log(error);
        }
    }
}

const eventLoaded = (events)=>({
    type:types.eventLoaded,
    payload:events
});

// Actualizar eventos
export const eventStartUpdate = (event)=>{
    return async(dispatch)=>{
        try{
            const resp = await fetchConToken(`calendar/${event.id}`, event, 'PUT');
            const body = await resp.json();
            if(body.ok){
                dispatch(eventUpdate(event));
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        }catch(error){
            console.log(error);
        }
    }
}

const eventUpdate = (event)=>({
    type:types.eventEditEvent,
    payload:event
});

// Eliminar evento
export const eventStartDelete = ()=>{
    return async(dispatch, getState)=>{
        try{
            const {activeEvent:event} = getState().calendar;
            console.log(event.id);
            const resp = await fetchConToken(`calendar/${event.id}`, {}, 'DELETE');
            const body = await resp.json();
            if(body.ok){
                dispatch(eventDeleteEvent(event));
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        }catch(error){
            console.log(error);
        }
    }
}

export const eventDeleteEvent = ()=>({type:types.eventDeleteEvent});