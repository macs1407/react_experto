import React from 'react';
import PropTypes from 'prop-types';
import CounterApp from './CounterApp';

// Hay dos tipos de componentes, los que estan basados por clases y por funciones
// Ahora se maneja en base de funciones, FUNCTIONAL COMPONENTS

// Las propiedades se manda de componente a componente
    // Se puede establecer un valor por defecto si no se envia esa propiedad
const PrimeraApp = ({saludoPadre, subtitulo})=>{
    const saludo = "Hola mundo";
    const numero = 123;
    // Si son boleanos no se imprimen, se utilizan para hacer condiciones para mostrar
    const arreglo = [1,2,3];
    // No se puede imprimir todo un objeto
    const objeto = {
        nombre:"Maikol",
        edad:31,
    }
    
    //const {saludoPadre="defecto"} = props;
    return (
        <>
            <h1>{saludoPadre}.</h1>
            <h1>{saludo} {numero}</h1>
            <p>{arreglo}</p>
            <p>{JSON.stringify(objeto)}</p>
            <h2>{subtitulo}</h2>
            <CounterApp numero={31}/>
        </>
    );
}

// Definir propiedades al componente, se puede decir que la propiedad saludo es obligatoria
PrimeraApp.propTypes = {
    saludoPadre: PropTypes.string.isRequired
}
// Definir valores a las propiedades por defecto
PrimeraApp.defaultProps = {
    subtitulo: "Soy un un subtitulo"
}

export default PrimeraApp;