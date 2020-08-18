import React, { useEffect, useRef } from 'react'
import { NotesAppBar } from './NotesAppBar'
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const {active:note} = useSelector(state => state.notes);

    const [values, handleInputChange, reset] = useForm(note);

    const {title, body, id} = values;

    const activeId = useRef(note.id);

    const handleDelete = ()=>{
        dispatch(startDeleting(id));
    }

    // Mientras cambie el id resetea el formulario y cambia el estado
    useEffect(() => {
        if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id;
        }        
    }, [note,reset]);

    // Estar actualizando la nota activa
    useEffect(()=>{
        dispatch(activeNote(values.id, {...values}));
    },[values,dispatch]);

    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                    <input
                        type="text"
                        className="notes__title-input" 
                        autoComplete="off"
                        placeholder="Algun titulo"
                        name="title"
                        onChange={handleInputChange}
                        value={title}
                    />
                    <textarea 
                        placeholder="Que pasa de nuevo" 
                        className="notes__textarea"
                        name="body"
                        onChange={handleInputChange}
                        value={body}
                    ></textarea>
                    {
                        (note.url) &&
                        (
                            <div className="notes__image">
                                <img src={note.url} alt={title}/>
                            </div>
                        )
                    }
                    
            </div>
            <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
        </div>
    )
}
