import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroesList = ({publisher}) => {
    // Evitar que se vuelva a ejecutar getHeroesByPublisher si no ha cambiado el publisher
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {heroes.map(heroe=>(
                <HeroeCard {...heroe} key={heroe.id} />
            ))}
        </div>
    )
}
