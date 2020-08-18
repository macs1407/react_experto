import React, { useEffect } from 'react';
import './efects.css';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {
    
    // Se ponen los [] por que lo que retorna el hook useForm es un arreglo
    const [values,handleInputChange] = useForm({
        name:'',
        email:'',
        password: ''
    });

    const {name, email, password} = values;

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(values);
    }


    useEffect(() => {
       console.log("Email cambio");
    }, [email]);

    return (
        <form onSubmit={handleSubmit}>
          <h1>UseEfect / FormWithCustomHook</h1>  
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

          <div className="form-group">
            <input type="password" 
                name="password" 
                className="form-control" 
                placeholder="password" 
                value={password}
                onChange={handleInputChange}
            />
          </div>
            <button className="btn btn-warning">Enviar</button>
        </form>
    )
}
