import React from 'react';
// Se utiliza React.memo para evitar que este componente se vuelva a renderizar si las properties no cambian
// en este caso value, en el componente Memorize se esta llamando este componente y hay un boton Mostrar/Ocultar 
// que no tiene nada que ver con este componente pero al hacer click react detecta cambios e intenta llamar
// de nuevo a este componente y eso esta mal
export const Small = React.memo(({value}) => {
    console.log("Se volvio a llamar :(");

    return (
        <small>
            {value}
        </small>
    )
})