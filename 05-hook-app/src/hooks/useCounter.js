import { useState } from "react";

// Para crear un custom hook, hacemos lo siguiente
export const useCounter = (initialState = 10) => {
    // 1-) Establecer el useState
    const [counter, setCounter] = useState(initialState);

    const increment = ()=>{
        setCounter(counter + 1);
    }

    const decrement = ()=>{
        setCounter(counter - 1);
    }

    const reset = ()=>{
        setCounter(initialState);
    }
    // Lo que retorna el custom hook
    return {
        counter,
        increment,
        decrement,
        reset
    }
}
