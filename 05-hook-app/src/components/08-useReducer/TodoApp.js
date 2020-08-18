import React, { useReducer, useEffect } from 'react';
import './estilos.css';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

const init = ()=>{
    // Obtener los tudus del localStorage
    return JSON.parse(localStorage.getItem('tudus')) || [];
}

export const TodoApp = () => {
    // El dispatch es un funcion que se le manda una accion y se encarga de modificar el state
    // El init es una funcion que se ejecuta para establecer el estado inicial del reducer
    const [tudus, dispatch] = useReducer(todoReducer, [], init);


    // Eliminar un tudu
    const handleDelete = (tuduId)=>{
        const eliminarTudu = {
            type: 'delete',
            payload: tuduId
        }
        dispatch(eliminarTudu);
    }

    const handleToogle = (tuduId)=>{
        dispatch({
            type:'toogle',
            payload:tuduId
        })
    }

    const handleAddTodo = (newTodo)=>{
        dispatch({
            type:'add',
            payload:newTodo
        })
    }

    // Se ejecuta por lo menos una vez
    // Si los tudus cambian se va avolver a grebar en el localStorage
    useEffect(()=>{
        localStorage.setItem("tudus", JSON.stringify(tudus));
    },[tudus]);

    return (
        <div>
            <h1>Tareas App / cantidad {tudus.length}</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList tudus={tudus} handleDelete={handleDelete} handleToogle={handleToogle}/>
                </div>
                <div className="col-5">
                   <TodoForm handleAddTodo={handleAddTodo}/>
                </div>
            </div>
           
        </div>
    )
}
