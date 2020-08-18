import React from 'react'

export const CallBackHijo = React.memo(({increment}) => {
    console.log("me volvio a generar");
    return (
        <button className="btn btn-primary" onClick={ ()=>increment(5)}>
            Incrementar
        </button>
    )
});
