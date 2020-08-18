import React, { useState, useMemo } from 'react';
import '../02-useEfect/efects.css';
import { useCounter } from '../../hooks/useCounter';

export const MemoHook = () => {
    const {counter, increment} = useCounter(1000);
    const [show, setShow] = useState(true);

    const procesoPesado = (iteraciones)=>{
        for(let i =0; i< iteraciones; i++){
            console.log('Ahi vamos......');
        }
        return `${iteraciones} iteraciones realizadas`
    }

    // Si el counter cambia se necesita una nueva version memorizada del resultado de esa version
    // Entre [] se ponen las dependencias para que vuelva y se ejecute procesoPesado
    // Esto se hace ya que si hay varios botones en el componente y se pulsa uno react detecta cambios
    // y va a intentar ejecutar de nuevo la funcion procesoPesado
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />
            <p>{memoProcesoPesado}</p>
            <button className="btn btn-primary" onClick={increment}>+1</button>
            <button 
                className="btn btn-primary ml-3" 
                onClick={ ()=>setShow(!show) }
                >
                    Mostrar/Ocultar {JSON.stringify(show)}
            </button>
        </div>
    )
}
