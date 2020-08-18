import { db } from "../firebase/firebase-config";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import Swal from 'sweetalert2';
import { fileUpload } from "../helpers/fileUpload";

export const startNewNote = ()=>{
    // getState: obtener el state
    // dispatch: disparar las acciones
    return async(dispatch, getState)=>{
        const state = getState();
        const {auth:{uid}} = state;
        const newNote = {
            title:'',
            body:'',
            date: new Date().getTime()
        }
        // Se hace un await por que el add devuelve una promesa
        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
        dispatch(activeNote(doc.id, newNote));
        dispatch(addNewNote( doc.id, newNote ) );
    }
}

export const activeNote = (id, note)=>({
    type:types.notesActive,
    payload:{
        id,
        ...note
    }
});

export const addNewNote = ( id, note ) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
})

export const startLoadingNotes = ( uid ) => {
    return async( dispatch ) => {
        
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) );

    }
}

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
});

export const startSaveNote = (note)=>{
    return async(dispatch, getState)=>{
        const {uid} = getState().auth;
        if(!note.url){
            delete note.url;
        }
        const noteFireStore = {...note};
        delete noteFireStore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteFireStore);
        dispatch(refresNote(note.id, note));
        Swal.fire('Actualizado', 'Se actualizo la nota', 'success');
    }
}

// Refrescar nota
export const refresNote = (id, note)=>({
    type:types.notesUpdate,
    payload: {
        id, 
        note: {
            id,
            ...note
        }
    }
});

// Subir imagen
export const startUploading = (file)=>{
    return async(dispatch, getState)=>{
        const {active:activeNote} = getState().notes;
        Swal.fire({
            title:'Subiendo', 
            text:'Por favor espere',
            allowOutsideClick: false,
            onBeforeOpen:()=>{
                Swal.showLoading();
            }
        });
        // Empezar hacer la carga
        const fileUrl = await fileUpload(file);
        // Actualizar la nota activa
        activeNote.url = fileUrl;
        dispatch(startSaveNote(activeNote));
        Swal.close();
        
    }
}

// eliminar una nota
export const startDeleting = (id)=>{
    return async(dispatch, getState)=>{
        const uid = getState().auth.uid;
        // Eliminar de fireStore
        await db.doc(`${uid}/journal/notes/${id}`).delete();
        // Eliminar de la lista
        // Eliminar del store
        dispatch(deletenote(id));
    }
}

export const deletenote = (id)=>({
    type:types.notesDelete,
    payload:id
});

// Hacer el logout
export const noteLogout = ()=>({
    type:types.notesLogoutCleaning
});