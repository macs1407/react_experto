import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroeById } from '../../selectors/getHeroeById';

export const HeroesScreen = ({history}) => {
    // Para extraer los parametros por url se hace con useParams
    const {heroeId} = useParams();
    // Evitar que se vuelva a ejecutar getHeroeById si no ha cambiado heroeId
    const heroe = useMemo(() => getHeroeById(heroeId), [heroeId]) ;
    // Si no encuentra el heroe lo redirecciona a marvel
    if(!heroe) {
        return <Redirect to="/" />
    }

    const {superhero, publisher, alter_ego, first_appearance, characters} = heroe;

    const handleReturn = ()=>{
        // Validacion en modo incoginito
        if(history.length <= 2){
            history.push("'")
        } else {
            // Regresar a la pagina de donde llamaron a HeroesScreen
            history.goBack();
        }
        
    }

    return (
        <div className="row mt-5 animate__animated animate__fadeInLeft">
            <div className="col-4">
                <img src={`../assets/heroes/${heroeId}.jpg`} alt={superhero} className="img-thumbnail"/>
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter Ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First Appearance: </b>{first_appearance}</li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button className="btn btn-outline-info" onClick={handleReturn}>Regresar</button>
            </div>
        </div>
    )
}
