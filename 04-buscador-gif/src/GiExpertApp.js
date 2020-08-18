import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifDrid from './components/GifGrid';

const GifExpertApp = () => {
    const listaCategorias = ['Goku'];
    const [categorias, setCategorias] = useState(listaCategorias);

    //const handleUp = ()=>{
        // Con los tres puntos indicamos que pasamos una copia del del arreglo actual
        // [...categorias, 'aaa'] agregar de ultimo
        // ['aaa', ...categorias] agrega de primero
        //setCategorias([...categorias, 'aaa']);
    //}

    return ( 
        <>
            <h2>Buscador de gifs</h2>
            <hr />
            {/* <button onClick={handleUp}>Agregar</button> */}
            <AddCategory setCategorias={setCategorias}/>
            <ol>
                {
                    categorias.map(categoria=>{
                        return <GifDrid key={categoria} categoria={categoria} />
                    })
                }
            </ol>
        </>
     );
}
 
export default GifExpertApp;