import React, { useState, useCallback, useEffect } from 'react';
import '../02-useEfect/efects.css';
import { CallBackHijo } from './CallBackHijo';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(5);

    // Retorna una version memorizada de la funcion que me sirve para mandarla como argumento en otros
    // lugares y react va a saber que esa funcion no cambio si la dependencia no ha cambiado
    const increment = useCallback((num)=>{
        setCounter(counter=> counter + num);
    },[setCounter]);

    // Tambien es util cuando en un useEfect se le pasa como dependencia una funcion
    // De esta manera no se estaria pasando una funcion que en realidad no ha cambiado
    useEffect(() => {
        //
    }, [increment])

    return (
        <div>
            <h1>Use CallBack {counter}</h1>
            <hr />
            <CallBackHijo increment={increment}/>
        </div>
    )
}
