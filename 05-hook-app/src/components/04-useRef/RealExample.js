import React, { useState } from 'react';
import '../02-useEfect/efects.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExample = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>Real example ref</h1>
            <hr />
            {
                show && (<MultipleCustomHooks />)
            }            
            <button 
                className="btn btn-primary mt-5"
                onClick={ ()=>{setShow(!show)} }
                >
                    Mostrar/Ocultar
            </button>
        </div>
    )
}
