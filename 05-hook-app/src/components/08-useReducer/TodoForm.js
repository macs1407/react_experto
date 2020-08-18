import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoForm = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    // Agregar TUDU
    const handleSubmit = (e)=>{
        e.preventDefault();

        if(description.trim().length <= 1) return;
        
        const nuevoTudu = {
            id: new Date().getTime(),
            desc:description,
            done:false
        };

        // Enviar la funcion que cambia el useReducer
        handleAddTodo(nuevoTudu);
        // Resetar el formuario
        reset();
    }

    return (
        <>
            <h4>Agregar tarea</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="description"
                    placeholder="tarea"
                    autoComplete="off"
                    className="form-control"
                    onChange={handleInputChange}
                    value={description}
                />
                <button className="btn btn-outline-primary mt-1 btn-block" type="submit">Agregar</button>
            </form>  
        </>
    )
}
