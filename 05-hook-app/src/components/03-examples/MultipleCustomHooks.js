import React from 'react';
import '../02-useEfect/efects.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // Con esta condicion le decimos que verifique que traiga informacion
    // del arreglo en la posicion 0
    const {author, quote} = !!data && data[0];

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            {
                loading 
                    ?
                        (
                            <div className="alert alert-info text-center">Loading....</div>
                        )
                    :
                        (
                            <blockquote className="blockquote text-right">
                                <p className="mn-0">{quote}</p>
                                <footer className="blockquote-footer">{author}</footer>
                            </blockquote>
                        )
            }
            
            <button className="btn btn-primary" onClick={increment}>Siguiente frase</button>
        </div>
    )
}
