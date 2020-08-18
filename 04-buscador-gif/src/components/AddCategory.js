import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategorias}) => {
    // Variable para el input
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
        console.log("llamado handleInputChange");
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length > 2) {
            // Pasarle una categoria a la funcion setCategorias de GiExpertApp
            setCategorias(cat=>[inputValue, ...cat]);
            setInputValue('');
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
 
export default AddCategory;