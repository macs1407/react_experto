import React, { useRef } from 'react';
import '../02-useEfect/efects.css';

export const FocusScreen = () => {

    // Sirve para tener referencia o seguimiento a un objeto
    const inputRef = useRef()

    const handleKey = ()=>{
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <div>
            <h1>Focus</h1>
            <hr />
            <input 
                ref={inputRef}
                className="form-control" 
                placeholder="nombre"
            /><br />
            <button className="btn btn-primary" onClick={handleKey}>Focus</button>
        </div>
    )
}
