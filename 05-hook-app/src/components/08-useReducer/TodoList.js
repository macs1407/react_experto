import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({tudus, handleDelete, handleToogle}) => {

    return (
        <ul className="list-group list-group-flush">
        {
            tudus.map((tarea, indice)=>(
                <TodoListItem 
                    key={tarea.id}
                    todo={tarea} 
                    index={indice} 
                    handleDelete={handleDelete} 
                    handleToogle={handleToogle}/>
            ))
        }                
        </ul>
    )
}
