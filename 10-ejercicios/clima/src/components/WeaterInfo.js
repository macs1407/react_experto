import React from 'react';

export const WeaterInfo = ({datos}) => {
    const {temperature, description, city, country, wind_speed, humidity, error} = datos || {};

    return (
        <>
            {
                error && 
                (<div className='alert alert dander'>
                    <p>{error}</p>
                </div>)
            }
            {
                temperature 
                ?
                    <div className="card card-body mt-2 animated fadeInUp">    
                        {
                            city && country &&
                            <p><i className="fas fa-location-arrow"></i> Localizacion: {city}, {country}</p>
                        }
                        {
                            temperature && 
                            <p><i className="fas fa-temperature-low"></i> Temperatura: {temperature} ℃, {description}</p>
                        }
                        {
                            humidity && 
                            <p><i className="fas fa-water"></i> Humedad: {humidity}</p>
                        }
                        {
                            wind_speed && 
                            <p><i className="fas fa-wind"></i> Velocidad: {wind_speed}</p>
                        }
                    </div>
                
                :
                (
                    <div className="card card-body mt-2 text-center">
                        <i className="fas fa-sun fa-10x"></i>
                    </div>
                )
            }
        </>
    )
}
