import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GridItem from './GridItem';

const GifDrid = ({categoria}) => {

    const {data:images, loading} = useFetchGifs(categoria);

    return (
        <>
            <h2>{categoria}</h2>  
            {loading && <p>Cargando...</p>}
            <div className="card-grid">            
                { // Si no se ponen las llaves y se pone () se refiere a un retorno implicito
                    images.map(image =>(
                        <GridItem img={image} key={image.id} {...image}/>   
                    ))
                }
            </div>
        </>
    );
}
 
export default GifDrid;