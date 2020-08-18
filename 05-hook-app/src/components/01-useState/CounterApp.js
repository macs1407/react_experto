import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counterUno:5,
        counterDos:30,
        counterTres:10,
    });

    const {counterUno, counterDos} = counter;

    const handleChange = ()=>{
        // Para dejar una copia del state actual se hace con el operador expres ...
        // y se modifica solo la parte que nos interesa en este caso counterUno
        setCounter({
            ...counter,
            counterUno: counterUno+1
        })
    }

    return (
        <div>
            <h1>Counter Uno {counterUno}</h1>
            <h1>Counter Dos {counterDos}</h1>
            <hr />
            <button className="btn btn-primary" onClick={ handleChange }>+1</button>
        </div>
    )
}
