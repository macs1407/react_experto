import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({numero = 5}) => {

    // Uso de hook useState, un hook no es mas que una funcion
    // en este caso useState tiene un nombre y una funcion que apunta a ese nombre
    // El useState retorna un arreglo con 2 valores
    const [counter, setCounter] = useState(numero)

    const handleApp = (e)=>{
        // No se puede poner counter++ por que sria lo mismo que decir
        // counter = counter + 1 y se estaria intentando cambiar el state de una constante
        setCounter(counter+1);
    } 

    const handleReset = (e) =>{
        setCounter(numero);
    }

    const handlerMinus = (e) =>{
        setCounter(counter-1);
    }

    return ( 
        <>
            <h1>Counter app</h1>
            <h2>{numero}</h2>
            <h3>{counter}</h3>
            {/* No se pone handleApp() se pone handleApp, por entonces ejecutaria la funcion cuando se 
            renderice el componente y ese no es el comportamiento adecuado */}
            <button onClick={ handleApp }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handlerMinus }>-1</button>
        </>
     );
}

CounterApp.propTypes = {
    numero: PropTypes.number
}
 
export default CounterApp;