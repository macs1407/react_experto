import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coors, setCoors] = useState({x:0,y:0});
    const {x,y} = coors;

    useEffect(() => {
        const capturaElRaton = (e)=>{
            const coors = {x:e.x, y:e.y};
            setCoors(coors);
        };
        window.addEventListener('mousemove', capturaElRaton);

        console.log('componente montado');
        // Esta parte se utiliza para desmontar el componente y hacer limpieza
        return () => {
            console.log('componente desmontado');
            // Eliminar el evento cuando se desmonte el componente
            window.removeEventListener('mousemove', capturaElRaton);
        }   
    }, [])

    return (
        <>
            <h1>Coordenadas</h1>
            <p>x:{x} y:{y}</p>  
        </>
    )
}
