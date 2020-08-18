import React, { useEffect, useState } from 'react'
import './efects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    });

    const {name, email} = formState;

    const handleInputChange = ({target})=>{
        // Se haca una copia del estado actual con ... o si no sobre escrbiriamos el state actual
        // el [target.name] hace referencia a name y email
        setFormState({
            ...formState,
            [target.name]:target.value
        });
    }

    // permite ejecutar un efecto secundario cuando algo cambia en el componente
    // si se pone [] vacio solo se va a ejecutar cuando se renderice el componente una vez
    useEffect(()=>{
        console.log('Ingresa');
    },[]);

    // El equipo de angular recomienda crear un nuevo useEfect sobre los estados que nos interesen
    // estar escuchando
    useEffect(()=>{
        console.log('formState cambio');
    },[formState]);

    useEffect(()=>{
        console.log('email cambio');
    },[email]);
    return (
        <>
          <h1>UseEfect</h1>  
          <hr/>
          <div className="form-group">
            <input type="text" 
                name="name" 
                className="form-control" 
                placeholder="Nombre" 
                autoComplete="off" value={name}
                onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <input type="text" 
                name="email" 
                className="form-control" 
                placeholder="Email" 
                autoComplete="off" value={email}
                onChange={handleInputChange}
            />
          </div>

          {(name === 'maikol') && <Message />}
        </>
    )
}
