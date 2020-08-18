import React, { useMemo } from 'react'
import { HeroeCard } from '../heroes/HeroeCard';
import {useForm} from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
    // Obtener el query que biene por url
    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    const { searchText } = formValues;
    // Poner el use memo por que cada vez que pulsamos sobre el input esta cambiando el state de 
    // palabra y haria la busqueda
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <div>
            <h1>Buscador</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Buscador Form</h4>
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Buscar heroe"
                            className="form-control"
                            onChange={handleInputChange}
                            name="searchText"
                            value={searchText}
                            autoComplete="off"
                        />
                        <button type="submit" className="btn btn-block btn-outline-primary mt-1">
                            Buscar..
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    {
                        (q === '') && 
                        <div className="alert alert-info">
                            Buscar un heroe
                        </div>
                    }

{
                        (q !== '' && heroesFiltered.length === 0) && 
                        <div className="alert alert-danger">
                            No hay un heroe para {q}
                        </div>
                    }
                    
                    <hr />
                    {
                        heroesFiltered.map(heroe=>(
                            <HeroeCard {...heroe} key={heroe.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
