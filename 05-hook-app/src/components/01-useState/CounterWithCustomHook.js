import React from 'react';
import './counter.css';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {
    // Hacer destructuring del hook
    const {state:counter, increment, decrement, reset} = useCounter();
    
    return (
        <>
          <h1>Counter with hook: {counter}</h1>
          <hr />

          <button className="btn btn-primary" onClick={()=>increment(3)}>+1</button>&nbsp;
          <button className="btn btn-primary" onClick={()=>decrement(3)}>-1</button> &nbsp;
          <button className="btn btn-primary" onClick={reset}>Reset</button>  
        </>
    )
}
