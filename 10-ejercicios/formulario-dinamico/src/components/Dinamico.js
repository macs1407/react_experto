import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../Context';

export const Dinamico = () => {
    
    const {personas} = useContext(Context);

    const {persona} = personas;


    useEffect(() => {
       console.log('se dispara');
    }, [personas]);

    
    return (
         <table className="table table-dark" key={personas}>
            <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Email</th>
                <th scope="col">Mascotas</th>
            </tr>
            </thead>
        <tbody>
            {
                persona?.map(persona=>
                    (
                        <tr>
                            <th scope="row">{persona.nombre}</th>
                            <td>{persona.apellidos}</td>
                            <td>{persona.email}</td>
                            <td>{JSON.stringify(persona.mascotas)}</td>
                      </tr>
                    )
                )
            }
        
        </tbody>
      </table>
    )
}
